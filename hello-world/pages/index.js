import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <ul>
      <li>
        <Link href="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/clients">Clients</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
