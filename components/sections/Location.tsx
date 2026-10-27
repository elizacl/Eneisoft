"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight, Compass, Building, Calendar } from "lucide-react";

export function Location() {
    const mapsUrl = "https://maps.app.goo.gl/km1Gfoo3B5tPDwUY7";
    const embedUrl = "https://maps.google.com/maps?q=-12.0533774,-77.085542&t=&z=17&ie=UTF8&iwloc=&output=embed";

    return (
        <section id="ubicacion" className="py-28 px-6 bg-[#030806] text-white relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-[#00ff87]/[0.035] rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-[0.25em] text-[#00ff87] mb-3 bg-[#07150e]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,135,0.15)] font-mono"
                    >
                        <Compass className="w-3.5 h-3.5 text-[#00ff87]" />
                        UBICACIONES DEL EVENTO
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-4xl md:text-6xl font-medium tracking-tight text-white"
                            >
                                Sede <span className="text-gradient-eneisoft font-bold">Oficial.</span>
                            </motion.h2>
                            <p className="text-neutral-400 text-sm md:text-base font-light mt-2 max-w-xl">
                                Facultad de Ingeniería de Sistemas e Informática (FISI) — Universidad Nacional Mayor de San Marcos.
                            </p>
                        </div>

                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00ff87] text-[#020705] text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-[#22e565] transition-all shadow-[0_0_25px_rgba(0,255,135,0.3)] hover:shadow-[0_0_35px_rgba(0,255,135,0.6)] w-fit shrink-0 group cursor-pointer"
                        >
                            <Navigation className="w-4 h-4 text-[#020705]" />
                            <span>Cómo Llegar en Google Maps</span>
                            <ArrowUpRight className="w-4 h-4 text-[#020705] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>

                {/* Google Maps Container styled like the user mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 bg-[#07100b] shadow-2xl overflow-hidden backdrop-blur-xl group"
                >
                    {/* Top Terminal Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#030806]/90 border-b border-white/5 text-[11px] font-mono text-neutral-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff87]/70" />
                            <span className="ml-2 text-neutral-500">FISI - UNMSM // COORD: -12.0533774, -77.085542</span>
                        </div>
                        <span className="text-[#00ff87] flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse" />
                            SEDE PRESENCIAL ACTIVA
                        </span>
                    </div>

                    {/* Map Frame Area */}
                    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[540px] bg-[#020705] overflow-hidden">
                        {/* Dark Styled Google Maps Iframe */}
                        <iframe
                            title="Ubicación de FISI - UNMSM en Google Maps"
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "invert(92%) hue-rotate(180deg) contrast(1.2) brightness(0.92)",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />

                        {/* Glowing Radar Beacon in the Center (like the user mockup) */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            {/* Outer Ping */}
                            <div className="absolute w-24 h-24 rounded-full bg-[#00ff87]/20 animate-ping opacity-75" />
                            {/* Mid Halo */}
                            <div className="w-16 h-16 rounded-full bg-[#00ff87]/15 border border-[#00ff87]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,135,0.5)]">
                                {/* Inner Pin Dot */}
                                <div className="w-6 h-6 rounded-full bg-[#00ff87] border-2 border-white shadow-[0_0_15px_#00ff87] flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Pill Overlay Badge (like in the user screenshot) */}
                        <div className="absolute bottom-5 left-5 z-20">
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#030806]/90 backdrop-blur-md border border-white/15 text-xs text-neutral-200 hover:text-white hover:border-[#00ff87] transition-all shadow-2xl group/pill cursor-pointer"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#00ff87] shadow-[0_0_8px_#00ff87]" />
                                <span className="font-semibold text-white">FISI - UNMSM</span>
                                <span className="text-neutral-400">· Abrir en Maps</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#00ff87] transition-transform group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Venue Metadata Footer Bar */}
                    <div className="p-6 md:p-8 bg-[#040906] border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-[#00ff87]/10 text-[#00ff87] border border-[#00ff87]/20 shrink-0">
                                <Building className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Facultad & Sede</div>
                                <div className="text-sm font-semibold text-white mt-0.5">Facultad de Ingeniería de Sistemas e Informática</div>
                                <div className="text-xs text-neutral-400 font-light mt-0.5">UNMSM · Ciudad Universitaria</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-[#60efff]/10 text-[#60efff] border border-[#60efff]/20 shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Dirección de Ingreso</div>
                                <div className="text-sm font-semibold text-white mt-0.5">Av. Carlos Germán Amezaga #375</div>
                                <div className="text-xs text-neutral-400 font-light mt-0.5">Puerta N.° 2 o Puerta N.° 7 (Av. Venezuela / Túpac Amaru)</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">Estaciones del Evento</div>
                                <div className="text-sm font-semibold text-white mt-0.5">Cubículos FISI · Comedor · Auditorio</div>
                                <div className="text-xs text-neutral-400 font-light mt-0.5">Auditorio Alfredo Alva Bravo (Pitches y Premiación)</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Alias CTA for backward compatibility with existing imports
export { Location as CTA };
