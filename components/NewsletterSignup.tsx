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
}