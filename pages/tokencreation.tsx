'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function TokenCreation() {
        return (
        <ComingSoon
            title="Gaming Hub"
            description="Immersive gaming experiences await"
            feature="gaming platform"
            icon="🎮"
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
