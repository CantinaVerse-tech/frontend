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
}
