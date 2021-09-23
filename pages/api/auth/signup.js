import { hashPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

const handler = (req, res) => {
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
  const client = connectDatabase();
  const db = client.db();
  const hashedPassword = hashPassword(password);
  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });
  res.status(201).json({ message: "Created user!" });
};

export default handler;
