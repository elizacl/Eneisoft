"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Coffee, Award, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SpaceItem {
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    icon: typeof Laptop;
    image: string;
    accentColor: string;
}

const spaces: SpaceItem[] = [
    {
        id: "sala-estudios",
        number: "01",
        title: "Zona de Desarrollo",
        subtitle: "Sala de Estudios & Cubículos FISI",
        description:
            "Espacio equipado con 6 mesas grandes de trabajo para los 12 equipos competidores. Acondicionado para el Kickoff, mentorías especializadas y sprints continuos de programación.",
        badge: "Estación 1 · Sprints y Mentoría",
        icon: Laptop,
        image: "/espacios/SalaEstudios.jpeg",
        accentColor: "#00ff87",
    },
    {
        id: "comedor",
        number: "02",
        title: "Zona de Receso e Hidratación",
        subtitle: "Comedor de la FISI",
        description:
            "Área habilitada para la hidratación continua, Coffee Time y almuerzo de confraternidad. Ambiente independiente para garantizar la seguridad de los equipos de cómputo.",
        badge: "Estación 2 · Receso y Almuerzo",
        icon: Coffee,
        image: "/espacios/Comedor.jpeg",
        accentColor: "#60efff",
    },
    {
        id: "auditorio",
        number: "03",
        title: "Zona de Exposición y Premiación",
        subtitle: "Auditorio Alfredo Alva Bravo",
        description:
            "Escenario principal de la facultad destinado a las pruebas técnicas finales, ronda de pitches de 5 min ante el jurado calificador, deliberación y ceremonia de premiación.",
        badge: "Estación 3 · Pitches y Premiación",
        icon: Award,
        image: "/espacios/AuditorioFisi.jpg",
        accentColor: "#34d399",
    },
];

export function HackathonSpaces() {
    return (
        <section id="espacios" className="py-24 px-6 bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Ambient background subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono"
                    >
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        Instalaciones Oficiales · FISI UNMSM
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4"
                    >
                        Espacios de la <span className="text-emerald-600 font-bold">Hackathon.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-neutral-600 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed"
                    >
                        Tres estaciones físicas acondicionadas en la Facultad de Ingeniería de Sistemas e Informática para garantizar la máxima productividad, confort y nivel técnico de la competencia.
                    </motion.p>
                </div>

                {/* 3 Spaces in the SAME ROW (grid-cols-1 on mobile, md:grid-cols-3 on desktop/tablet) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                    {spaces.map((space, index) => {
                        const IconComponent = space.icon;
                        return (
                            <motion.div
                                key={space.id}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.12 }}
                                className="group rounded-[2rem] bg-white border border-neutral-200/90 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                                    <Image
                                        src={space.image}
                                        alt={space.title}
                                        fill
                                        className="object-cover object-center filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

                                    {/* Station Badge overlay */}
                                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                                        <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                                        <span>Estación {space.number}</span>
                                    </div>

                                    {/* Step Number Watermark */}
                                    <span className="absolute bottom-3 right-4 z-10 text-3xl font-mono font-bold text-white/40 select-none">
                                        {space.number}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Subtitle / Location */}
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                <IconComponent className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-xs font-mono text-emerald-700 font-semibold uppercase tracking-wider">
                                                {space.subtitle}
                                            </span>
                                        </div>

                                        {/* Main Title */}
                                        <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                                            {space.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                                            {space.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
