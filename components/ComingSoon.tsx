// components/ComingSoon.js
'use client';
import { useState } from 'react';
import { Footer } from './Footer';
import Header from './Header';

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
                </div>
            </div>
        </main>
    )
}