"use client";

import { motion } from "framer-motion";
import { Target, Telescope, Sparkles } from "lucide-react";

export function MissionVision() {
    return (
        <section id="mision-vision" className="relative py-24 md:py-32 px-6 bg-[#030806] text-white overflow-hidden border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#00ff87]/[0.04] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-[#60efff]/[0.04] rounded-full blur-[150px] pointer-events-none" />

            {/* Subtle Tech Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#00ff87 1px, transparent 1px), linear-gradient(90deg, #00ff87 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-[0.25em] text-[#00ff87] mb-4 bg-[#07150e]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,135,0.15)] font-mono"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#00ff87]" />
                        IDENTIDAD & PROPÓSITO
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-5"
                    >
                        Misión y <span className="text-gradient-eneisoft font-bold">Visión.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-neutral-400 text-sm md:text-base font-light leading-relaxed"
                    >
                        El compromiso de la comunidad de la FISI - UNMSM con el crecimiento científico, formativo y tecnológico del país.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Misión Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative p-8 md:p-10 rounded-[2rem] bg-[#07120c]/70 hover:bg-[#07150e] border border-white/10 hover:border-[#00ff87]/40 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3.5 rounded-2xl border border-[#00ff87]/30 bg-[#00ff87]/10 text-[#00ff87] shadow-[0_0_20px_rgba(0,255,135,0.15)] group-hover:scale-105 transition-transform">
                                    <Target className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00ff87] px-3 py-1 rounded-full border border-[#00ff87]/20 bg-[#00ff87]/5">
                                    Misión
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                Punto de encuentro para la innovación
                            </h3>

                            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                                Generar un punto de encuentro para los interesados en las diversas áreas de las Ciencias de la Computación, aficionados y conocedores, para aclarar dudas y generar ideas sobre el cambiante mundo de la tecnología, acercando la experiencia profesional de expertos especializados.
                            </p>
                        </div>

                        <div className="pt-8 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#00ff87]">
                            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                            <span>CONECTANDO TALENTO & EXPERIENCIA</span>
                        </div>
                    </motion.div>

                    {/* Visión Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative p-8 md:p-10 rounded-[2rem] bg-[#07120c]/70 hover:bg-[#07150e] border border-white/10 hover:border-[#60efff]/40 backdrop-blur-xl transition-all duration-300 shadow-xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3.5 rounded-2xl border border-[#60efff]/30 bg-[#60efff]/10 text-[#60efff] shadow-[0_0_20px_rgba(96,239,255,0.15)] group-hover:scale-105 transition-transform">
                                    <Telescope className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#60efff] px-3 py-1 rounded-full border border-[#60efff]/20 bg-[#60efff]/5">
                                    Visión
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                Liderazgo y alcance a nivel nacional
                            </h3>

                            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                                Ser el evento de mayor alcance nacional en el ámbito computacional y la primera opción para quienes quieran adentrarse en la tecnología, generando experiencias propias a través de nuestros concursos y logrando el reconocimiento de empresas hacia nuestros alumnos y profesionales.
                            </p>
                        </div>

                        <div className="pt-8 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#60efff]">
                            <span className="w-2 h-2 rounded-full bg-[#60efff] animate-pulse" />
                            <span>RECONOCIMIENTO & PROYECCIÓN NACIONAL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
