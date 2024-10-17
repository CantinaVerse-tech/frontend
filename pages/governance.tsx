'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

export default function Governance() {
    return (
        <main>
            <Header />
            <div className="coming-soon-container">
                <h1>Coming Soon</h1>
                <p>We're excited to announce that our new feature is launching in Q1 of 2025.</p>
                <p>Stay tuned for more details and updates!</p>
                {/* Optionally, keep the subscription form for updates */}
            </div>
            <Footer />
        </main>
    );
}
