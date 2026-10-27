"use client";

import { motion } from "framer-motion";
import { Lock, Sparkles, Terminal, ArrowRight, ShieldCheck, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Pricing() {
    return (
        <section id="ejes" className="py-28 md:py-36 w-full bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Background Subtle Gradient Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

            <div className="boxed-frame boxed-border-light px-6 md:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono">
                            <Lock className="w-3.5 h-3.5 text-emerald-600" />
                            Reto Hackathon ENEISOFT 2026
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-neutral-900"
                        >
                            Reto Oficial: <span className="text-emerald-600 font-bold">Próximamente.</span>
                        </motion.h2>
                        <p className="text-emerald-700 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            «IA aplicada a problemas reales de la comunidad universitaria»
                        </p>
                        <p className="text-xs md:text-sm text-neutral-500 mt-2 max-w-xl mx-auto font-normal">
                            El reto oficial y sus requerimientos técnicos específicos se revelarán directamente a los equipos inscritos.
                        </p>
                    </div>

                    {/* Main Teaser Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative p-8 md:p-14 rounded-[2.5rem] bg-white border border-neutral-200/90 shadow-xl overflow-hidden text-center"
                    >
                        {/* Ambient glow inside card */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none" />

                        {/* Lock Icon Emblem */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                                <Lock className="w-9 h-9 text-emerald-600" />
                            </div>

                            <span className="text-xs font-mono font-bold tracking-[0.25em] text-emerald-700 uppercase mb-3">
                                FASE DE CONVOCATORIA · ACCESO EXCLUSIVO
                            </span>

                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight max-w-2xl mb-4">
                                Las especificaciones técnicas del reto se darán a conocer a los equipos participantes
                            </h3>

                            <p className="text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed mb-10 font-normal">
                                Para garantizar la equidad competitiva y la originalidad de las propuestas, el enunciado oficial,
                                las problemáticas prioritarias y los lineamientos detallados serán revelados a los equipos
                                clasificados e inscritos durante el inicio de la competencia.
                            </p>

                            {/* 3 Information Pillars */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left mb-10">
                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-700 font-semibold text-sm">
                                        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Enfoque Central</span>
                                    </div>
                                    <p className="text-xs text-neutral-600 leading-relaxed font-light">
                                        Inteligencia Artificial aplicada con impacto tangible para estudiantes, docentes y la universidad.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-700 font-semibold text-sm">
                                        <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Prototipo en Vivo</span>
                                    </div>
                                    <p className="text-xs text-neutral-600 leading-relaxed font-light">
                                        La solución debe superar el nivel de un simple chatbot y demostrarse en ejecución durante el pitch final.
                                    </p>
                                </div>

                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-700 font-semibold text-sm">
                                        <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>12 Equipos Clasificados</span>
                                    </div>
                                    <p className="text-xs text-neutral-600 leading-relaxed font-light">
                                        Equipos de 3 integrantes de pregrado. Acceso a mentorías técnicas y estaciones físicas en la FISI - UNMSM.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Action with Magnetic Effect */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://forms.gle/kEkG3JYVXWN5t7hX9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <MagneticButton className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#24ed7a] text-[#0a2138] hover:bg-[#00c8df] hover:text-[#0a2138] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(36,237,122,0.35)] hover:shadow-[0_4px_25px_rgba(0,200,223,0.5)] cursor-pointer">
                                        <span>Inscribir a mi Equipo</span>
                                        <ArrowRight className="w-4 h-4 text-[#0a2138]" />
                                    </MagneticButton>
                                </a>
                            </div>

                            {/* Footnote */}
                            <div className="mt-8 pt-6 border-t border-neutral-200/70 w-full flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500 gap-2">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                    Kickoff & Revelación Oficial: Lunes 02 de Noviembre
                                </span>
                                <span className="text-emerald-700 font-semibold">
                                    Cupos Limitados
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Alias for semantic imports
export { Pricing as EjesTematicos };
