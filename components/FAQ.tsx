'use client';
import { useState } from 'react';

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
    ]
}