"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ArrowUpRight, Compass, Building, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Location() {
    const mapsUrl = "https://maps.app.goo.gl/km1Gfoo3B5tPDwUY7";
    const embedUrl = "https://maps.google.com/maps?q=-12.0533774,-77.085542&t=&z=17&ie=UTF8&iwloc=&output=embed";

    return (
        <section id="ubicacion" className="py-28 w-full bg-[#f8fafc] text-neutral-900 relative overflow-hidden border-t border-b border-neutral-200/80">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[150px] pointer-events-none" />

            <div className="boxed-frame boxed-border-light px-6 md:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-3 bg-emerald-50 shadow-sm font-mono"
                    >
                        <Compass className="w-3.5 h-3.5 text-emerald-600" />
                        UBICACIONES DEL EVENTO
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900"
                            >
                                Sede <span className="text-emerald-600 font-bold">Oficial.</span>
                            </motion.h2>
                            <p className="text-neutral-600 text-sm md:text-base font-light mt-2 max-w-xl">
                                Facultad de Ingeniería de Sistemas e Informática (FISI) — Universidad Nacional Mayor de San Marcos.
                            </p>
                        </div>

                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <MagneticButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00668e] text-white hover:bg-[#00c8df] hover:text-[#0a2138] text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_14px_rgba(0,102,142,0.35)] hover:shadow-[0_4px_20px_rgba(0,200,223,0.5)] w-fit shrink-0 group cursor-pointer">
                                <Navigation className="w-4 h-4 transition-transform group-hover:scale-110" />
                                <span>Cómo Llegar en Google Maps</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </MagneticButton>
                        </a>
                    </div>
                </div>

                {/* Google Maps Container styled cleanly */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-2xl md:rounded-3xl border border-neutral-200/90 bg-white shadow-2xl overflow-hidden group"
                >
                    {/* Top Terminal Bar */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-100 border-b border-neutral-200 text-[11px] font-mono text-neutral-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <span className="ml-2 text-neutral-500">FISI - UNMSM // COORD: -12.0533774, -77.085542</span>
                        </div>
                        <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            SEDE PRESENCIAL ACTIVA
                        </span>
                    </div>

                    {/* Map Frame Area */}
                    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[540px] bg-neutral-100 overflow-hidden">
                        {/* Styled Google Maps Iframe */}
                        <iframe
                            title="Ubicación de FISI - UNMSM en Google Maps"
                            src={embedUrl}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "contrast(1.03) saturate(1.05)",
                            }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />

                        {/* Radar Beacon in the Center */}
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                            {/* Outer Ping */}
                            <div className="absolute w-24 h-24 rounded-full bg-emerald-500/25 animate-ping opacity-75" />
                            {/* Mid Halo */}
                            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shadow-md">
                                {/* Inner Pin Dot */}
                                <div className="w-6 h-6 rounded-full bg-emerald-600 border-2 border-white shadow-md flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white" />
                                </div>
                            </div>
                        </div>

                        {/* Floating Pill Overlay Badge */}
                        <div className="absolute bottom-5 left-5 z-20">
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-200 text-xs text-neutral-800 hover:text-emerald-700 hover:border-emerald-500 transition-all shadow-xl group/pill cursor-pointer"
                            >
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm" />
                                <span className="font-semibold text-neutral-900">FISI - UNMSM</span>
                                <span className="text-neutral-500">· Abrir en Maps</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600 transition-transform group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
                            </a>
                        </div>
                    </div>

                    {/* Venue Metadata Footer Bar */}
                    <div className="p-6 md:p-8 bg-neutral-50 border-t border-neutral-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                                <Building className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">Facultad & Sede</div>
                                <div className="text-sm font-semibold text-neutral-900 mt-0.5">Facultad de Ingeniería de Sistemas e Informática</div>
                                <div className="text-xs text-neutral-600 font-light mt-0.5">UNMSM · Ciudad Universitaria</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200 shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">Dirección de Ingreso</div>
                                <div className="text-sm font-semibold text-neutral-900 mt-0.5">Av. Carlos Germán Amezaga #375</div>
                                <div className="text-xs text-neutral-600 font-light mt-0.5">Puerta N.° 2 o Puerta N.° 7 (Av. Venezuela / Túpac Amaru)</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">Duración: 6 Días</div>
                                <div className="text-sm font-semibold text-neutral-900 mt-0.5">02 al 07 de Noviembre 2026</div>
                                <div className="text-xs text-neutral-600 font-light mt-0.5">Lun–Vie: Ponencias + Becas (Presencial & Virtual) · Sáb: Hackathon FISI</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
        </section>
    );
}

// Alias CTA for backward compatibility with existing imports
export { Location as CTA };
