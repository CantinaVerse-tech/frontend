'use client';
import { SetStateAction, useState } from 'react';

export default function FAQ({ faqs = [] }) {
        const [openIndex, setOpenIndex] = useState(0);

    const defaultFAQs = [
        {
            question: "What makes your platform different from other learning platforms?",
            answer: "We focus specifically on practical blockchain development with modern tools like Foundry. Our courses include real smart contract projects, NFT certificates, and direct integration with development environments. Plus, everything is built by experienced developers who understand the challenges of learning Web3 development."
        },
        {
            question: "Do I need prior programming experience?",
            answer: "While helpful, it's not required! We offer courses for all levels, from complete beginners to advanced developers. Our beginner track covers programming fundamentals alongside blockchain concepts, ensuring you build a solid foundation."
        },
        {
            question: "What programming languages and tools will I learn?",
            answer: "Our curriculum focuses on Solidity for smart contracts, JavaScript/TypeScript for full-stack development, and Foundry for testing and deployment. We also cover React, Next.js, and Web3 libraries like Wagmi for building complete dApps."
        },
        {
            question: "Are the NFT certificates recognized by employers?",
            answer: "Our NFT certificates are stored permanently on-chain and contain verifiable skill assessments. We're partnering with leading Web3 companies and traditional enterprises entering the blockchain space to ensure our certificates carry real value in the job market."
        },
        {
            question: "How much will the platform cost?",
            answer: "We're designing multiple pricing tiers to accommodate different learners. There will be free introductory content, affordable subscription plans for comprehensive courses, and premium mentorship programs. Early subscribers will receive significant discounts."
        },
        {
            question: "When will the platform launch?",
            answer: "We're currently in beta development with a planned launch in Q2 2025. Early subscribers will get access to beta courses and can influence the final curriculum. Sign up for our newsletter to be notified of early access opportunities."
        },
        {
            question: "Will there be hands-on projects?",
            answer: "Absolutely! Every course includes multiple hands-on projects where you'll build real smart contracts, deploy to testnets, and create complete dApps. Our sandbox environments let you experiment safely without spending real gas fees."
        },
        {
            question: "Do you offer job placement assistance?",
            answer: "Yes! Our career services include portfolio reviews, mock interviews, and direct connections with hiring partners in the Web3 space. We're building relationships with companies actively seeking blockchain developers."
        }
    ]

    const questions = faqs.length > 0 ? faqs : defaultFAQs;

    const toggleFAQ = (index: SetStateAction<number>) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="py-16 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about our platform
                    </p>
                </div>
                <div className="space-y-4">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`transform transition-transform duration-300 ${
                                    openIndex === index ? 'rotate-180' : ''
                                }`}>
                                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            
                            <div className={`transition-all duration-300 ease-in-out ${
                                openIndex === index 
                                    ? 'max-h-96 opacity-100' 
                                    : 'max-h-0 opacity-0'
                            } overflow-hidden`}>
                                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    </div>
)}