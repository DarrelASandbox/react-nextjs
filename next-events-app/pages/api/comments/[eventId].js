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
      const db = client.db();
      const documents = await db
        .collection('comments')
        .find()
        .sort({ _id: -1 })
        .toArray();

      return res.status(200).json({ comment: documents });
    }

    client.close();
  } catch (e) {
    console.log(e);
  }
};

export default handler;
