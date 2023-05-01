import { MongoClient } from 'mongodb';
import getConfig from 'next/config';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    )
      return res.status(422).json({ message: 'Invalid input' });

    const newMessage = { email, name, message };

    let client;

    try {
      const { serverRuntimeConfig } = getConfig();
      const mongoConnectionString = serverRuntimeConfig.mongoConnectionString;
      client = await MongoClient.connect(mongoConnectionString);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Something went wrong!' });
    }

    try {
      const db = client.db();
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (e) {
      client.close();
      console.log(e);
      return res.status(500).json({ message: 'Something went wrong!' });
    }

    client.close();
    return res
      .status(201)
      .json({ message: `Successfully stored message with id: ${newMessage.id}` });
  }
};

export default handler;
