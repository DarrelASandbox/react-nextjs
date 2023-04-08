import { useEffect, useState } from 'react';
import useSWR from 'swr';

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  const { data, error } = useSWR(
    'https://dummyjson.com/products',
    async (url) => (await fetch(url)).json() // Client-Side Fetching
  );

  useEffect(() => {
    if (data) setSales(data.products);
  }, [data]);

  if (error) return <p>Failed to load.</p>;
  if (!data && !sales) return <p>Loading...</p>;

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

// Pre-Fetching
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    return { props: { sales: products, revalidate: 10 } };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default LastSalesPage;
