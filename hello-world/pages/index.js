import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <ul>
      <li>
        <Link href="/01-file-based-routing">01-file-based-routing</Link>
      </li>
      <li>
        <Link href="/02-page-pre-rendering">02-page-pre-rendering</Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
