import { connectDatabase, insertDocument } from '@/helpers/db-utils';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes('@')) {
      console.log(userEmail);
      return res.status(422).json({ message: 'Invalid email address.' });
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Connecting to the database failed!' });
    }

    try {
      await insertDocument(client, 'newsletter', { email: userEmail });
      client.close();
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Inserting data failed!' });
    }

    return res.status(201).json({ message: 'Signed up!' });
  }
};

export default handler;
