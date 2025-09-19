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
}