import { MongoClient } from 'mongodb';
import getConfig from 'next/config';

const connectDatabase = async () => {
  const { serverRuntimeConfig } = getConfig();
  const mongoConnectionString = serverRuntimeConfig.mongoConnectionString;

  const client = await MongoClient.connect(mongoConnectionString);
  return client;
};

const insertDocument = async (client, collection, document) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

// The default (an empty object: {}) ensures that NO filter is applied (i.e. we get ALL documents).
const getAllDocuments = async (client, collection, sort, filter = {}) => {
  const db = client.db();
  const documents = await db.collection(collection).find(filter).sort(sort).toArray();
  return documents;
};

export { connectDatabase, insertDocument, getAllDocuments };
