import { hashPassword, verifyPassword } from '@/lib/auth';
import connectToDatabase from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from 'pages/api/auth/[...nextauth]';

const handler = async (req, res) => {
  if (req.method !== 'PATCH') return;
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: 'Unauthenticated' });
  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;
  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  const user = await usersCollection.findOne({ email: userEmail });
  if (!user) {
    client.close();
    return res.status(404).json({ message: 'User not found' });
  }

  const currentPassword = user.password;
  const isCorrectPassword = await verifyPassword(oldPassword, currentPassword);
  if (!isCorrectPassword) {
    client.close();
    return res.status(403).json({ message: 'Invalid credentials.' });
  }

  const hashedPassword = await hashPassword(newPassword);
  await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );

  client.close();
  res.status(200).json({ message: 'Password updated!' });
};

export default handler;
