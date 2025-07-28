'use client';
import { useEffect, useState } from 'react';

export default function ProgressRing({ 
    progress = 75, 
    size = 120, 
    strokeWidth = 8,
    label = "Development Progress" 
}) {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedProgress(progress);
        }, 500);
        return () => clearTimeout(timer);
    }, [progress]);
}