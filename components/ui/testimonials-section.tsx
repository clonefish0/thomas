"use client";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

// ─── Platzhalter – ersetze diese Einträge nach und nach mit echten Kundenstimmen ───
const testimonials: Testimonial[] = [
    {
        quote: "Ich wusste, dass mehr in mir steckt – mir hat nur das richtige System gefehlt. Thomas hat mir in wenigen Wochen mehr geholfen als Jahre des Selbststudiums.",
        name: "Max M.",
        role: "Coaching-Teilnehmer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "Endlich jemand, der nicht einfach einen Ernährungsplan rausschmeißt, sondern versteht, warum meine bisherigen Versuche nicht funktionierten. Klarer Kopf, klares System.",
        name: "Sarah K.",
        role: "Coaching-Teilnehmerin",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "Thomas erklärt komplexe Themen so, dass man sie wirklich versteht. Ich bin nicht mehr abhängig von widersprüchlichen Social-Media-Tipps.",
        name: "Lukas B.",
        role: "Coaching-Teilnehmer",
        image: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        quote: "Das Coaching war die beste Investition in mich selbst. Ich habe zum ersten Mal das Gefühl, dass mein Fortschritt kein Zufall ist, sondern Ergebnis eines echten Plans.",
        name: "Jana R.",
        role: "Coaching-Teilnehmerin",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
        quote: "Keine leeren Versprechen, keine Standardpläne. Thomas nimmt sich wirklich Zeit, um zu verstehen wo man steht – und wo man hinwill.",
        name: "Felix W.",
        role: "Coaching-Teilnehmer",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
        quote: "Ich habe viele Coaches ausprobiert, aber niemand hat mich so klar durch den ganzen Prozess geführt. Ergebnisse sprechen für sich.",
        name: "Anna S.",
        role: "Coaching-Teilnehmerin",
        image: "https://randomuser.me/api/portraits/women/62.jpg",
    },
];

export function TestimonialsSection() {
    return (
        <section className="relative w-full py-28 px-6">
            {/* Divider top */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                    background:
                        "linear-gradient(90deg, transparent, rgba(190,40,20,0.18), transparent)",
                }}
            />

            <div className="mx-auto max-w-5xl space-y-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <p
                        className="text-xs tracking-[0.18em] uppercase mb-4"
                        style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                    >
                        Stimmen
                    </p>
                    <h2
                        className="text-4xl sm:text-5xl font-bold tracking-tight"
                        style={{ color: "#f0e8e0" }}
                    >
                        Was Kunden sagen
                    </h2>
                    <p
                        className="mt-4 text-base max-w-xl mx-auto"
                        style={{ color: "#c0a898" }}
                    >
                        Echte Menschen, echte Veränderungen – gesammelt über Zeit.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map(({ name, role, quote, image }, index) => (
                        <motion.div
                            key={index}
                            initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
                            whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 * index + 0.1, duration: 0.7 }}
                            className="relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden p-5 rounded-2xl"
                            style={{
                                background: "rgba(190,40,20,0.08)",
                                border: "1px solid rgba(190,40,20,0.20)",
                            }}
                        >
                            {/* Decorative grid in card background */}
                            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                                <div className="absolute inset-0 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                                    <GridPattern
                                        width={20}
                                        height={20}
                                        x={-12}
                                        y={4}
                                        strokeDasharray="3"
                                        className="absolute inset-0 h-full w-full stroke-[rgba(190,40,20,0.18)] fill-none mix-blend-screen"
                                    />
                                </div>
                            </div>

                            {/* Avatar */}
                            <img
                                alt={name}
                                src={image}
                                loading="lazy"
                                className="size-10 rounded-full object-cover flex-shrink-0"
                            />

                            {/* Content */}
                            <div>
                                <div className="-mt-0.5 -space-y-0.5">
                                    <p
                                        className="text-sm font-semibold"
                                        style={{ color: "#f0e8e0" }}
                                    >
                                        {name}
                                    </p>
                                    <span
                                        className="block text-[11px] font-light tracking-tight"
                                        style={{ color: "#9a7c68" }}
                                    >
                                        {role}
                                    </span>
                                </div>
                                <blockquote className="mt-3">
                                    <p
                                        className="text-sm font-light leading-relaxed"
                                        style={{ color: "#c0a898" }}
                                    >
                                        {quote}
                                    </p>
                                </blockquote>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
