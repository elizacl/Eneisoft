"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Handshake } from "lucide-react";

export interface Sponsor {
    name: string;
    logo: string;
}

// Lista oficial de sponsors y aliados (se amplía agregando logos aquí)
export const currentSponsors: Sponsor[] = [
    {
        name: "IEEE Computer Society PUCP",
        logo: "/sponsors/ieee_computer_society_pucp_logo.jpg",
    },
    {
        name: "Developer Student Club PUCP",
        logo: "/sponsors/developer_student_club_pucp_logo.jpg",
    },
    {
        name: "Club Blockchain PUCP",
        logo: "/sponsors/blockchain_club_pucp.jpg",
    },
];

function SponsorLogoItem({ sponsor }: { sponsor: Sponsor }) {
    return (
        <div className="relative flex items-center justify-center h-28 md:h-36 w-64 md:w-80 px-4 py-2 shrink-0 group cursor-pointer">
            <div className="relative w-full h-full flex items-center justify-center p-2 rounded-2xl bg-white border border-neutral-200/90 group-hover:border-emerald-500/50 transition-all duration-300 shadow-sm group-hover:shadow-md">
                <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={320}
                    height={130}
                    className="object-contain max-h-24 md:max-h-28 max-w-[220px] md:max-w-[280px] rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
            </div>
        </div>
    );
}

function InfiniteMarqueeRow({
    items,
    reverse = false,
    speed = 24,
}: {
    items: Sponsor[];
    reverse?: boolean;
    speed?: number;
}) {
    // Duplicamos varias veces para garantizar un bucle continuo fluido
    const duplicated = [...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-4 select-none">
            {/* Gradientes de difuminado lateral para fondo claro */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />

            <motion.div
                className="flex w-max gap-10 md:gap-16 items-center"
                animate={{
                    x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {duplicated.map((item, index) => (
                    <SponsorLogoItem key={`${item.name}-${index}`} sponsor={item} />
                ))}
            </motion.div>
        </div>
    );
}

export function Partners() {
    return (
        <section id="partners" className="py-28 px-6 bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Resplandor ambiental de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado limpio */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono">
                            <Handshake className="w-3.5 h-3.5 text-emerald-600" />
                            Alianzas & Patrocinio
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900"
                        >
                            Nuestros Aliados.
                        </motion.h2>
                    </div>

                    <a
                        href="https://wa.link/k11jrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-emerald-500 transition-all duration-300 w-fit shrink-0 group shadow-md hover:shadow-lg cursor-pointer"
                    >
                        <span>Convertirse en Sponsor</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" />
                    </a>
                </div>

                {/* Contenedor amplio con logos en tamaño grande estilo ForumX */}
                <div className="py-12 md:py-16 px-4 rounded-[2.5rem] bg-white border border-neutral-200/90 shadow-xl">
                    <InfiniteMarqueeRow items={currentSponsors} speed={25} />
                </div>
            </div>
        </section>
    );
}
