"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
];

const externalLinks = [
    { name: "GitHub", href: "https://github.com/Ken70-afk", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/abhinav-ranjith-0160ba318", icon: Linkedin },
    { name: "Email", href: "mailto:Abhinavranjith47@gmail.com", icon: Mail },
];

export default function Sidebar() {
    const pathname = usePathname();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-50, 50], [15, -15]);
    const rotateY = useTransform(x, [-50, 50], [-15, 15]);

    function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r-4 border-black dark:border-white bg-[#fafafa] dark:bg-[#0a0a0a] flex flex-col p-6 z-40">
            <div className="flex flex-col items-center mb-10" style={{ perspective: 400 }}>
                <motion.div
                    className="relative w-24 h-[134px] bg-black dark:bg-white mb-4 flex items-center justify-center overflow-hidden border-4 border-black dark:border-white shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)] group"
                    whileHover="hover"
                    onMouseMove={handleMouse}
                    onMouseLeave={() => {
                        x.set(0);
                        y.set(0);
                    }}
                    style={{ rotateX, rotateY }}
                >
                    <Image src="/profile.png" alt="Abhinav Ranjith" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300" unoptimized={true} />

                    <motion.div
                        className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-20 pointer-events-none"
                        variants={{
                            hover: {
                                y: ["-100%", "100%"],
                                transition: {
                                    repeat: Infinity,
                                    duration: 0.6,
                                    ease: "linear",
                                },
                            },
                        }}
                    />
                </motion.div>
                <h1 className="text-xl font-bold font-mono tracking-tighter uppercase text-center mt-2">Abhinav Ranjith</h1>
                <p className="text-xs font-mono opacity-60 mt-1">Software Engineer</p>
            </div>

            <nav className="flex-1 flex flex-col space-y-4">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "block py-3 px-4 font-mono font-bold text-sm transition-all border-2 border-transparent hover:border-black dark:hover:border-white w-full text-center relative overflow-hidden group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)]",
                                isActive
                                    ? "bg-black text-white dark:bg-white dark:text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,1)] border-black dark:border-white -translate-y-1 -translate-x-1"
                                    : "text-black dark:text-white"
                            )}
                        >
                            {link.name}
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200 pointer-events-none" />
                        </Link>
                    );
                })}
            </nav>

            <div className="flex flex-col space-y-4 mt-auto">
                {externalLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black py-3 px-4 font-mono font-bold text-sm overflow-hidden"
                        whileHover="hover"
                    >
                        <motion.div
                            className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-20 pointer-events-none"
                            variants={{
                                hover: {
                                    y: ["-100%", "100%"],
                                    transition: {
                                        repeat: Infinity,
                                        duration: 0.6,
                                        ease: "linear",
                                    },
                                },
                            }}
                        />
                        <link.icon className="w-5 h-5 z-10" />
                        <span className="z-10">{link.name}</span>
                    </motion.a>
                ))}
            </div>
        </aside>
    );
}
