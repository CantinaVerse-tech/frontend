'use client';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import ComingSoon from '../components/ComingSoon';

export default function Governance() {
        const features = [
        {
            name: "Proposal System",
            icon: "📝",
            description: "Create and submit governance proposals for community voting",
            highlights: ["Smart Contract Integration", "Multi-signature Support", "Automated Execution"],
            status: "In Progress"
        },
        {
            name: "Voting Mechanism",
            icon: "🗳️",
            description: "Secure, transparent voting with token-weighted governance",
            highlights: ["Gasless Voting", "Delegation", "Quadratic Voting"],
            status: "Testing"
        },
        {
            name: "Treasury Management",
            icon: "💰",
            description: "Community-controlled treasury with transparent fund allocation",
            highlights: ["Multi-sig Wallet", "Streaming Payments", "Budget Tracking"],
            status: "Planning"
        }
            ];
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
