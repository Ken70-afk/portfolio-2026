"use client";

import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Operation Meraki",
        role: "Full-Stack Developer (Capstone & Continuation)",
        date: "Feb 2025 – Aug 2025",
        href: "https://operationmeraki.org",
        description: [
            "Developed and deployed a production nonprofit website on Microsoft Azure App Service with a custom HTML/CSS frontend and Node.js backend; integrated PostgreSQL for form submissions and content storage.",
            "Built event publishing, RSVP/volunteer sign-ups, donation flow (Zeffy integration), and an admin dashboard with monitoring tools; implemented role-based access and input validation.",
            "Automated CI/CD pipelines via GitHub Actions (build, test, deploy), reducing release time and manual errors.",
            "Impact: ~150+ RSVPs in the first month; mobile load time ~3.1s, desktop ~2.6s; improved accessibility compliance (WCAG 2.1) based on Lighthouse audits."
        ]
    },
    {
        title: "Retail Labeling Automation App",
        role: "Software Developer (SVT — Client Project)",
        date: "2024 – Present",
        href: "https://github.com/Ken70-afk/Barcode-Price-Code-Generator",
        description: [
            "Designed and implemented a .NET-based desktop application to automate retail labeling and price-code generation, replacing manual calculations.",
            "Built validation and margin-based pricing logic (wholesale, retail, MRP), aligning with the store’s pricing strategy and reducing human error.",
            "Impact: Used daily by staff to process 100+ items per day; reduced labeling prep time by ~40% and ensured consistent pricing accuracy."
        ]
    },
    {
        title: "E-commerce App",
        role: "Full-Stack Personal Project",
        date: "2025 – Present",
        href: "https://github.com/Ken70-afk/textile-shop-app",
        description: [
            "Building a full-stack e-commerce platform using React, .NET, and PostgreSQL, containerized with Docker, focusing on scalable backend architecture."
        ]
    }
];

export default function Projects() {
    return (
        <div className="max-w-4xl mx-auto py-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 border-b-4 border-black dark:border-white pb-4 inline-block pr-12 relative"
            >
                <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tighter uppercase relative z-10">Selected Works</h1>
                <p className="text-sm font-mono opacity-60 mt-2 uppercase">/ 2024 - Present</p>

                {/* Tech decorative glitch block */}
                <div className="absolute bottom-0 right-0 w-8 h-4 bg-black dark:bg-white animate-pulse" />
            </motion.div>

            <div className="space-y-12 md:space-y-16 relative mt-10">
                {/* Decorative timeline line */}
                <div className="absolute xl:left-[-3rem] left-0 top-0 bottom-0 w-1 bg-black/10 dark:bg-white/10 hidden xl:block" />

                {projects.map((project, index) => (
                    <div key={index} className="relative">
                        {/* Timeline node */}
                        <div className="absolute xl:left-[-3.4rem] left-0 top-8 w-4 h-4 rounded-full border-4 border-black dark:border-white bg-[#fafafa] dark:bg-[#0a0a0a] hidden xl:block z-10 shadow-hard" />
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
