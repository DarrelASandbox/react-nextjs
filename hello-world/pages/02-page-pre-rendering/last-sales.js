import { useEffect, useState } from 'react';

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setSales(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

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
