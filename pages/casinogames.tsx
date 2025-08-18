'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function Gaming() {
        const features = [
        {
            name: "NFT Gaming",
            icon: "🎲",
            description: "Play-to-earn games with NFT rewards and marketplace integration",
            highlights: ["P2E Mechanics", "NFT Rewards", "Cross-game Assets"],
            status: "In Progress"
        },
        {
            name: "Tournament System",
            icon: "🏆",
            description: "Competitive gaming with automated prize distribution",
            highlights: ["Smart Contracts", "Live Leaderboards", "Prize Pools"],
            status: "Testing"
        }
    ]
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
