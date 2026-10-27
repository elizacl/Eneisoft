"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, Terminal } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextScramble } from "@/components/ui/TextScramble";

export function HackathonHero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hackathon-hero" className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#0a2138] text-white">
            {/* Ambient Cyber Flares & Neon Glows */}
            <div className="absolute top-[-15%] left-[-15%] w-[65vw] h-[65vw] bg-[#24ed7a]/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-15%] w-[60vw] h-[60vw] bg-[#00c8df]/10 rounded-full blur-[180px] pointer-events-none" />
            
            {/* Subtle Circuit / Tech Grid Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{
                    backgroundImage: `linear-gradient(#24ed7a 1px, transparent 1px), linear-gradient(90deg, #24ed7a 1px, transparent 1px)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="boxed-frame boxed-border-dark relative z-10 flex flex-col items-center text-center px-4 pt-32 pb-20 min-h-[110vh] justify-center">
                {/* Animated Tagline Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6 flex flex-wrap items-center justify-center gap-2"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00ff87]/30 bg-[#07150e]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,135,0.15)]">
                        <Terminal className="w-3.5 h-3.5 text-[#00ff87]" />
                        <span className="text-[11px] uppercase tracking-[0.25em] text-[#00ff87] font-mono font-semibold">
                            CONECTA / CREA / CONSTRUYE
                        </span>
                    </div>
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] font-mono text-neutral-400">
                        <Calendar className="w-3 h-3 text-[#00e5ff]" />
                        <span>SÁB 07 NOV 2026</span>
                    </div>
                </motion.div>

                {/* Subtitle Event Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 mb-2"
                >
                    <span className="text-sm md:text-base font-mono uppercase tracking-[0.35em] text-neutral-400">
                        ENEISOFT · <span className="text-[#00ff87]">EDICIÓN XVI</span>
                    </span>
                </motion.div>

                {/* Main Heading - HACKATHON Cyber Style */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tight leading-[0.88] mb-6 uppercase"
                >
                    <span className="text-gradient-eneisoft drop-shadow-[0_0_50px_rgba(0,255,135,0.4)]">
                        HACKATHON
                    </span>
                </motion.h1>

                {/* Horizontal Lens Flare Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.35 }}
                    className="w-full max-w-3xl h-[1px] flare-line relative my-4"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-4 bg-[#00ff87]/30 blur-xl pointer-events-none" />
                </motion.div>

                {/* Official Theme Statement */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl font-light text-neutral-200 max-w-2xl mt-4 mb-3 leading-relaxed"
                >
                    «IA aplicada a problemas reales de la comunidad universitaria»
                </motion.p>

                {/* Details Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm text-neutral-400 mb-12 font-mono"
                >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        <MapPin className="w-3.5 h-3.5 text-[#00ff87]" /> FISI - UNMSM
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        12 Equipos · 36 Hackers
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00ff87]">
                        Prototipo Funcional en Vivo
                    </span>
                </motion.div>

                {/* CTA Buttons - Magnetic */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <a
                        href="https://forms.gle/kEkG3JYVXWN5t7hX9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <MagneticButton className="rounded-full px-9 h-14 text-sm font-bold uppercase tracking-wider bg-[#24ed7a] text-[#0a2138] hover:bg-[#00c8df] hover:text-[#0a2138] transition-all duration-300 shadow-[0_0_35px_rgba(36,237,122,0.4)] hover:shadow-[0_0_50px_rgba(0,200,223,0.7)] flex items-center gap-2 cursor-pointer">
                            <span>Inscribir a mi equipo</span>
                            <ArrowRight className="w-4 h-4 text-[#0a2138]" />
                        </MagneticButton>
                    </a>

                    <a href="#ejes" className="inline-block">
                        <MagneticButton className="flex items-center text-sm uppercase tracking-widest text-neutral-300 hover:text-[#24ed7a] transition-colors group px-6 py-4 rounded-full border border-white/15 hover:border-[#24ed7a]/50 bg-white/5 cursor-pointer">
                            Ver Bases del Reto
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#24ed7a]" />
                        </MagneticButton>
                    </a>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <motion.div
                style={{ y, opacity }}
                className="absolute bottom-0 w-full h-[25vh] bg-gradient-to-t from-[#0a2138] via-[#0a2138]/80 to-transparent z-20 pointer-events-none"
            />
        </section>
    );
}

