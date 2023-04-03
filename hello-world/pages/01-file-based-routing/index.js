import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <ul>
      <li>
        <Link href="/01-file-based-routing/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link href="/01-file-based-routing/clients">Clients</Link>
      </li>
      <li>
        <Link href="/01-file-based-routing/blog">Blog</Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
