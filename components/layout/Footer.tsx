import Link from "next/link";
import Image from "next/image";
import {
    Instagram,
    Linkedin,
    Facebook,
    Calendar,
    MessageCircle,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-[#f8fafc] text-neutral-800 border-t border-neutral-200/80 py-16">
            <div className="boxed-frame boxed-border-light px-6 md:px-12 lg:px-16">
                <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* 1. Explora */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="font-bold text-base text-neutral-900 tracking-tight">
                            Explora
                        </h4>
                        <ul className="flex flex-col gap-3 text-sm text-neutral-600 font-normal">
                            <li>
                                <Link href="/" className="hover:text-emerald-600 transition-colors">
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/#mision-vision" className="hover:text-emerald-600 transition-colors">
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/eventos" className="hover:text-emerald-600 transition-colors">
                                    Eventos
                                </Link>
                            </li>
                            <li>
                                <Link href="/hackathon" className="hover:text-emerald-600 transition-colors">
                                    Hackathon ENEISOFT 2026
                                </Link>
                            </li>
                            <li>
                                <Link href="/#partners" className="hover:text-emerald-600 transition-colors">
                                    Aliados
                                </Link>
                            </li>
                            <li>
                                <Link href="/#ubicacion" className="hover:text-emerald-600 transition-colors">
                                    Ubicación
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="hover:text-emerald-600 transition-colors">
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 2. Conecta */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <h4 className="font-bold text-base text-neutral-900 tracking-tight">
                            Conecta
                        </h4>
                        <ul className="flex flex-col gap-3 text-sm text-neutral-600 font-normal">
                            <li>
                                <a
                                    href="https://www.instagram.com/eneisoftunmsm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 hover:text-emerald-600 transition-colors group"
                                >
                                    <Instagram className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 transition-colors" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/eneisoft"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 hover:text-emerald-600 transition-colors group"
                                >
                                    <Linkedin className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 transition-colors" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/ENEISOFT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 hover:text-emerald-600 transition-colors group"
                                >
                                    <Facebook className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 transition-colors" />
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://luma.com/user/eneisoft"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 hover:text-emerald-600 transition-colors group"
                                >
                                    <Calendar className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 transition-colors" />
                                    <span>Luma</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.link/k11jrd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 hover:text-emerald-600 transition-colors group"
                                >
                                    <MessageCircle className="w-4 h-4 text-neutral-500 group-hover:text-emerald-600 transition-colors" />
                                    <span>WhatsApp</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3. A la derecha: Logo de ENEISOFT junto con la breve descripción */}
                    <div className="md:col-span-6 flex flex-col md:items-end md:text-right gap-4">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="relative w-14 h-14 rounded-2xl bg-white border border-neutral-200/80 p-2 shadow-sm flex items-center justify-center">
                                <Image
                                    src="/logoEneisoft.jpg"
                                    alt="Logo ENEISOFT"
                                    width={48}
                                    height={48}
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col text-left md:text-right">
                                <span className="text-xl font-bold tracking-tight text-neutral-900 leading-tight">
                                    ENEISOFT XVI
                                </span>
                                <span className="text-xs font-mono font-medium text-emerald-600 uppercase tracking-widest">
                                    FISI · UNMSM · 2026
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-md">
                            Encuentro Nacional de Estudiantes de Ingeniería de Software.
                            Impulsando el desarrollo tecnológico, la innovación aplicada y la comunidad estudiantil desde la Facultad de Ingeniería de Sistemas e Informática de la Universidad Nacional Mayor de San Marcos.
                        </p>

                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 pt-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Lima, Perú</span>
                        </div>
                    </div>
                </div>

                {/* Bottom copyright bar */}
                <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                    <p>
                        © 2026 ENEISOFT XVI. Todos los derechos reservados · Facultad de Ingeniería de Sistemas e Informática (UNMSM).
                    </p>
                    <p className="font-mono text-[11px] text-neutral-400">
                        Edición XVI · 2026
                    </p>
                </div>
            </div>
            </div>
        </footer>
    );
}
