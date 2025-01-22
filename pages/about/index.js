import Link from 'next/link';

export default function About() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>About Us</h1>
            <p>This is the About page.</p>
            <p>Signed, Dana, Naol, and Sean</p>
            <Link href="/">Go back Home</Link>
        </div>
    );
}
