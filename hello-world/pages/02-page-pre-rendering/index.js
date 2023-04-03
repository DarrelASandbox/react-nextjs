// From NodeJS
import path from 'path';
import fs from 'fs/promises';

const HomePage = (props) => {
  const { products } = props;

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  console.log('Regenerating');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); // Root level and not page level
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) return { redirect: { destination: '/' } };
  if (data.products.length === 0) return { notFound: true }; // Return 404 page

  return { props: { products: data.products }, revalidate: 10 };
};

export default HomePage;
