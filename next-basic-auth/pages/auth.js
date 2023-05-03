import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import AuthForm from '../components/auth/auth-form';

function AuthPage() {
  const router = useRouter();
  const { status } = useSession();
  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'authenticated') router.push('/profile');
  return <AuthForm />;
}

export default AuthPage;
