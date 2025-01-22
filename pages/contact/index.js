import Link from 'next/link';

export default function Contact() {
    const contactIds = [1, 2, 3]; // Example IDs to navigate to

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Contact Page</h1>
            <p>Select a contact:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {contactIds.map((id) => (
                    <li key={id} style={{ marginBottom: '10px' }}>
                        <Link href={`/contact/${id}`}>View Contact {id}</Link>
                    </li>
                ))}
            </ul>
            <Link href="/">Go back Home</Link>
        </div>
    );
}
