"use client";
import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Erstgespräch",
        text: "Kostenlos, kein Pitch, kein Druck. Du erzählst mir wo du stehst – ich erkläre dir wie ich arbeite. Wenn es passt, starten wir.",
    },
    {
        number: "02",
        title: "Onboarding & Plan",
        text: "Du füllst den Anamnesebogen aus, ich erstelle deine individuellen Pläne. Training, Ernährung, alles auf dich abgestimmt. Innerhalb weniger Tage bist du startklar.",
    },
    {
        number: "03",
        title: "Loslegen & wachsen",
        text: "Wöchentliche Check-Ins, laufende Anpassung, 24/7 erreichbar. Du bist nicht allein – ich bin immer im Hintergrund und hab ein Auge drauf.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
};

export function ProcessSection() {
    return (
        <section id="prozess" className="relative pt-28 pb-12 px-6">
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
                >
                    <motion.div variants={fadeUp} className="text-center mb-16">
                        <p
                            className="text-xs tracking-[0.18em] uppercase mb-4"
                            style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                        >
                            So läuft es ab
                        </p>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                            style={{ color: "#f0e8e0" }}
                        >
                            Drei Schritte.
                            <br />
                            <span
                                className="text-transparent bg-clip-text"
                                style={{ backgroundImage: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)" }}
                            >
                                Kein Overhead.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting line */}
                        <div
                            className="absolute top-8 left-8 right-8 h-px hidden md:block"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(190,40,20,0.25), rgba(190,40,20,0.25), transparent)" }}
                        />

                        <div className="grid md:grid-cols-3 gap-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={step.number}
                                    variants={fadeUp}
                                    className="relative flex flex-col items-start md:items-center text-left md:text-center"
                                >
                                    {/* Number bubble */}
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 flex-shrink-0 relative z-10"
                                        style={{
                                            background: i === 1
                                                ? "rgba(190,40,20,0.25)"
                                                : "rgba(190,40,20,0.10)",
                                            border: i === 1
                                                ? "1px solid rgba(190,40,20,0.55)"
                                                : "1px solid rgba(190,40,20,0.25)",
                                        }}
                                    >
                                        <span
                                            className="text-sm font-bold"
                                            style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-xl font-semibold mb-3"
                                        style={{ color: "#f0e8e0" }}
                                    >
                                        {step.title}
                                    </h3>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "#c0a898" }}
                                    >
                                        {step.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
