import { MongoClient } from 'mongodb';
import getConfig from 'next/config';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes('@')) {
      console.log(userEmail);
      return res.status(422).json({ message: 'Invalid email address.' });
    }

    const { serverRuntimeConfig } = getConfig();
    const mongoConnectionString = serverRuntimeConfig.mongoConnectionString;

    try {
      const client = await MongoClient.connect(mongoConnectionString);
      const db = client.db();
      await db.collection('emails').insertOne({ email: userEmail });
      client.close();
      return res.status(201).json({ message: 'Signed up!' });
    } catch (e) {
      console.log(e);
    }
  }
};

export default handler;
