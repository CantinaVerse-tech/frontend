'use client';
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
        },
        {
            title: "Template Library Expanded",
            description: "Added 15 new token templates including DeFi and NFT utilities",
            date: "1 week ago",
            icon: "📚"
        }
    ];

    return (
        <ComingSoon
            title="Token Creation Studio"
            description="Build and deploy tokens with professional-grade tools"
            feature="token creation toolkit"
            icon="🪙"
            progress={65}
            features={features}
            subscriberCount={892}
        />
    );
} // REMOVED the extra closing brace that was here