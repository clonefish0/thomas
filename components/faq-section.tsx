"use client";
import { motion } from "framer-motion";
import { HelpCircle, CalendarDays, Timer, Wallet } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        value: "was-ist-coaching",
        title: "Was ist Coaching?",
        subtitle: "Grundlagen & Methoden",
        content: "Coaching ist ein strukturierter Entwicklungsprozess, bei dem ich dich unterstütze, eigene Ressourcen zu entdecken, klare Ziele zu setzen und diese konsequent umzusetzen. Es geht nicht darum, dir Antworten vorzugeben – sondern die richtigen Fragen zu stellen.",
        icon: HelpCircle,
        color: "#cc2d18",
        bg: "rgba(204,45,24,0.1)",
    },
    {
        value: "ablauf",
        title: "Wie läuft eine Sitzung ab?",
        subtitle: "Struktur & Prozess",
        content: "Jede Session beginnt mit deinem persönlichen Fokus-Ziel für die Einheit. Wir arbeiten dann mit gezielten Fragen, konkreten Übungen und ehrlichem Feedback. Eine Sitzung dauert 60–90 Minuten und findet per Video-Call oder persönlich statt.",
        icon: CalendarDays,
        color: "#d44820",
        bg: "rgba(212,72,32,0.1)",
    },
    {
        value: "dauer",
        title: "Wie viele Sitzungen brauche ich?",
        subtitle: "Zeitrahmen & Intensität",
        content: "Das hängt von deinem Anliegen ab. Für ein konkretes Thema reichen oft 3–5 Sessions. Für nachhaltige Veränderungen empfehle ich ein 3–6-monatiges Begleitprogramm. Im kostenlosen Erstgespräch klären wir, was für dich sinnvoll ist.",
        icon: Timer,
        color: "#be3810",
        bg: "rgba(190,56,16,0.1)",
    },
    {
        value: "kosten",
        title: "Was kostet das Coaching?",
        subtitle: "Investition & Pakete",
        content: "Die Preise variieren je nach Format (Einzel-Session, Paket, Intensiv-Programm). Alle Details besprechen wir im kostenlosen Erstgespräch – schreib mir einfach über das Kontaktformular und ich melde mich persönlich zurück.",
        icon: Wallet,
        color: "#c82814",
        bg: "rgba(200,40,20,0.1)",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export function FAQSection() {
    return (
        <section className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(190,40,20,0.22), transparent)" }}
            />
            <div className="max-w-3xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
                    <motion.div variants={fadeUp} className="text-center mb-14">
                        <p className="text-xs tracking-[0.18em] uppercase mb-4"
                            style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}>
                            FAQ
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#f0e8e0" }}>
                            Häufige Fragen
                        </h2>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Accordion type="single" collapsible defaultValue="was-ist-coaching" className="w-full -space-y-px">
                            {faqItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <AccordionItem key={item.value} value={item.value}
                                        className="px-4 first:rounded-t-xl last:rounded-b-xl last:border-b"
                                        style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(190,40,20,0.2)" }}
                                    >
                                        <AccordionTrigger className="hover:no-underline">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-xl flex-shrink-0" style={{ backgroundColor: item.bg }}>
                                                    <Icon size={20} style={{ color: item.color }} />
                                                </div>
                                                <div className="flex flex-col items-start text-left">
                                                    <span style={{ color: "#f0e8e0" }}>{item.title}</span>
                                                    <span className="text-sm" style={{ color: "#9a7c68" }}>{item.subtitle}</span>
                                                </div>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="ps-[3.75rem]" style={{ color: "#c0a898" }}>
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                );
                            })}
                        </Accordion>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
