// From NodeJS
import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  // Fallback state for p2 and p3 which are not pre-generated
  if (!loadedProduct) return <p>Loading...</p>;

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); // Root level and not page level
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);
  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: 'p1' } }, // pre-generate p1 only instead of p1 to p3
    ],
    fallback: true,
  };
};

export default ProductDetailPage;
