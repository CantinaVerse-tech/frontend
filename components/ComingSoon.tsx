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
}