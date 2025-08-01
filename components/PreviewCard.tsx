// components/FeaturePreview.js
'use client';
import { useState } from 'react';

export default function FeaturePreview({ features = [] }) {
    const [activeFeature, setActiveFeature] = useState(0);

    if (!features.length) return null;

       return (
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">What's Coming</h3>
            <div className="max-w-4xl mx-auto">
                {/* Feature tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {features.map((feature, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFeature(index)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                activeFeature === index
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {feature.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
}