import Link from 'next/link';

export default function Home() {
  return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Next.js Class Demo</h1>
        <p>This is the home page. Use the navigation below to explore.</p>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link href="/about/">Go to About Page</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}
