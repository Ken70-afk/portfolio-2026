"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    role: string;
    date: string;
    description: string[];
    href?: string;
}

export default function ProjectCard({ title, role, date, description, href }: ProjectCardProps) {
    const CardContent = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`bg-white dark:bg-[#111] border-4 border-black dark:border-white p-6 relative group mb-8 overflow-hidden ${href ? 'cursor-pointer hover:-translate-y-1 transition-transform duration-300' : ''}`}
        >
            {/* Halftone / Dotted Background Effect */}
            <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none" />

            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-b-2 border-r-2 border-black dark:border-white" />
            <div className="absolute top-0 right-0 w-4 h-4 border-b-2 border-l-2 border-black dark:border-white" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-t-2 border-r-2 border-black dark:border-white" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-t-2 border-l-2 border-black dark:border-white" />

            {/* Shadow Effect */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-black dark:group-hover:border-white pointer-events-none transition-colors duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                boxShadow: "inset 0 0 0 4px var(--foreground)"
            }} />
            <div className="absolute top-0 left-0 w-full h-full bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start border-b-2 border-black/20 dark:border-white/20 pb-4 mb-4">
                <div>
                    <h2 className="text-2xl font-bold font-mono uppercase tracking-tight">{title}</h2>
                    <p className="text-sm font-mono font-bold mt-1 text-black/70 dark:text-white/70">{role}</p>
                </div>
                <div className="mt-2 md:mt-0 bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-mono text-xs font-bold inline-block self-start">
                    {date}
                </div>
            </div>

            <div className="relative z-10 font-sans space-y-3">
                {description.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <span className="text-black dark:text-white mr-2 mt-1">▹</span>
                        <p className="leading-relaxed opacity-90">{item}</p>
                    </div>
                ))}
            </div>

            {href && (
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white dark:bg-white dark:text-black p-2 font-mono text-xs font-bold shadow-hard mix-blend-difference z-20 flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1" strokeWidth={3} /> OPEN LINK
                </div>
            )}
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block outline-none focus:ring-4 focus:ring-black dark:focus:ring-white">
                {CardContent}
            </a>
        );
    }

    return CardContent;
}
