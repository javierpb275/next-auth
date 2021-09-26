import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.db_user}:${process.env.db_user_password}@${process.env.db_cluster_name}.cjzju.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};
