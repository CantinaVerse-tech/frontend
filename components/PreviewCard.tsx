// components/FeaturePreview.js
'use client';
import { useState } from 'react';

export default function FeaturePreview({ features = [] }) {
    const [activeFeature, setActiveFeature] = useState(0);

    if (!features.length) return null;

}