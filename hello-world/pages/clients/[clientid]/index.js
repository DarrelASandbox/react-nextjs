import { useRouter } from 'next/router';

const ClientPage = () => {
  const router = useRouter();
  const { clientid } = router.query;

  const loadClientHandler = () => {
    // load data...
    // router.push('/clients/max/project1');
    router.push({
      pathname: '/clients/[clientid]/[clientprojectid]',
      query: { clientid: 'max', clientprojectid: 'project1' },
    });
  };

  return (
    <div>
      <h1>Client {clientid} Page</h1>
      <button onClick={loadClientHandler}>Load Project 1</button>
    </div>
  );
};

export default ClientPage;
