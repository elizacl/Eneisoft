"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "¿Qué es ENEISOFT XVI y quiénes pueden participar?",
        answer: "ENEISOFT (Encuentro Nacional de Estudiantes de Ingeniería de Sistemas e Informática) es el congreso tecnológico estudiantil más representativo del país, organizado por la comunidad de la FISI - UNMSM. Está abierto a estudiantes de pregrado y posgrado, egresados, profesionales e interesados en Ciencias de la Computación, Inteligencia Artificial y Tecnologías de la Información.",
    },
    {
        question: "¿Dónde y cuándo se desarrollará el evento?",
        answer: "El evento se realizará de manera presencial en las instalaciones de la Facultad de Ingeniería de Sistemas e Informática (FISI) de la Universidad Nacional Mayor de San Marcos (Ciudad Universitaria, Lima, Perú). Las fechas y el cronograma detallado están disponibles en las secciones de Hackathon y Eventos.",
    },
    {
        question: "¿Cómo puedo participar en la Hackathon de Inteligencia Artificial?",
        answer: "Los equipos deben estar compuestos por 3 participantes de pregrado. La inscripción se realiza a través del formulario oficial en la sección de Hackathon. La fase final presencial cuenta con un cupo selecto de 12 equipos clasificados que competirán por premios en efectivo, becas integrales y diplomas.",
    },
    {
        question: "¿Las ponencias y talleres otorgan certificación oficial?",
        answer: "Sí, todos los asistentes que completen el registro y cumplan con los requisitos de asistencia a las conferencias magistrales y talleres recibirán una certificación oficial con respaldo institucional de la FISI - UNMSM y la comisión organizadora del ENEISOFT XVI.",
    },
    {
        question: "¿Cómo puedo participar como sponsor o aliado institucional?",
        answer: "Empresas, comunidades tecnológicas y organizaciones pueden sumarse como sponsors o aliados estratégicos a través del enlace 'Convertirse en Sponsor' disponible en la sección de Aliados (o vía WhatsApp directo), o comunicándose con la Comisión Organizadora.",
    },
];

export function FAQ() {
    return (
        <section id="faq" className="py-28 px-6 bg-[#f8fafc] text-neutral-900 border-t border-b border-neutral-200/80 relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 text-xs uppercase tracking-widest text-emerald-800 mb-4 bg-emerald-50 shadow-sm font-mono">
                        <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
                        PREGUNTAS FRECUENTES
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
                        Preguntas Frecuentes.
                    </h2>
                    <p className="text-neutral-600 text-sm md:text-base font-light max-w-xl mx-auto">
                        Respuestas a las dudas más comunes sobre la participación, inscripciones, sedes y dinámicas del congreso.
                    </p>
                </motion.div>

                <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-200/90 shadow-xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-neutral-200 py-1">
                                <AccordionTrigger className="text-base md:text-lg text-left text-neutral-900 hover:text-emerald-700 font-semibold py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-600 text-sm md:text-base leading-relaxed pt-1 pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
