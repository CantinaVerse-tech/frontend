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
        },
        {
            name: "Social Features",
            icon: "👥",
            description: "Connect with other players and form gaming communities",
            highlights: ["Guild System", "Chat Integration", "Achievement Sharing"],
            status: "Planning"
        }
    ];

    const recentUpdates = [
        {
            title: "Game Engine Integration",
            description: "Successfully integrated Unity SDK for seamless Web3 gaming experience",
            date: "4 days ago",
            icon: "🎮"
        },
        {
            title: "Beta Testing Started",
            description: "Closed beta with 100 selected users providing valuable feedback",
            date: "2 weeks ago",
            icon: "🧪"
        }
    ];

    return (
        <ComingSoon
            title="Gaming Hub"
            description="Where blockchain meets immersive gaming experiences"
            feature="gaming platform"
            icon="🎮"
            progress={58}
            features={features}
            recentUpdates={recentUpdates}
            subscriberCount={2156}
        />
    );
}
