"use client";

import { motion } from "framer-motion";
import { 
    Scale, 
    Users, 
    Code, 
    Lightbulb, 
    Layers, 
    MonitorPlay, 
    AlertTriangle,
    CheckCircle2
} from "lucide-react";

const criteria = [
    {
        title: "Funcionamiento del Prototipo",
        points: "30 pts",
        percent: "30%",
        icon: MonitorPlay,
        color: "text-[#00ff87]",
        borderColor: "border-[#00ff87]/30",
        bgColor: "bg-[#00ff87]/10",
        description: "Demostración real del software en ejecución. Estabilidad de la solución, flujo principal sin fallas y operatividad de componentes de Inteligencia Artificial."
    },
    {
        title: "Problema e Impacto",
        points: "25 pts",
        percent: "25%",
        icon: Lightbulb,
        color: "text-[#60efff]",
        borderColor: "border-[#60efff]/30",
        bgColor: "bg-[#60efff]/10",
        description: "Claridad en la definición de la problemática universitaria resuelta. Relevancia para estudiantes, docentes o procesos de gestión, y viabilidad real."
    },
    {
        title: "Innovación y Creatividad",
        points: "20 pts",
        percent: "20%",
        icon: Layers,
        color: "text-emerald-400",
        borderColor: "border-emerald-500/30",
        bgColor: "bg-emerald-500/10",
        description: "Originalidad y diferenciación técnica. Superar el nivel de chatbots o dashboards convencionales mediante automatización y procesamiento complejo."
    },
    {
        title: "Calidad Técnica y Arquitectura",
        points: "15 pts",
        percent: "15%",
        icon: Code,
        color: "text-teal-400",
        borderColor: "border-teal-500/30",
        bgColor: "bg-teal-500/10",
        description: "Estructura del código en GitHub/GitLab, arquitectura modular, buenas prácticas de desarrollo y uso eficiente de APIs y librerías."
    },
    {
        title: "Pitch y Defensa Técnica",
        points: "10 pts",
        percent: "10%",
        icon: CheckCircle2,
        color: "text-amber-400",
        borderColor: "border-amber-400/30",
        bgColor: "bg-amber-400/10",
        description: "Síntesis en 5 minutos de pitch, calidad del material audiovisual y solvencia del equipo en la ronda de 5 min de preguntas del jurado."
    }
];

export function Testimonials() {
    return (
        <section id="evaluacion" className="py-32 px-6 bg-[#030806] text-white relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-[#00ff87]/[0.03] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-widest text-[#00ff87] mb-4 bg-[#07150e]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,135,0.15)] font-mono"
                    >
                        <Scale className="w-3.5 h-3.5 text-[#00ff87]" />
                        Sistema de Calificación Oficial · Ponderación 100%
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4"
                    >
                        Esquema de <span className="text-gradient-eneisoft font-bold">Evaluación.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed"
                    >
                        Esquema transparente y riguroso que combina la evaluación técnica de jurados especialistas con la validación colegiada entre pares de los 12 líderes de equipo.
                    </motion.p>
                </div>

                {/* 2 Main Weighting Blocks (85% vs 15%) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Block 1: Jurados Expertos (85%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-[2rem] bg-gradient-to-br from-[#071810] via-[#05110c] to-[#020705] border border-[#00ff87]/25 shadow-xl relative overflow-hidden group"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 rounded-2xl bg-[#00ff87]/10 text-[#00ff87] border border-[#00ff87]/20">
                                <Scale className="w-6 h-6" />
                            </div>
                            <span className="text-3xl md:text-4xl font-mono font-black text-[#00ff87]">
                                85%
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Mesa de Jurados Expertos</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed font-light mb-4">
                            Calificación individual e independiente mediante la <strong className="text-white font-medium">Rúbrica Unificada (100 pts)</strong> durante la ronda de pitches en el auditorio (15 min por equipo: setup, exposición y Q&A).
                        </p>
                        <div className="text-xs font-mono text-[#00ff87] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                            Ronda de Pitches · Auditorio Alfredo Alva Bravo
                        </div>
                    </motion.div>

                    {/* Block 2: Voto entre Líderes (15%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="p-8 rounded-[2rem] bg-gradient-to-br from-[#081820] via-[#051117] to-[#020705] border border-[#60efff]/25 shadow-xl relative overflow-hidden group"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 rounded-2xl bg-[#60efff]/10 text-[#60efff] border border-[#60efff]/20">
                                <Users className="w-6 h-6" />
                            </div>
                            <span className="text-3xl md:text-4xl font-mono font-black text-[#60efff]">
                                15%
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Votación entre Líderes (Peer Voting)</h3>
                        <p className="text-sm text-neutral-400 leading-relaxed font-light mb-4">
                            Efectuada por los 12 líderes de equipo mediante formulario digital confidencial. Cada líder elige a sus <strong className="text-white font-medium">3 favoritos (3, 2 y 1 ptos)</strong> con la prohibición estricta de votar por su propio equipo.
                        </p>
                        <div className="text-xs font-mono text-[#60efff] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#60efff] animate-pulse" />
                            Comunidad de Líderes · Formulario Digital
                        </div>
                    </motion.div>
                </div>

                {/* Rubric Criteria Cards */}
                <div className="mb-10">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-6 text-center">
                        Criterios Oficiales de la Rúbrica Unificada (Máx. 100 Puntos)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {criteria.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="p-5 rounded-2xl bg-[#07100b] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-2 rounded-xl ${item.bgColor} ${item.color} border ${item.borderColor}`}>
                                                <IconComponent className="w-4 h-4" />
                                            </div>
                                            <span className={`text-sm font-mono font-bold ${item.color}`}>
                                                {item.points}
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs text-neutral-400 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-neutral-500">
                                        Ponderación: {item.percent}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Anti-preexisting code penalty banner */}
                <div className="p-4 md:p-5 rounded-2xl bg-amber-500/[0.05] border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                            <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-amber-300">Normativa de Penalización por Código Preexistente</span>
                            <p className="text-xs text-neutral-400">
                                Prohibido presentar código previo al evento. Se aplicará un descuento directo de <strong className="text-amber-300">-15 puntos</strong> sobre la nota final.
                            </p>
                        </div>
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                        Penalización: -15 pts
                    </span>
                </div>
            </div>
        </section>
    );
}

// Alias for semantic clarity
export { Testimonials as Evaluacion };
