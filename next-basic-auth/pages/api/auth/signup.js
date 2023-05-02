import hashPassword from '@/lib/auth';
import connectToDatabase from '@/lib/db';

const handler = async (req, res) => {
  if (req.method !== 'POST') return;

  const data = req.body;
  const { email, password } = data;
  if (!email || !email.includes('@') || !password || password.trim().length < 7)
    return res.status(422).json({
      message: 'Invalid password: Password needs to be at least 7 character long.',
    });

  const client = await connectToDatabase();
  const db = client.db();
  const hashedPassword = await hashPassword(password);
  const result = await db
    .collection('users')
    .insertOne({ email, password: hashedPassword });
  return res.status(201).json({ message: 'User is created!' });
};

export default handler;
