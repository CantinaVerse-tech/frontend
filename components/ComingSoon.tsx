// components/ComingSoon.js
'use client';
import { useState } from 'react';
import { Footer } from './Footer';
import Header from './Header';
import ProgressRing from './ProgressRing';
import FeaturePreview from './FeaturePreview';
import SocialProof from './SocialProof';

export default function ComingSoon({ 
    title = "Coming Soon", 
    description = "We're building something amazing for you.",
    feature = "new feature",
    icon = "🚀",
    showNotifyMe = true 
}) {

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

        const handleNotifySubmit = async (e) => {
        e.preventDefault();
        if (!email) return;
        
        // Here you would typically send to your backend/newsletter service
        console.log('Email submitted:', email);
        setIsSubmitted(true);
        setEmail('');
        
        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex items-center justify-center px-4">
                <div className="coming-soon-container max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <span className="text-6xl mb-4 block">{icon}</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {title}
                        </h1>
                        <p className="text-xl text-gray-600 mb-2">
                            {description}
                        </p>
                        <p className="text-lg text-gray-500">
                            Our {feature} is launching soon. Stay tuned for updates!
                        </p>
                    </div>

                    {showNotifyMe && (
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4">Get notified when we launch</h3>
                            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                >
                                    {isSubmitted ? '✓ Subscribed!' : 'Notify Me'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Progress Ring */}
                    <div className="mt-12">
                        <ProgressRing progress={progress} label="Development Progress" />
                    </div>

                    {/* Status Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-200">
                            <h4 className="font-semibold mb-2">🔧 In Development</h4>
                            <p className="text-sm text-gray-600">We're working hard to bring you the best experience</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-200">
                            <h4 className="font-semibold mb-2">✨ New Features</h4>
                            <p className="text-sm text-gray-600">Exciting functionality coming your way</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-transform duration-200">
                            <h4 className="font-semibold mb-2">🚀 Launch Ready</h4>
                            <p className="text-sm text-gray-600">Almost there! Final touches being applied</p>
                        </div>
                    </div>

                    {/* Social Proof */}
                    <SocialProof 
                        subscriberCount={subscriberCount}
                        recentUpdates={recentUpdates}
                        showLiveActivity={true}
                    />
                </div>
            </div>
            <Footer />
        </main>
    );
}
