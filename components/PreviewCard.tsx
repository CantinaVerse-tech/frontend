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

                {/* Active feature display */}
                <div className="bg-white rounded-xl shadow-lg p-8 border">
                    <div className="flex items-start gap-6">
                        <div className="text-4xl">{features[activeFeature].icon}</div>
                        <div className="flex-1">
                            <h4 className="text-xl font-bold mb-2">
                                {features[activeFeature].name}
                            </h4>
                            <p className="text-gray-600 mb-4">
                                {features[activeFeature].description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {features[activeFeature].highlights.map((highlight, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                                    >
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                                features[activeFeature].status === 'In Progress'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : features[activeFeature].status === 'Testing'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-green-100 text-green-800'
                            }`}>
                                {features[activeFeature].status}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
