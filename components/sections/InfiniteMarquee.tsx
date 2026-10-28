"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    className?: string;
    speed?: number; // Duration in seconds for one full loop
    items?: string[];
}

export function InfiniteMarquee({
    className,
    speed = 22,
    items = [
        "CONECTA",
        "CREA",
        "CONSTRUYE",
        "HACKATHON XVI",
        "FISI · UNMSM",
        "12 EQUIPOS",
        "07 DE NOVIEMBRE 2026",
    ]
}: InfiniteMarqueeProps) {

    return (
        <div className={cn("relative w-full overflow-hidden bg-[#0a2138] py-5 border-y border-[#24ed7a]/15 select-none", className)}>
            <div className="boxed-frame boxed-border-dark overflow-hidden relative">
                {/* Gradient Masks for Edge Blur */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a2138] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a2138] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    style={{ width: "max-content" }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render items multiple times for infinite marquee */}
                    {[...items, ...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="inline-flex items-center text-xs md:text-sm font-mono tracking-[0.25em] text-neutral-400 mx-6 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#24ed7a] mr-4 shadow-[0_0_8px_#24ed7a]" />
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
