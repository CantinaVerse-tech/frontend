'use client';
import { useState } from 'react';

export default function NewsletterSignup({ 
    benefits = [
        "Early access to beta features",
        "Exclusive educational content",
        "Priority support",
        "Community Discord access"
    ],
    incentive = "Get a free NFT when you join!" 
}) {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email) return;
        
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitted(true);
        setIsLoading(false);
        setEmail('');
        
        // Reset after showing success
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    if (isSubmitted) {
        return (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Welcome to the Community!</h3>
                <p className="text-green-700 mb-4">Check your email for your welcome message and free NFT details.</p>
                <div className="text-sm text-green-600">
                    You'll receive updates about our launch progress and exclusive content.
                </div>
            </div>
        );
    }
}