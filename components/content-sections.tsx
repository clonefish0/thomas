"use client";
import { motion, type Variants } from "framer-motion";
import { HoverButton } from "@/components/ui/hover-glow-button";

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
            style={{ color: "rgba(255,190,100,0.5)", fontFamily: "var(--font-mono)" }}
        >
            {children}
        </p>
    );
}

function Divider() {
    return (
        <div
            className="w-full h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,190,100,0.08), transparent)" }}
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
        <section
            className="relative py-28 px-6"
            style={{ backgroundColor: "transparent" }}
        >
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Das Problem</SectionLabel>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                            style={{ color: "#ffffff" }}
                        >
                            Woran es bisher
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(160deg, #ffffff 30%, rgba(255,190,100,0.7) 100%)",
                                }}
                            >
                                gescheitert ist
                            </span>
                        </h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid md:grid-cols-2 gap-6"
                >
                    {problems.map((p) => (
                        <motion.div
                            key={p.number}
                            variants={fadeUp}
                            className="rounded-2xl p-8"
                            style={{
                                background: "rgba(255,190,100,0.04)",
                                border: "1px solid rgba(255,190,100,0.08)",
                            }}
                        >
                            <span
                                className="text-xs font-mono tracking-widest mb-4 block"
                                style={{ color: "rgba(255,190,100,0.35)" }}
                            >
                                {p.number}
                            </span>
                            <h3
                                className="text-xl font-semibold mb-3"
                                style={{ color: "#ffffff" }}
                            >
                                {p.title}
                            </h3>
                            <p
                                className="text-base leading-relaxed"
                                style={{ color: "rgba(242,210,160,0.65)" }}
                            >
                                {p.text}
                            </p>
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
        <section
            className="relative py-28 px-6"
            style={{ backgroundColor: "transparent" }}
        >
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Die Lösung</SectionLabel>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                            style={{ color: "#ffffff" }}
                        >
                            Komplexes Wissen.
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(160deg, #ffffff 30%, rgba(255,190,100,0.7) 100%)",
                                }}
                            >
                                Simpel umgesetzt.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg max-w-2xl mx-auto leading-relaxed mb-16"
                        style={{ color: "rgba(242,210,160,0.65)" }}
                    >
                        Ich erkläre komplizierte Konzepte in verständlicher Sprache – so dass du sie sofort anwenden kannst. Kein Overwhelming, keine Verwirrung. Du übernimmst die Ausführung, ich die Planung und Verantwortung.
                    </motion.p>

                    <motion.div
                        variants={stagger}
                        className="grid md:grid-cols-3 gap-6 text-left"
                    >
                        {[
                            { label: "Klarer Plan", text: "Kein Rätselraten mehr. Du bekommst genau das, was du brauchst – und weißt warum." },
                            { label: "Meine Verantwortung", text: "Ich trage die Verantwortung für deinen Fortschritt. Du lieferst die Ausführung." },
                            { label: "Kein Overhead", text: "Schluss mit widersprüchlichen Tipps. Ein System. Ein Ansprechpartner. Ergebnisse." },
                        ].map((item) => (
                            <motion.div
                                key={item.label}
                                variants={fadeUp}
                                className="rounded-2xl p-6"
                                style={{
                                    background: "rgba(185,85,15,0.06)",
                                    border: "1px solid rgba(255,190,100,0.1)",
                                }}
                            >
                                <h4
                                    className="text-base font-semibold mb-2"
                                    style={{ color: "rgba(255,190,100,0.9)", fontFamily: "var(--font-mono)" }}
                                >
                                    {item.label}
                                </h4>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: "rgba(242,210,160,0.6)" }}
                                >
                                    {item.text}
                                </p>
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
    {
        title: "Vollständige Kontrolle",
        text: "Training, Ernährung, Regeneration – ich behalte den Überblick, damit dein Kopf frei bleibt.",
    },
    {
        title: "Du fährst, ich navigiere",
        text: "Betrachte mich als deinen Co-Piloten. Die Richtung stimmt – du gibst Gas.",
    },
    {
        title: "Sichtbare Ergebnisse",
        text: "Kein Bullshit, keine falschen Versprechen. Intelligente Planung liefert echten Physique und Performance.",
    },
];

function BenefitsSection() {
    return (
        <section
            className="relative py-28 px-6"
            style={{ backgroundColor: "transparent" }}
        >
            <Divider />
            <div className="max-w-5xl mx-auto pt-20">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Was du bekommst</SectionLabel>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                            style={{ color: "#ffffff" }}
                        >
                            Dein Kopf wird frei.
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(160deg, #ffffff 30%, rgba(255,190,100,0.7) 100%)",
                                }}
                            >
                                Dein Körper zieht nach.
                            </span>
                        </h2>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            variants={fadeUp}
                            className="rounded-2xl p-8 relative overflow-hidden"
                            style={{
                                background: "rgba(255,190,100,0.04)",
                                border: "1px solid rgba(255,190,100,0.08)",
                            }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-px"
                                style={{
                                    background: `linear-gradient(90deg, transparent, rgba(255,190,100,${0.2 + i * 0.1}), transparent)`,
                                }}
                            />
                            <h3
                                className="text-xl font-semibold mb-4"
                                style={{ color: "#ffffff" }}
                            >
                                {b.title}
                            </h3>
                            <p
                                className="text-base leading-relaxed"
                                style={{ color: "rgba(242,210,160,0.65)" }}
                            >
                                {b.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── CTA Section ───────────────────────────────────────────────────
function CTASection() {
    return (
        <section
            className="relative py-28 px-6"
            style={{ backgroundColor: "transparent" }}
        >
            <Divider />
            {/* Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(50% 80% at 50% 100%, rgba(185,85,15,0.1) 0%, transparent 70%)",
                }}
            />
            <div className="relative max-w-3xl mx-auto pt-20 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <motion.div variants={fadeUp}>
                        <SectionLabel>Bereit?</SectionLabel>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
                            style={{ color: "#ffffff" }}
                        >
                            Bist du bereit, die Verantwortung
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(160deg, #ffffff 30%, rgba(255,190,100,0.7) 100%)",
                                }}
                            >
                                in meine Hände zu legen?
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        variants={fadeUp}
                        className="text-lg mb-12 leading-relaxed"
                        style={{ color: "rgba(242,210,160,0.6)" }}
                    >
                        Schreib mir – ich melde mich persönlich zurück.
                    </motion.p>

                    <motion.form
                        variants={stagger}
                        className="flex flex-col gap-4 text-left mb-10"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const fd = new FormData(e.currentTarget);
                            const subject = encodeURIComponent(fd.get("betreff") as string || "Coaching-Anfrage");
                            const body = encodeURIComponent(
                                `Name: ${fd.get("name")}\n\n${fd.get("nachricht")}`
                            );
                            window.location.href = `mailto:thomas@cbta-coaching.de?subject=${subject}&body=${body}`;
                        }}
                    >
                        <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200"
                                style={{
                                    background: "rgba(255,190,100,0.05)",
                                    border: "1px solid rgba(255,190,100,0.12)",
                                    color: "#ffffff",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.35)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.12)")}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="E-Mail"
                                required
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200"
                                style={{
                                    background: "rgba(255,190,100,0.05)",
                                    border: "1px solid rgba(255,190,100,0.12)",
                                    color: "#ffffff",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.35)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.12)")}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <input
                                name="betreff"
                                type="text"
                                placeholder="Betreff"
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200"
                                style={{
                                    background: "rgba(255,190,100,0.05)",
                                    border: "1px solid rgba(255,190,100,0.12)",
                                    color: "#ffffff",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.35)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.12)")}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <textarea
                                name="nachricht"
                                placeholder="Deine Nachricht"
                                rows={5}
                                required
                                className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                                style={{
                                    background: "rgba(255,190,100,0.05)",
                                    border: "1px solid rgba(255,190,100,0.12)",
                                    color: "#ffffff",
                                }}
                                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.35)")}
                                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,190,100,0.12)")}
                            />
                        </motion.div>
                        <motion.div variants={fadeUp} className="flex justify-center">
                            <HoverButton
                                glowColor="rgba(255,190,100,0.85)"
                                backgroundColor="rgba(13,9,2,0.9)"
                                textColor="#ffffff"
                                hoverTextColor="rgba(255,190,100,1)"
                                className="px-10 py-5 text-base font-semibold rounded-[1.15rem] shadow-lg"
                                style={{ border: "1px solid rgba(255,190,100,0.15)" }}
                            >
                                <span>Nachricht senden</span>
                                <span className="ml-3 opacity-70 transition-all duration-300">→</span>
                            </HoverButton>
                        </motion.div>
                    </motion.form>

                    <motion.p
                        variants={fadeUp}
                        className="text-sm"
                        style={{ color: "rgba(242,210,160,0.35)" }}
                    >
                        Oder direkt:{" "}
                        <a
                            href="mailto:thomas@cbta-coaching.de"
                            style={{ color: "rgba(255,190,100,0.6)" }}
                        >
                            thomas@cbta-coaching.de
                        </a>
                        {" · "}
                        <a
                            href="tel:+4917632692381"
                            style={{ color: "rgba(255,190,100,0.6)" }}
                        >
                            +49 176 326 923 81
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
