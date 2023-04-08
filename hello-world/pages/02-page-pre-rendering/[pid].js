// From NodeJS
import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;
  if (!loadedProduct) return <p>Loading...</p>;
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json'); // Root level and not page level
  const jsonData = await fs.readFile(filePath);
  return JSON.parse(jsonData);
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!product) return { notFound: true };
  return { props: { loadedProduct: product } };
};

export const getStaticPaths = async () => {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));
  return { paths: params, fallback: true };
};

export default ProductDetailPage;
