"use client";

import { motion } from "framer-motion";
import { Target, Telescope, Sparkles } from "lucide-react";

export function MissionVision() {
    return (
        <section id="mision-vision" className="relative py-24 md:py-32 w-full bg-[#f8fafc] text-neutral-900 overflow-hidden border-t border-b border-neutral-200/80">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="boxed-frame boxed-border-light px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        IDENTIDAD & PROPÓSITO
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-5"
                    >
                        Misión y <span className="text-emerald-600 font-bold">Visión.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-neutral-600 text-sm md:text-base font-light leading-relaxed"
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
                        className="group relative p-8 md:p-10 rounded-[2rem] bg-white border border-neutral-200/90 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-600 shadow-sm group-hover:scale-105 transition-transform">
                                    <Target className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 font-semibold">
                                    Misión
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-emerald-700 transition-colors">
                                Punto de encuentro para la innovación
                            </h3>

                            <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed">
                                Generar un punto de encuentro para los interesados en las diversas áreas de la tecnología y el desarrollo de software, aficionados y conocedores, para aclarar dudas y generar ideas sobre el cambiante mundo tecnológico, acercando la experiencia profesional de expertos especializados.
                            </p>
                        </div>

                        <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-emerald-700 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>CONECTANDO TALENTO & EXPERIENCIA</span>
                        </div>
                    </motion.div>

                    {/* Visión Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative p-8 md:p-10 rounded-[2rem] bg-white border border-neutral-200/90 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3.5 rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700 shadow-sm group-hover:scale-105 transition-transform">
                                    <Telescope className="w-6 h-6" />
                                </div>
                                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-800 px-3 py-1 rounded-full border border-cyan-200 bg-cyan-50 font-semibold">
                                    Visión
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 tracking-tight group-hover:text-cyan-700 transition-colors">
                                Liderazgo y alcance a nivel nacional
                            </h3>

                            <p className="text-sm md:text-base text-neutral-600 font-normal leading-relaxed">
                                Ser el evento de mayor alcance nacional en el ámbito computacional y la primera opción para quienes quieran adentrarse en la tecnología, generando experiencias propias a través de nuestros concursos y logrando el reconocimiento de empresas hacia nuestros alumnos y profesionales.
                            </p>
                        </div>

                        <div className="pt-8 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-cyan-800 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span>RECONOCIMIENTO & PROYECCIÓN NACIONAL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
            </div>
        </section>
    );
}
