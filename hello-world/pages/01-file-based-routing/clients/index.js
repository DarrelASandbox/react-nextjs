import Link from 'next/link';

const ClientListPage = () => {
  const clients = [
    { id: 'max', name: 'Maximilian' },
    { id: 'manu', name: 'Manuel' },
  ];

  return (
    <div>
      <h1>Client List Page</h1>
      <ol>
        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/01-file-based-routing/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}

        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: '/01-file-based-routing/clients/[clientid]',
                query: { clientid: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ClientListPage;
