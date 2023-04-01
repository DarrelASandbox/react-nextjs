import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();
  const { clientid } = router.query;

  return (
    <div>
      <h1>Client {clientid} Page</h1>
    </div>
  );
};

export default ClientPage;
