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

const recentUpdates = [
        {
            title: "Smart Contract Audit Completed",
            description: "All governance contracts have passed security audit with zero critical issues",
            date: "2 days ago",
            icon: "🔒"
        },
        {
            title: "UI/UX Design Finalized",
            description: "Community feedback incorporated into final governance portal design",
            date: "1 week ago",
            icon: "🎨"
        }
    ];
        
    return (
        <ComingSoon
            title="Governance Portal"
            description="Shape the future through decentralized governance"
            feature="governance system"
            icon="🗳️"
            progress={82}
            features={features}
            recentUpdates={recentUpdates}
            subscriberCount={1523}
        />
    );
}
