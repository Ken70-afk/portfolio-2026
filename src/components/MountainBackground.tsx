"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MountainBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0a]">
            <motion.div
                className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
                animate={{
                    x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) * -0.02,
                    y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) * -0.02,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1440 800"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMax slice"
                >
                    {/* Top-down contour lines */}
                    <path d="M0 600 Q 300 500 720 550 T 1440 400 L 1440 800 L 0 800 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-white" />
                    <path d="M0 650 Q 350 550 720 600 T 1440 450 L 1440 800 L 0 800 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-black dark:text-white" />
                    <path d="M0 700 Q 400 600 720 650 T 1440 500 L 1440 800 L 0 800 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black dark:text-white" />
                    <path d="M0 750 Q 450 650 720 700 T 1440 550 L 1440 800 L 0 800 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-black dark:text-white" />
                    <path d="M0 780 Q 500 700 720 750 T 1440 600 L 1440 800 L 0 800 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-black dark:text-white" />
                </svg>
            </motion.div>
        </div>
    );
}
