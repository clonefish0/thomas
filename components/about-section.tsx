"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
    { src: "/Foto1.jpg", className: "col-span-2 row-span-2 rounded-2xl" },
    { src: "/Foto2.jpg", className: "rounded-xl" },
    { src: "/Foto3.jpg", className: "rounded-xl" },
    { src: "/Foto4.jpg", className: "rounded-xl" },
    { src: "/Foto6.jpg", className: "rounded-xl" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const headlineReveal = {
    hidden: { opacity: 0, y: 48, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export function AboutSection() {
    return (
        <section id="ueber-mich" className="relative py-28 px-6">
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(190,40,20,0.22), transparent)" }}
            />
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Text */}
                    <div>
                        <motion.div variants={fadeUp}>
                            <p
                                className="text-xs tracking-[0.18em] uppercase mb-4"
                                style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                            >
                                Über mich
                            </p>
                        </motion.div>
                        <div style={{ overflow: "hidden" }}>
                            <motion.h2
                                variants={headlineReveal}
                                className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                                style={{ color: "#f0e8e0" }}
                            >
                                Ich bin Thomas.
                                <br />
                                <span
                                    className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}
                                >
                                    33 Jahre. Coach aus Überzeugung.
                                </span>
                            </motion.h2>
                        </div>

                        <motion.div variants={fadeUp} className="space-y-4" style={{ color: "#c0a898" }}>
                            <p className="text-base leading-relaxed">
                                Angefangen hat alles 2013 – nicht mit einer Ausbildung, sondern mit echten Menschen. In Facebook-Gruppen habe ich kostenlos geholfen, Fragen beantwortet, Pläne geschrieben. Weil es funktioniert hat, kamen immer mehr.
                            </p>
                            <p className="text-base leading-relaxed">
                                In meiner Zeit im Supplementshop habe ich mein Wissen vertieft. Täglich Gespräche mit Menschen über Ernährung, Training, Gesundheit. Danach ein Abstecher ins lokale Gym – und seit Mai 2025 offiziell mit cbta als eigene Firma.
                            </p>
                            <p className="text-base leading-relaxed">
                                Was mich antreibt: Menschen besser zu machen. Ihnen zu zeigen, was möglich ist – wenn man aufhört, generische Tipps zu befolgen und anfängt, auf den eigenen Körper zu hören. Ich will besser sein als jeder KI-Coach da draußen. Nicht weil ich es beweisen muss – sondern weil meine Klienten es verdienen.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
                            <div
                                className="h-px flex-1"
                                style={{ background: "rgba(190,40,20,0.25)" }}
                            />
                            <span
                                className="text-sm font-semibold tracking-wide"
                                style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                            >
                                cbta – Coaching by Thomas Arndt
                            </span>
                            <div
                                className="h-px flex-1"
                                style={{ background: "rgba(190,40,20,0.25)" }}
                            />
                        </motion.div>
                    </div>

                    {/* Photo Grid */}
                    <motion.div
                        variants={fadeUp}
                        className="grid grid-cols-3 grid-rows-3 gap-3 h-[480px]"
                    >
                        {/* Large photo top-left — Gesicht */}
                        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl">
                            <Image
                                src="/Foto6.jpg"
                                alt="Thomas Arndt – cbta Coach"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 400px"
                                priority
                            />
                        </div>

                        {/* Small top-right */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/Foto1.jpg"
                                alt="Thomas Arndt Training"
                                fill
                                className="object-cover"
                                sizes="150px"
                            />
                        </div>

                        {/* Small mid-right */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/Foto2.jpg"
                                alt="Thomas Arndt Training"
                                fill
                                className="object-cover"
                                sizes="150px"
                            />
                        </div>

                        {/* Bottom row: 3 small */}
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/Foto3.jpg"
                                alt="Thomas Arndt Training"
                                fill
                                className="object-cover"
                                sizes="150px"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-xl">
                            <Image
                                src="/Foto4.jpg"
                                alt="Thomas Arndt Training"
                                fill
                                className="object-cover"
                                sizes="150px"
                            />
                        </div>
                        {/* Decorative accent box */}
                        <div
                            className="relative overflow-hidden rounded-xl flex items-center justify-center"
                            style={{
                                background: "rgba(190,40,20,0.12)",
                                border: "1px solid rgba(190,40,20,0.30)",
                            }}
                        >
                            <span
                                className="text-xs font-bold tracking-widest text-center px-2"
                                style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                            >
                                seit{"\n"}2013
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
