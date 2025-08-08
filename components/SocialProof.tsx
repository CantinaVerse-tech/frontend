'use client';
import { useEffect, useState } from 'react';

export default function SocialProof({ 
    subscriberCount = 1247,
    recentUpdates = [],
    showLiveActivity = true 
}) {
    const [liveCount, setLiveCount] = useState(subscriberCount);
    const [recentActivity, setRecentActivity] = useState([]);

    useEffect(() => {
        if (showLiveActivity) {
            // Simulate live subscriber updates
            const interval = setInterval(() => {
                if (Math.random() > 0.7) { // 30% chance every 5 seconds
                    setLiveCount(prev => prev + 1);
                    setRecentActivity(prev => [
                        `Someone just joined the waitlist! 🎉`,
                        ...prev.slice(0, 2)
                    ]);
                }
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [showLiveActivity]);

    const formatCount = (count) => {
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
        }
    return count.toString();
    };
}
