import { hashPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const { email, password } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }
  const client = await connectDatabase();
  const db = client.db();
  const existingUser = await db.collection('users').findOne({email});
  if (existingUser) {
      res,status(422).json({message: 'unable to register'});
      client.close();
    return;
  }
  const hashedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "Created user!" });
  client.close();
};

export default handler;
