"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Handshake } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export interface Partner {
    name: string;
    logo: string;
}

// Lista oficial de patrocinadores
export const currentSponsors: Partner[] = [
    {
        name: "Datux Perú",
        logo: "/sponsors/Datux.jpg",
    },
];

// Lista oficial de comunidades y alianzas estratégicas
export const currentAlliances: Partner[] = [
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

function AllianceLogoItem({ partner }: { partner: Partner }) {
    return (
        <div className="relative flex items-center justify-center h-24 md:h-28 w-56 md:w-64 px-3 py-1 shrink-0 group/logo cursor-pointer">
            <div className="relative w-full h-full flex items-center justify-center p-3 rounded-2xl bg-white border border-neutral-200/90 group-hover/logo:border-[#24ed7a] transition-all duration-300 shadow-md group-hover/logo:shadow-[0_0_20px_rgba(36,237,122,0.25)] group-hover/logo:scale-105">
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={260}
                    height={100}
                    className="object-contain max-h-16 md:max-h-20 max-w-[190px] md:max-w-[220px] rounded-xl grayscale opacity-75 contrast-125 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 group-hover/logo:contrast-100 transition-all duration-300"
                />
            </div>
        </div>
    );
}

function InfiniteAlliancesMarquee({
    items,
}: {
    items: Partner[];
}) {
    const duplicated = [...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-2 select-none group-marquee">
            {/* Gradientes de difuminado lateral para tarjeta oscura */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#071320] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#071320] to-transparent z-10" />

            <div className="animate-marquee-continuous gap-6 md:gap-10 items-center">
                {duplicated.map((item, index) => (
                    <AllianceLogoItem key={`${item.name}-${index}`} partner={item} />
                ))}
            </div>
        </div>
    );
}

export function Partners() {
    return (
        <section id="partners" className="py-28 px-6 bg-[#0a2138] text-white relative overflow-hidden border-t border-white/5">
            {/* Resplandor ambiental de fondo con paleta oficial */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#00c8df]/[0.05] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#24ed7a]/[0.05] rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado limpio */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00c8df]/30 text-xs uppercase tracking-widest text-[#00c8df] mb-4 bg-[#071320]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,200,223,0.15)] font-mono">
                            <Handshake className="w-3.5 h-3.5 text-[#24ed7a]" />
                            Alianzas & Patrocinio
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium tracking-tight text-white"
                        >
                            Nuestros <span className="text-gradient-eneisoft font-bold">Aliados.</span>
                        </motion.h2>
                    </div>

                    <a
                        href="https://wa.link/k11jrd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <MagneticButton className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#24ed7a] text-[#0a2138] text-sm font-bold uppercase tracking-wider hover:bg-[#00c8df] hover:text-[#0a2138] transition-all duration-300 w-fit shrink-0 group shadow-[0_0_25px_rgba(36,237,122,0.35)] hover:shadow-[0_0_35px_rgba(0,200,223,0.5)] cursor-pointer">
                            <span>Convertirse en Sponsor</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0a2138]" />
                        </MagneticButton>
                    </a>
                </div>

                {/* Dos rectángulos: Patrocinadores (más angosto) y Alianzas (más ancho) - Ambos con fondo oscuro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                    {/* 1. Rectángulo de Patrocinadores (más angosto, fondo negro/oscuro) */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 xl:col-span-4 rounded-[2.5rem] bg-[#071320] border border-white/10 shadow-2xl p-7 md:p-9 flex flex-col justify-between group/datux"
                    >
                        <div className="text-center mb-5">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00c8df]">
                                PATROCINADORES
                            </span>
                        </div>

                        {/* El rectángulo que contiene a la imagen es blanco */}
                        <div className="flex-1 flex items-center justify-center py-4">
                            <div className="relative flex items-center justify-center h-24 md:h-28 w-56 md:w-64 p-3 rounded-2xl bg-white border border-neutral-200/90 group-hover/datux:border-[#24ed7a] transition-all duration-300 shadow-md group-hover/datux:shadow-[0_0_20px_rgba(36,237,122,0.25)] group-hover/datux:scale-105 cursor-pointer">
                                <Image
                                    src="/sponsors/Datux.jpg"
                                    alt="Datux Perú"
                                    width={220}
                                    height={90}
                                    className="object-contain max-h-16 md:max-h-20 w-auto rounded-lg grayscale opacity-75 contrast-125 group-hover/datux:grayscale-0 group-hover/datux:opacity-100 group-hover/datux:contrast-100 transition-all duration-300"
                                />
                            </div>
                        </div>

                        <div className="text-center pt-2">
                            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                                Sponsor Oficial ENEISOFT XVI
                            </span>
                        </div>
                    </motion.div>

                    {/* 2. Rectángulo de Alianzas (un poco más ancho, fondo negro/oscuro) */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="lg:col-span-7 xl:col-span-8 rounded-[2.5rem] bg-[#071320] border border-white/10 shadow-2xl p-7 md:p-9 flex flex-col justify-between overflow-hidden"
                    >
                        <div className="text-center mb-5">
                            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#00c8df]">
                                ALIANZAS ESTRATÉGICAS
                            </span>
                        </div>

                        <div className="flex-1 flex items-center justify-center py-2">
                            <InfiniteAlliancesMarquee items={currentAlliances} />
                        </div>

                        <div className="text-center pt-2">
                            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                                Comunidades Académicas & Tecnológicas
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
