"use client";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        value: "ablauf",
        title: "Wie läuft das Coaching genau ab?",
        content: "Erstmal reden wir – kostenlos, kein Pitch, kein Verkaufsgespräch. Du erzählst mir wo du stehst, ich erkläre dir wie ich arbeite. Wenn es passt, starten wir. Du bekommst dann dein Onboarding über unsere App, füllst einen Anamnesebogen aus und erhältst danach alle Pläne, die ich speziell für dich erstellt habe. Alles an einem Ort, jederzeit abrufbar. Ich bin per Chat erreichbar und antworte dir innerhalb von 24 Stunden. Einmal pro Woche machst du einen kurzen Check-In – ich schaue drauf, gebe dir Feedback und wir legen fest, was die nächste Woche bringt.",
    },
    {
        value: "kommunikation",
        title: "Über welchen Kommunikationskanal läuft das Coaching?",
        content: "Alles läuft über unsere Coaching-App. Deine Pläne, dein Tracking, unser Chat – alles an einem Ort. Kein WhatsApp-Chaos, keine verlorenen Nachrichten. Du schreibst mir wenn du Fragen hast, und ich bin da.",
    },
    {
        value: "daten",
        title: "Muss ich jeden Tag meine Daten erfassen?",
        content: "Nein. Mehr Daten helfen mir, besser für dich arbeiten zu können – aber ich will keinen zusätzlichen Stress in dein Leben bringen. Sag mir was für dich realistisch ist, und wir finden einen Weg, der auch wirklich funktioniert.",
    },
    {
        value: "krank",
        title: "Was passiert wenn ich mal krank bin?",
        content: "Dann meldest du dich bei mir, und wir schauen gemeinsam was sinnvoll ist. Je nach Situation passen wir deinen Plan an, reduzieren die Belastung oder ich gebe dir konkrete Tipps zu Supplementen die dir helfen können, schneller wieder fit zu werden. Kein Druck – Gesundheit geht vor.",
    },
    {
        value: "pause",
        title: "Kann ich das Coaching pausieren?",
        content: "Das Leben läuft nicht immer nach Plan – das weiß ich. Wenn sich etwas ändert, ruf mich an oder schreib mir. Wir reden drüber und finden eine Lösung. Einfach verschwinden musst du auf keinen Fall.",
    },
    {
        value: "anfaenger",
        title: "Kann ich auch als kompletter Anfänger starten?",
        content: "Gerade als Anfänger macht professionelle Begleitung am meisten Sinn. Du lernst es von Anfang an richtig – keine schlechten Gewohnheiten, keine Verletzungen durch falsches Training, keine verlorene Zeit durch sinnlose Diäten. Ich nehme dich an die Hand, egal bei null du startest.",
    },
    {
        value: "preise",
        title: "Welche Laufzeiten und Preise gibt es?",
        content: "Es gibt drei Modelle – je länger die Laufzeit, desto günstiger der monatliche Beitrag:\n\n1 Monat: 250 €/Monat\n3 Monate: 200 €/Monat\n12 Monate: 150 €/Monat\n\nDu bekommst einen Vertrag und monatliche Rechnungen. Welches Modell für dich passt, klären wir gemeinsam im Erstgespräch.",
    },
    {
        value: "ernaehrung",
        title: "Darf ich flexibel essen oder muss ich mich an einen festen Plan halten?",
        content: "Das entscheidest du. Manche wollen einen klaren Plan mit genauen Mahlzeiten – andere brauchen mehr Freiheit. Beides funktioniert, wenn wir es richtig aufsetzen. Ich frage dich, was zu deinem Leben passt, und dann planen wir genau das.",
    },
    {
        value: "kein-kochen",
        title: "Kann ich auch abnehmen wenn ich wenig Zeit zum Kochen habe?",
        content: "Ja. Ich arbeite mit Menschen, die voll im Berufsleben stehen, Kinder haben, wenig Zeit und noch weniger Lust auf Meal-Prep. Wir finden Lösungen, die in deinen Alltag passen – nicht in einen Idealzustand, den du sowieso nicht hast.",
    },
    {
        value: "studio",
        title: "Brauche ich ein Fitnessstudio oder kann ich auch zuhause trainieren?",
        content: "Ein Studio ist schön, aber kein Muss. Ich erstelle dir Pläne die mit dem funktionieren was du hast – ob Studio, Zuhause oder gar nichts außer deinem eigenen Körpergewicht. Hauptsache du bewegst dich.",
    },
    {
        value: "haeufigkeit",
        title: "Wie oft pro Woche muss ich trainieren?",
        content: "So oft wie es für dich realistisch ist. Zwei Mal die Woche und konsequent ist mehr wert als fünf Mal die Woche und nach zwei Wochen wieder aufgehört. Wir finden dein Pensum – nicht das aus irgendeinem YouTube-Video.",
    },
    {
        value: "warum",
        title: "Ich habe schon vieles ausprobiert – warum sollte es jetzt funktionieren?",
        content: "Weil diesmal jemand dabei ist. Nicht irgendein Plan aus dem Internet, der dich nicht kennt. Nicht eine App, die dich nach zwei Wochen vergessen hat. Ich bin da, ich sehe was passiert, und ich passe an wenn nötig. Das ist der Unterschied.",
    },
    {
        value: "stress",
        title: "Kann ich auch gute Ergebnisse erzielen wenn ich viel Stress / Reise / Schichtdienst habe?",
        content: "Ich habe Klienten mit Schichtdienst, mit drei Kindern, auf Dienstreisen, mit chronischen Erkrankungen. Das Leben ist selten perfekt – deshalb bin ich da. Wir arbeiten mit dem was du hast, nicht mit dem was du gerne hättest.",
    },
    {
        value: "blutbild",
        title: "Werden auch Blutbilder analysiert?",
        content: "Ja – und ich nehme das ernst. Gesundheit ist das Fundament von allem. Wenn du mir dein Blutbild schickst, schaue ich es mir an und wir besprechen was die Werte bedeuten und was wir daraus machen.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};
const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

export function FAQSection() {
    return (
        <section id="faq" className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(190,40,20,0.22), transparent)" }}
            />
            <div className="max-w-3xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
                    <motion.div variants={fadeUp} className="text-center mb-14">
                        <p
                            className="text-xs tracking-[0.18em] uppercase mb-4"
                            style={{ color: "#cc2d18", fontFamily: "var(--font-mono)" }}
                        >
                            FAQ
                        </p>
                        <h2
                            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
                            style={{ color: "#f0e8e0" }}
                        >
                            Häufige Fragen
                        </h2>
                        <p className="text-base max-w-xl mx-auto" style={{ color: "#c0a898" }}>
                            Ich beantworte die hier gerne. Wenn noch etwas offen bleibt – schreib mir einfach direkt.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.value}
                                    value={item.value}
                                    className="border-b"
                                    style={{ borderColor: "rgba(190,40,20,0.18)" }}
                                >
                                    <AccordionTrigger
                                        className="py-5 text-left font-semibold hover:no-underline"
                                        style={{ color: "#f0e8e0" }}
                                    >
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="pb-5 text-sm leading-relaxed whitespace-pre-line"
                                        style={{ color: "#c0a898" }}
                                    >
                                        {item.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
