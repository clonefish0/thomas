"use client";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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
        title: "Social-Media-Chaos",
        text: "Ein Coach sagt High Carb, der nächste Low Carb. HIT-Training vs. Volumentraining. Widersprüchliche Tipps auf jedem Kanal – du weißt nicht mehr, was für dich stimmt.",
    },
    {
        number: "02",
        title: "Die Disziplin-Falle",
        text: "Anfangs bist du hoch motiviert. Doch sobald Stress kommt, bricht der Plan zusammen. Ohne System bleibt Konsistenz ein Zufallsprodukt.",
    },
];

function ProblemSection() {
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
                        <SectionLabel>Das Problem</SectionLabel>
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#f0e8e0" }}>
                            Woran es bisher
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                gescheitert ist
                            </span>
                        </h2>
                    </motion.div>
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
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{ color: "#f0e8e0" }}>
                            Komplexes Wissen.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Simpel umgesetzt.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p variants={fadeUp} className="text-lg max-w-2xl mx-auto leading-relaxed mb-16" style={{ color: "#c0a898" }}>
                        Ich erkläre komplizierte Konzepte in verständlicher Sprache – so dass du sie sofort anwenden kannst. Kein Overwhelming, keine Verwirrung. Du übernimmst die Ausführung, ich die Planung und Verantwortung.
                    </motion.p>

                    <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 text-left">
                        {[
                            { label: "Klarer Plan", text: "Kein Rätselraten mehr. Du bekommst genau das, was du brauchst – und weißt warum." },
                            { label: "Meine Verantwortung", text: "Ich trage die Verantwortung für deinen Fortschritt. Du lieferst die Ausführung." },
                            { label: "Kein Overhead", text: "Schluss mit widersprüchlichen Tipps. Ein System. Ein Ansprechpartner. Ergebnisse." },
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
    { title: "Vollständige Kontrolle", text: "Training, Ernährung, Regeneration – ich behalte den Überblick, damit dein Kopf frei bleibt." },
    { title: "Du fährst, ich navigiere", text: "Betrachte mich als deinen Co-Piloten. Die Richtung stimmt – du gibst Gas." },
    { title: "Sichtbare Ergebnisse", text: "Kein Bullshit, keine falschen Versprechen. Intelligente Planung liefert echten Physique und Performance." },
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
                            Dein Kopf wird frei.
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                Dein Körper zieht nach.
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
                            style={{ background: "rgba(190,40,20,0.10)", border: "1px solid rgba(190,40,20,0.22)" }}
                        >
                            <div className="absolute top-0 left-0 w-full h-px"
                                style={{ background: `linear-gradient(90deg, transparent, rgba(190,40,20,${0.2 + i * 0.1}), transparent)` }}
                            />
                            <h3 className="text-xl font-semibold mb-4" style={{ color: "#f0e8e0" }}>{b.title}</h3>
                            <p className="text-base leading-relaxed" style={{ color: "#c0a898" }}>{b.text}</p>
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
                            Bist du bereit, die Verantwortung
                            <br />
                            <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}>
                                in meine Hände zu legen?
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p variants={fadeUp} className="text-lg mb-10 leading-relaxed" style={{ color: "#c0a898" }}>
                        Schreib mir – ich melde mich persönlich zurück.
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
