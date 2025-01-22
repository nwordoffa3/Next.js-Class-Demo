import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ContactDetails() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return <p>Loading...</p>;

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Contact Page for ID: {id}</h1>
            <p>Viewing contact details for user ID: {id}</p>
            <Link href="/contact">Go back to Contact Page</Link>
        </div>
    );
}
