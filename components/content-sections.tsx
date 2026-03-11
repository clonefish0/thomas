"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const headlineReveal: Variants = {
    hidden: { opacity: 0, y: 48, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p
            className="text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
        >
            {children}
        </p>
    );
}

function Divider() {
    return (
        <div
            className="w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(190,40,20,0.22), transparent)" }}
        />
    );
}

// ─── Problem Section ───────────────────────────────────────────────
const problems = [
    {
        number: "01",
        title: "Jeder hat den richtigen Tipp",
        text: "YouTube sagt Kalorien zählen. Instagram sagt intuitiv essen. Der eine Trainer schwört auf Kraft, der andere auf Cardio. Irgendwann glaubst du gar nichts mehr – und machst gar nichts.",
    },
    {
        number: "02",
        title: "Pläne, die dein Leben ignorieren",
        text: "Ein Plan, der nicht zu deinem Alltag passt, ist kein Plan – er ist eine Aufgabe, bei der du scheitern musst. Schichtdienst, Familie, Dienstreisen: Das Leben macht keine Pause für deine Ziele.",
    },
];

function ProblemSection() {
    return (
        <section id="coaching" className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger} className="text-center mb-16"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Das Problem</SectionLabel>
                    </motion.div>
                    <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}>
                        <motion.h2 variants={headlineReveal} className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#f0e8e0" }}>
                            Nicht du warst das Problem.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Niemand war wirklich da.
                            </span>
                        </motion.h2>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger} className="grid md:grid-cols-2 gap-6"
                >
                    {problems.map((p) => (
                        <motion.div key={p.number} variants={fadeUp} className="rounded-2xl p-8"
                            style={{ background: "rgba(190,40,20,0.10)", border: "1px solid rgba(190,40,20,0.22)" }}
                        >
                            <span className="text-xs font-mono tracking-widest mb-4 block" style={{ color: "#8a1e14" }}>{p.number}</span>
                            <h3 className="text-xl font-semibold mb-3" style={{ color: "#f0e8e0" }}>{p.title}</h3>
                            <p className="text-base leading-relaxed" style={{ color: "#c0a898" }}>{p.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Solution Section ──────────────────────────────────────────────
function SolutionSection() {
    return (
        <section className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger} className="text-center"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Die Lösung</SectionLabel>
                    </motion.div>
                    <div style={{ overflow: "hidden", paddingBottom: "0.12em" }}>
                        <motion.h2 variants={headlineReveal} className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{ color: "#f0e8e0" }}>
                            Individuell.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Nur für dich.
                            </span>
                        </motion.h2>
                    </div>

                    <motion.p variants={fadeUp} className="text-lg max-w-2xl mx-auto leading-relaxed mb-16" style={{ color: "#c0a898" }}>
                        Nach Jahren mit Menschen in den unterschiedlichsten Lebenssituationen weiß ich: Es gibt keinen universellen Weg. Was du bekommst, passt sich deinem Leben an – nicht umgekehrt.
                    </motion.p>

                    <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { label: "Keine Pläne von der Stange", text: "Alles was du bekommst, wurde für dich erstellt. Deine Situation, deine Ziele, deine Grenzen." },
                            { label: "Ich bin da – wirklich", text: "Ich bin fast immer erreichbar – wenns brennt noch schneller. Wöchentlicher Check-In. Du bist nicht allein damit." },
                            { label: "Du als Mensch zählst", text: "Training und Ernährung sind nur ein Teil. Schlaf, Stress, mentale Energie – ich sehe das große Bild." },
                        ].map((item) => (
                            <motion.div key={item.label} variants={fadeUp} className="rounded-2xl p-6"
                                style={{ background: "rgba(190,40,20,0.14)", border: "1px solid rgba(190,40,20,0.24)" }}
                            >
                                <h4 className="text-base font-semibold mb-2" style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}>{item.label}</h4>
                                <p className="text-sm leading-relaxed" style={{ color: "#c0a898" }}>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Benefits Section ──────────────────────────────────────────────
const benefits = [
    { title: "Ein Plan für dein echtes Leben", text: "Kein Idealplan für ideale Umstände. Wir arbeiten mit dem, was du hast – Schichtdienst, Familie, Stress – und trotzdem kommen Ergebnisse." },
    { title: "Jemand der wirklich zuhört", text: "Nicht nur beim Check-In. Ich kenne deine Geschichte, deine Baustellen und was dich antreibt. Genau das macht den Unterschied." },
    { title: "Ergebnisse, die bleiben", text: "Wir bauen etwas auf, das wirklich zu deinem Leben passt. Nichts was nach vier Wochen wieder weg ist." },
];

function BenefitsSection() {
    return (
        <section className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger} className="text-center mb-16"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Was du bekommst</SectionLabel>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#f0e8e0" }}>
                            Nicht mehr allein damit.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Endlich Ergebnisse.
                            </span>
                        </h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger} className="grid md:grid-cols-3 gap-6"
                >
                    {benefits.map((b, i) => (
                        <motion.div key={b.title} variants={fadeUp} className="rounded-2xl p-8 relative overflow-hidden"
                            style={{ background: "rgba(190,40,20,0.16)", border: "1px solid rgba(190,40,20,0.38)" }}
                        >
                            <div className="absolute top-0 left-0 w-full h-px"
                                style={{ background: `linear-gradient(90deg, transparent, rgba(190,40,20,${0.35 + i * 0.1}), transparent)` }}
                            />
                            <h3 className="text-xl font-semibold mb-4" style={{ color: "#f0e8e0" }}>{b.title}</h3>
                            <p className="text-base leading-relaxed" style={{ color: "#ddd0c8" }}>{b.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── CTA Section ───────────────────────────────────────────────────
const inputStyle = {
    background: "rgba(255,255,255,0.07)",
    border: "1.5px solid rgba(210,32,10,0.3)",
    color: "#f0e8e0",
};
const focusBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "#cc2d18");
const blurBorder = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "rgba(210,32,10,0.3)");

function CTASection() {
    const [tab, setTab] = useState<"frage" | "termin">("frage");

    const buildMailto = (e: React.FormEvent<HTMLFormElement>, defaultSubject: string) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        // Honeypot: Bots füllen dieses versteckte Feld aus – Menschen nicht
        if (fd.get("website")) return;
        const subject = encodeURIComponent((fd.get("betreff") as string) || defaultSubject);
        const body = encodeURIComponent(`Name: ${fd.get("name")}\n\n${fd.get("nachricht")}`);
        window.location.href = `mailto:thomas@cbta-coaching.de?subject=${subject}&body=${body}`;
    };

    return (
        <section id="kontakt" className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <Divider />
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(50% 80% at 50% 100%, rgba(210,32,10,0.1) 0%, transparent 70%)" }}
            />
            <div className="relative max-w-3xl mx-auto pt-20 text-center">
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Bereit?</SectionLabel>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{ color: "#f0e8e0" }}>
                            Schreib mir.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Ich antworte persönlich.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p variants={fadeUp} className="text-lg mb-10 leading-relaxed" style={{ color: "#c0a898" }}>
                        Kein Verkaufsgespräch, keine leeren Versprechen. Nur ein ehrliches Gespräch darüber, was für dich möglich ist.
                    </motion.p>

                    {/* ── Tab Switcher ── */}
                    <motion.div variants={fadeUp} className="flex justify-center mb-10">
                        <div className="inline-flex rounded-xl p-1"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        >
                            {(["frage", "termin"] as const).map((t) => (
                                <button key={t} type="button" onClick={() => setTab(t)}
                                    className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                                    style={tab === t
                                        ? { background: "#d62010", color: "#fff", boxShadow: "0 2px 12px rgba(200,26,8,0.28)" }
                                        : { color: "#c0a898" }
                                    }
                                >
                                    {t === "frage" ? "Frage stellen" : "Termin buchen"}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Frage stellen ── */}
                    {tab === "frage" && (
                        <form className="flex flex-col gap-4 text-left mb-10" onSubmit={(e) => buildMailto(e, "Coaching-Anfrage")}>
                            {/* Honeypot – für Bots unsichtbar */}
                            <input name="website" type="text" tabIndex={-1} autoComplete="off"
                                aria-hidden="true" style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }} />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input name="name" type="text" placeholder="Name" required
                                    className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#6a4830]"
                                    style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                                <input name="email" type="email" placeholder="E-Mail" required
                                    className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#6a4830]"
                                    style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                            </div>
                            <input name="betreff" type="text" placeholder="Betreff"
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#6a4830]"
                                style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                            <textarea name="nachricht" placeholder="Deine Frage" rows={5} required
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 resize-none placeholder:text-[#6a4830]"
                                style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                            <div className="flex justify-center">
                                <GradientButton type="submit" className="px-10 py-5 text-base rounded-[1.15rem]">
                                    Frage senden <span className="opacity-70">→</span>
                                </GradientButton>
                            </div>
                        </form>
                    )}

                    {/* ── Termin buchen ── */}
                    {tab === "termin" && (
                        <form className="flex flex-col gap-4 text-left mb-10" onSubmit={(e) => buildMailto(e, "Terminanfrage")}>
                            {/* Honeypot – für Bots unsichtbar */}
                            <input name="website" type="text" tabIndex={-1} autoComplete="off"
                                aria-hidden="true" style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0 }} />
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input name="name" type="text" placeholder="Name" required
                                    className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#6a4830]"
                                    style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                                <input name="email" type="email" placeholder="E-Mail" required
                                    className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-[#6a4830]"
                                    style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                            </div>
                            <textarea name="nachricht"
                                placeholder="Nenn mir deinen Wunschtermin und was du dir vom Coaching erhoffst."
                                rows={5} required
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 resize-none placeholder:text-[#6a4830]"
                                style={inputStyle} onFocus={focusBorder} onBlur={blurBorder} />
                            <div className="flex justify-center">
                                <GradientButton type="submit" className="px-10 py-5 text-base rounded-[1.15rem]">
                                    Termin anfragen <span className="opacity-70">→</span>
                                </GradientButton>
                            </div>
                        </form>
                    )}

                    <motion.p variants={fadeUp} className="text-sm" style={{ color: "#9a7c68" }}>
                        Oder direkt:{" "}
                        <a href="mailto:thomas@cbta-coaching.de" style={{ color: "#c83520" }}>
                            thomas@cbta-coaching.de
                        </a>
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}

export function ContentSections() {
    return (
        <>
            <ProblemSection />
            <SolutionSection />
            <BenefitsSection />
            <CTASection />
        </>
    );
}
