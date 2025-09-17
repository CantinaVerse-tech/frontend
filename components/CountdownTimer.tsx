'use client';
import { useEffect, useState } from 'react';

// Define the props interface
interface CountdownTimerProps {
    targetDate: string | Date;
    onComplete?: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                setIsComplete(true);
                onComplete && onComplete();
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate, onComplete]);

    if (isComplete) {
        return (
            <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-green-600 mb-2">🎉 We're Live!</h2>
                <p className="text-gray-600">Thank you for waiting. Check out our new features!</p>
            </div>
        );
    }

    return (
        <div className="text-center py-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-700">Launch Countdown</h3>
            <div className="flex justify-center gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white rounded-lg shadow-lg p-4 min-w-[80px]">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-xs uppercase text-gray-500 mt-1">{unit}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}