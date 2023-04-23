import { MongoClient } from 'mongodb';
import getConfig from 'next/config';

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const { serverRuntimeConfig } = getConfig();
  const mongoConnectionString = serverRuntimeConfig.mongoConnectionString;

  try {
    const client = await MongoClient.connect(
      mongoConnectionString + 'events?retryWrites=true&w=majority'
    );

    if (req.method === 'POST') {
      const { email, name, text } = req.body;
      if (
        !email.includes('@') ||
        !name ||
        name.trim() === '' ||
        !text ||
        text.trim() === ''
      )
        return res.status(422).json({ message: 'Invalid input.' });

      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      const db = client.db();
      const result = await db.collection('comments').insertOne(newComment);
      console.log(result);
      newComment.id = result.insertedId;

      console.log(newComment);
      return res.status(201).json({ message: 'Added comment.', comment: newComment });
    }

    if (req.method === 'GET') {
      const dummyList = [
        { id: 'c1', name: 'Max', text: 'Comment1' },
        { id: 'c2', name: 'Manu', text: 'Comment2' },
      ];

      return res.status(200).json({ comment: dummyList });
    }

    client.close();
  } catch (e) {
    console.log(e);
  }
};

export default handler;
