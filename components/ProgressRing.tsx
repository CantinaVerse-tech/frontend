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
                    {/* Progress circle */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="text-blue-600 transition-all duration-1000 ease-in-out"
                    />
                </svg>
                {/* Progress text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">
                        {Math.round(animatedProgress)}%
                    </span>
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-600 text-center">{label}</p>
        </div>
    );
}