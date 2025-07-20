'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function TokenCreation() {
    return (
        <ComingSoon
            title="Token Creation Studio"
            description="Create and deploy your own tokens with ease"
            feature="token creation toolkit"
            icon="🪙"
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
