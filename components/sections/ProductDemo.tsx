"use client";

import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
    Trophy, 
    Award, 
    Crown, 
    Sparkles, 
    GraduationCap, 
    FileText, 
    Gift,
    Calendar,
    Users
} from "lucide-react";

export function ProductDemo() {
    return (
        <section id="premiacion" className="py-32 w-full bg-[#0a2138] text-white relative overflow-hidden border-t border-white/5">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-[#24ed7a]/[0.035] rounded-full blur-[160px] pointer-events-none" />

            <div className="boxed-frame boxed-border-dark px-6 md:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ff87]/30 text-xs uppercase tracking-widest text-[#00ff87] mb-4 bg-[#07150e]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,135,0.15)] font-mono"
                    >
                        <Trophy className="w-3.5 h-3.5 text-[#00ff87]" />
                        Reconocimiento & Estímulos · Hackathon ENEISOFT 2026
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-5"
                    >
                        Estructura de <span className="text-gradient-eneisoft font-bold">Premiación.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed"
                    >
                        Pozo oficial de S/ 450.00 en efectivo, becas académicas de especialización, periféricos tecnológicos y certificaciones de honor para los equipos más destacados.
                    </motion.p>
                </div>

                {/* Tabs Component */}
                <Tabs defaultValue="1er-puesto" className="w-full max-w-5xl mx-auto">
                    {/* Tabs Navigation Triggers */}
                    <div className="flex justify-center mb-10">
                        <TabsList className="bg-[#07120c] p-1.5 rounded-full border border-white/10 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
                            <TabsTrigger
                                value="1er-puesto"
                                className="rounded-full px-6 md:px-8 py-2.5 text-xs md:text-sm font-mono tracking-wider text-neutral-400 data-[state=active]:bg-[#00ff87] data-[state=active]:text-[#020705] data-[state=active]:font-bold data-[state=active]:shadow-[0_0_20px_rgba(0,255,135,0.35)] transition-all cursor-pointer"
                            >
                                🥇 1er puesto
                            </TabsTrigger>
                            <TabsTrigger
                                value="2do puesto"
                                className="rounded-full px-6 md:px-8 py-2.5 text-xs md:text-sm font-mono tracking-wider text-neutral-400 data-[state=active]:bg-[#60efff] data-[state=active]:text-[#020705] data-[state=active]:font-bold data-[state=active]:shadow-[0_0_20px_rgba(96,239,255,0.35)] transition-all cursor-pointer"
                            >
                                🥈 2do puesto
                            </TabsTrigger>
                            <TabsTrigger
                                value="3er puesto"
                                className="rounded-full px-6 md:px-8 py-2.5 text-xs md:text-sm font-mono tracking-wider text-neutral-400 data-[state=active]:bg-amber-400 data-[state=active]:text-[#020705] data-[state=active]:font-bold data-[state=active]:shadow-[0_0_20px_rgba(251,191,36,0.35)] transition-all cursor-pointer"
                            >
                                🥉 3er puesto
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Window Mockup Frame */}
                    <div className="relative rounded-3xl border border-white/10 bg-[#07100b]/80 p-2 md:p-4 shadow-2xl backdrop-blur-xl">
                        {/* Cyber/Terminal Window Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-[#00ff87]/80" />
                            </div>
                            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                                ENEISOFT XVI // PODIO OFICIAL // FISI - UNMSM
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-mono text-[#00ff87]">
                                <Sparkles className="w-3 h-3" />
                                <span>POZO S/ 450.00</span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="w-full bg-[#040906] rounded-2xl border border-white/5 p-6 md:p-10 relative overflow-hidden">
                            {/* TAB 1: 1ER PUESTO */}
                            <TabsContent value="1er-puesto" className="mt-0 focus-visible:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                                >
                                    {/* Left Cash Card (Highlight) */}
                                    <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#071d12] via-[#05140c] to-[#020705] border border-[#00ff87]/30 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(0,255,135,0.1)]">
                                        <div className="absolute top-0 right-0 w-44 h-44 bg-[#00ff87]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00ff87]/25 transition-all duration-500" />

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff87]/15 text-[#00ff87] text-xs font-mono font-bold tracking-wider mb-6 border border-[#00ff87]/30">
                                                <Crown className="w-3.5 h-3.5 text-[#00ff87]" />
                                                PRIMER LUGAR · CAMPEÓN
                                            </div>

                                            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                                                Premio en Efectivo Directo
                                            </div>
                                            <div className="text-5xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-1">
                                                <span className="text-[#00ff87]">S/</span> 200<span className="text-2xl text-neutral-400 font-light">.00</span>
                                            </div>
                                        </div>

                                        {/* Ceremonial Check Preview Badge */}
                                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 bg-white/[0.02] -mx-8 -mb-8 px-8 py-5">
                                            <div className="w-12 h-12 rounded-xl bg-[#00ff87]/10 border border-[#00ff87]/20 flex items-center justify-center text-[#00ff87] shrink-0">
                                                <Trophy className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-base font-semibold text-white">Cheque Gigante Impreso</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Perks & Breakdown */}
                                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                                                Beneficios y Estímulos Adicionales
                                            </h4>

                                            {/* Perk 1 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-[#00ff87]/10 text-[#00ff87] border border-[#00ff87]/20 shrink-0">
                                                    <GraduationCap className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Becas Integrales / Periféricos</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#00ff87]/15 text-[#00ff87] border border-[#00ff87]/30 shrink-0">100% Cobertura</span>
                                                </div>
                                            </div>

                                            {/* Perk 2 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-[#60efff]/10 text-[#60efff] border border-[#60efff]/20 shrink-0">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Diplomas de Honor de Primer Lugar</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#60efff]/15 text-[#60efff] border border-[#60efff]/30 shrink-0">Firma FISI</span>
                                                </div>
                                            </div>

                                            {/* Perk 3 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                                    <Sparkles className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Difusión Institucional y Entrevistas</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">Web & Redes</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Footer Info */}
                                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-[#00ff87]" />
                                                Sábado 07 Nov · 08:00 p. m.
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-3.5 h-3.5 text-[#60efff]" />
                                                85% Jurados + 15% Votación de Pares
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            {/* TAB 2: 2DO PUESTO */}
                            <TabsContent value="2do puesto" className="mt-0 focus-visible:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                                >
                                    {/* Left Cash Card */}
                                    <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#081a20] via-[#051117] to-[#020705] border border-[#60efff]/30 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(96,239,255,0.1)]">
                                        <div className="absolute top-0 right-0 w-44 h-44 bg-[#60efff]/15 rounded-full blur-3xl pointer-events-none group-hover:bg-[#60efff]/25 transition-all duration-500" />

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#60efff]/15 text-[#60efff] text-xs font-mono font-bold tracking-wider mb-6 border border-[#60efff]/30">
                                                <Award className="w-3.5 h-3.5 text-[#60efff]" />
                                                SEGUNDO LUGAR · SUBCAMPEÓN
                                            </div>

                                            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                                                Premio en Efectivo Directo
                                            </div>
                                            <div className="text-5xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-1">
                                                <span className="text-[#60efff]">S/</span> 150<span className="text-2xl text-neutral-400 font-light">.00</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 bg-white/[0.02] -mx-8 -mb-8 px-8 py-5">
                                            <div className="w-12 h-12 rounded-xl bg-[#60efff]/10 border border-[#60efff]/20 flex items-center justify-center text-[#60efff] shrink-0">
                                                <Trophy className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-base font-semibold text-white">Cheque Gigante Impreso</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Perks */}
                                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                                                Beneficios y Estímulos Adicionales
                                            </h4>

                                            {/* Perk 1 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-[#60efff]/10 text-[#60efff] border border-[#60efff]/20 shrink-0">
                                                    <GraduationCap className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Becas Parciales / Periféricos</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#60efff]/15 text-[#60efff] border border-[#60efff]/30 shrink-0">Sponsors</span>
                                                </div>
                                            </div>

                                            {/* Perk 2 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Diplomas de Honor de Segundo Lugar</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">Firma FISI</span>
                                                </div>
                                            </div>

                                            {/* Perk 3 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-white/10 text-neutral-200 border border-white/10 shrink-0">
                                                    <Gift className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Certificados Oficiales de Premiación & Pack Institucional</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/20 shrink-0">3 Integrantes</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-[#60efff]" />
                                                Sábado 07 Nov · 08:00 p. m.
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-3.5 h-3.5 text-[#00ff87]" />
                                                Rúbrica Unificada 100 Puntos
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>

                            {/* TAB 3: 3ER PUESTO */}
                            <TabsContent value="3er puesto" className="mt-0 focus-visible:outline-none">
                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.35 }}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                                >
                                    {/* Left Cash Card */}
                                    <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#1c1507] via-[#140e05] to-[#020705] border border-amber-400/30 p-8 flex flex-col justify-between relative overflow-hidden group shadow-[0_0_30px_rgba(251,191,36,0.1)]">
                                        <div className="absolute top-0 right-0 w-44 h-44 bg-amber-400/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-400/25 transition-all duration-500" />

                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 text-amber-300 text-xs font-mono font-bold tracking-wider mb-6 border border-amber-400/30">
                                                <Award className="w-3.5 h-3.5 text-amber-300" />
                                                TERCER LUGAR · PODIO DE BRONCE
                                            </div>

                                            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                                                Premio en Efectivo Directo
                                            </div>
                                            <div className="text-5xl md:text-6xl font-black text-white tracking-tight flex items-baseline gap-1">
                                                <span className="text-amber-400">S/</span> 100<span className="text-2xl text-neutral-400 font-light">.00</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4 bg-white/[0.02] -mx-8 -mb-8 px-8 py-5">
                                            <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                                                <Trophy className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <div className="text-base font-semibold text-white">Cheque Gigante Impreso</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Perks */}
                                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                                                Beneficios y Estímulos Adicionales
                                            </h4>

                                            {/* Perk 1 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/20 shrink-0">
                                                    <FileText className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Diplomas de Honor de Tercer Lugar</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 shrink-0">Firma FISI</span>
                                                </div>
                                            </div>

                                            {/* Perk 2 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-white/10 text-neutral-200 border border-white/10 shrink-0">
                                                    <Award className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Certificados de Premiación y Reconocimiento</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-neutral-300 border border-white/20 shrink-0">3 Integrantes</span>
                                                </div>
                                            </div>

                                            {/* Perk 3 */}
                                            <div className="p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all flex items-center gap-4">
                                                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                                                    <Sparkles className="w-5 h-5" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-between gap-2">
                                                    <span className="text-sm md:text-base font-medium text-white">Mención Honorífica en el Memo Institucional</span>
                                                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">Registro FISI</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                                                Sábado 07 Nov · 08:00 p. m.
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Users className="w-3.5 h-3.5 text-[#00ff87]" />
                                                Auditorio Alfredo Alva Bravo
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        </div>
                    </div>
                </Tabs>
            </div>
            </div>
        </section>
    );
}
