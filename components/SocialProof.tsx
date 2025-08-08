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

        return (
        <div className="mt-12 space-y-8">
            {/* Subscriber count */}
            <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 px-6 py-3 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">
                        <span className="font-bold text-green-600">{formatCount(liveCount)}</span> people waiting for launch
                    </span>
                </div>
            </div>
            {/* Recent activity */}
            {recentActivity.length > 0 && (
                <div className="max-w-md mx-auto">
                    <h4 className="text-sm font-medium text-gray-500 mb-3 text-center">Recent Activity</h4>
                    <div className="space-y-2">
                        {recentActivity.map((activity, index) => (
                            <div
                                key={index}
                                className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3 animate-fadeIn"
                            >
                                {activity}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* Development updates */}
            {recentUpdates.length > 0 && (
                <div className="max-w-2xl mx-auto">
                    <h4 className="text-lg font-semibold text-center mb-6">Latest Updates</h4>
                    <div className="space-y-4">
                        {recentUpdates.map((update, index) => (
                            <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl">{update.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h5 className="font-medium">{update.title}</h5>
                                        <span className="text-xs text-gray-500">{update.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{update.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
