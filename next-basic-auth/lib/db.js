import { MongoClient } from 'mongodb';
import getConfig from 'next/config';

const connectToDatabase = async () => {
  const { serverRuntimeConfig } = getConfig();
  const mongoConnectionString = serverRuntimeConfig.mongoConnectionString;
  const client = await MongoClient.connect(mongoConnectionString);
  return client;
};

export default connectToDatabase;
