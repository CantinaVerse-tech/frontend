'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function Governance() {
    return (
        <ComingSoon
            title="Governance Portal"
            description="Participate in shaping the future of our platform"
            feature="governance system"
            icon="🗳️"
        />
    );
    // return (
    //     <main>
    //         <Header />
    //         <div className="coming-soon-container">
    //             <h1>Coming Soon</h1>
    //             <p>We're excited to announce that our new feature is launching soon.</p>
    //             <p>Stay tuned for more details and updates!</p>
    //         </div>
    //         <Footer />
    //     </main>
    // );
}
