import { connectDatabase, getAllDocuments, insertDocument } from '@/helpers/db-utils';

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Connecting to the database failed!' });
  }

  if (req.method === 'POST') {
    const { email, name, text } = req.body;
    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      client.close();
      return res.status(422).json({ message: 'Invalid input.' });
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, 'comments', newComment);
      newComment._id = result.insertedId;
      return res.status(201).json({ message: 'Added comment.', comment: newComment });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Inserting data failed!' });
    }
  }

  if (req.method === 'GET') {
    let documents;

    try {
      documents = await getAllDocuments(client, 'comments', { _id: -1 }, { eventId });
      return res.status(200).json({ comment: documents });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: 'Failed to retrieve comments' });
    }
  }

  client.close();
};

export default handler;
