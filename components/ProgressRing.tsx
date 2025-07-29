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

   return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <svg
                    className="transform -rotate-90"
                    width={size}
                    height={size}
                >
                    {/* Background circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        className="text-gray-200"
                    />
                    </svg>
                </div>  
            </div>
)}

