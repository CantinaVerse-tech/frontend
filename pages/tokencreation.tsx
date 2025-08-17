'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function TokenCreation() {
        const features = [
        {
            name: "No-Code Builder",
            icon: "🛠️",
            description: "Create tokens without writing a single line of code",
            highlights: ["Drag & Drop", "Template Library", "Real-time Preview"],
            status: "Testing"
        },
        {
            name: "Advanced Features",
            icon: "⚡",
            description: "Add sophisticated tokenomics and utility features",
            highlights: ["Staking Rewards", "Burn Mechanisms", "Governance Rights"],
            status: "In Progress"
        },
        {
            name: "Deploy Anywhere",
            icon: "🌐",
            description: "Launch on multiple chains with one-click deployment",
            highlights: ["Multi-chain Support", "Gas Optimization", "Instant Launch"],
            status: "Planning"
        }
    ];

    const recentUpdates = [
        {
            title: "Foundry Integration Complete",
            description: "Full Foundry framework integration for advanced testing and deployment",
            date: "3 days ago",
            icon: "⚙️"
        }
    ];
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
