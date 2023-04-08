import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const { data, error } = useSWR('https://dummyjson.com/products', async (url) =>
    (await fetch(url)).json()
  );

  useEffect(() => {
    if (data) setSales(data.products);
  }, [data]);

  if (error) return <p>Failed to load.</p>;
  if (!data || !sales) return <p>Loading...</p>;

  return (
    <ul>
      {sales?.map((sale) => (
        <li key={sale.id}>
          {sale.stock} {sale.title} unsold @ ${sale.price} each
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
