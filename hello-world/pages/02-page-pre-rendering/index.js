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
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); // Root level and not page level
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return { props: { products: data.products } };
};

export default HomePage;
