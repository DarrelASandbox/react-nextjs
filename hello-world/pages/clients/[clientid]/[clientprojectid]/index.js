import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
  const router = useRouter();
  const { clientid, clientprojectid } = router.query;

  return (
    <div>
      <h1>{clientid} Projects Page</h1>
      <h2>Project: {clientprojectid}</h2>
    </div>
  );
};

export default ClientProjectsPage;
