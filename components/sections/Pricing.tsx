"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap, HeartPulse, Building2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
    return (
        <section id="ejes" className="py-32 px-6 bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Background Subtle Gradient Accents */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        Reto Oficial Hackathon 2026
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight mb-4 text-neutral-900"
                    >
                        Ejes <span className="text-emerald-600 font-bold">Temáticos.</span>
                    </motion.h2>
                    <p className="text-emerald-700 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        «IA aplicada a problemas reales de la comunidad universitaria»
                    </p>
                    <p className="text-xs md:text-sm text-neutral-500 mt-2 max-w-xl mx-auto font-normal">
                        La solución debe superar el nivel de un chatbot o dashboard convencional y mostrarse en ejecución durante el pitch final.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sub-Eje Académico */}
                    <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-neutral-200 hover:border-emerald-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3.5 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:scale-105 transition-transform shadow-sm">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 font-mono text-xs">
                                    Sub-Eje 01
                                </Badge>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 text-neutral-900">Académico</h3>
                            <p className="text-sm text-neutral-600 mb-8 leading-relaxed font-normal">
                                Herramientas inteligentes orientadas al aprendizaje y la excelencia educativa.
                            </p>
                            <ul className="space-y-4 text-sm text-neutral-700 mb-10">
                                {[
                                    "Apoyo personalizado al aprendizaje",
                                    "Tutoría inteligente y adaptativa",
                                    "Evaluación y retroalimentación automatizada",
                                    "Gestión inteligente de recursos educativos",
                                    "Asistencia y técnicas de estudio con IA"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-sm" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-neutral-100">
                            <span className="text-xs uppercase tracking-widest text-emerald-700 font-mono font-medium">Impacto en Estudiantes y Docentes</span>
                        </div>
                    </div>

                    {/* Sub-Eje Bienestar Universitario - Destacado/Card Principal */}
                    <div className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-b from-[#0b291a] to-[#04140c] text-white shadow-2xl flex flex-col justify-between h-full md:scale-105 border border-emerald-400/40 shadow-emerald-950/20 overflow-hidden">
                        {/* Ambient glow in card */}
                        <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-emerald-400/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-[#00ff87] border border-emerald-400/40 backdrop-blur-sm shadow-md">
                                    <HeartPulse className="w-6 h-6" />
                                </div>
                                <Badge variant="outline" className="border-emerald-400/40 bg-emerald-500/20 text-[#00ff87] font-mono text-xs font-semibold">
                                    Sub-Eje 02 · Comunidad
                                </Badge>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">Bienestar Universitario</h3>
                            <p className="text-sm text-neutral-300 mb-8 leading-relaxed font-light">
                                Soluciones integrales para la salud, acompañamiento y vida universitaria.
                            </p>

                            <ul className="space-y-4 text-sm text-white mb-10">
                                {[
                                    "Seguimiento y soporte a la salud mental",
                                    "Fomento de hábitos saludables",
                                    "Integración comunitaria en el campus",
                                    "Accesibilidad e inclusión estudiantil",
                                    "Acompañamiento integral al alumno"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Check className="w-4 h-4 text-[#00ff87] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-emerald-400/20">
                            <span className="text-xs uppercase tracking-widest text-[#00ff87]/90 font-mono font-medium">Enfoque Humano y Calidad de Vida</span>
                        </div>
                    </div>

                    {/* Sub-Eje Gestión Universitaria */}
                    <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-neutral-200 hover:border-cyan-500/40 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3.5 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 group-hover:scale-105 transition-transform shadow-sm">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <Badge variant="outline" className="border-cyan-200 text-cyan-700 bg-cyan-50 font-mono text-xs">
                                    Sub-Eje 03
                                </Badge>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 text-neutral-900">Gestión Universitaria</h3>
                            <p className="text-sm text-neutral-600 mb-8 leading-relaxed font-normal">
                                Optimización y automatización de la infraestructura institucional y académica.
                            </p>
                            <ul className="space-y-4 text-sm text-neutral-700 mb-10">
                                {[
                                    "Optimización de trámites institucionales",
                                    "Programación inteligente de horarios y aulas",
                                    "Canales de comunicación interna efectiva",
                                    "Automatización de procesos administrativos",
                                    "Atención eficiente y ágil al estudiante"
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0 shadow-sm" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pt-4 border-t border-neutral-100">
                            <span className="text-xs uppercase tracking-widest text-cyan-700 font-mono font-medium">Eficiencia Operativa e Institucional</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
