'use client';
import { useEffect, useState } from 'react';

export default function CountdownTimer({ targetDate, onComplete }) {
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
}

