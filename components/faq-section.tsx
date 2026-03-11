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
        content: "Im ersten Schritt führen wir gemeinsam ein kostenloses Erstgespräch, in dem wir deine individuellen Ziele besprechen und eine konkrete Strategie festlegen. Danach erhältst du dein Onboarding über unsere App: Du füllst den Anamnesebogen aus und bekommst alle auf dich abgestimmten Pläne – jederzeit abrufbar an einem Ort. Über die App hast du außerdem 24/7 die Möglichkeit, mich direkt per Chat zu erreichen und bekommst immer innerhalb von 24 Stunden eine Antwort. 1x pro Woche machst du einen Check-In und erhältst dein persönliches Feedback sowie deine Ziele für die neue Woche.",
    },
    {
        value: "kommunikation",
        title: "Über welchen Kommunikationskanal läuft das Coaching?",
        content: "Das Coaching läuft über eine App. Das hat den Vorteil, dass du sämtliche Informationen und Pläne an einem Ort hast und jederzeit darauf zugreifen kannst. Zudem hast du in der App eine 24/7 verfügbare Chatfunktion für alle Fragen und Bedürfnisse.",
    },
    {
        value: "daten",
        title: "Muss ich jeden Tag meine Daten erfassen?",
        content: "Alles kann, nichts muss! Natürlich kann ich umso besser arbeiten, je mehr Daten ich von dir habe. Allerdings ist es nicht Ziel der Sache, bei dir Stress auszulösen. Geh gerne in die Kommunikation und wir finden einen gesunden Mittelweg, der in deinen Alltag passt.",
    },
    {
        value: "krank",
        title: "Was passiert wenn ich mal krank bin?",
        content: "Wenn du krank bist, helfe ich dir z.B. durch den gezielten Einsatz von Supplementen (Vitaminen und Mineralien), deine Gesundheit zu unterstützen, damit du schnell wieder fit wirst. Gemeinsam passen wir deinen Plan an die Situation an.",
    },
    {
        value: "pause",
        title: "Kann ich das Coaching pausieren?",
        content: "Das Leben ist individuell – die Päckchen, die wir tragen, sind es auch. Bitte such bei Problemen immer die direkte Kommunikation mit mir. Wir finden immer eine Lösung.",
    },
    {
        value: "anfaenger",
        title: "Kann ich auch als kompletter Anfänger starten?",
        content: "Selbstverständlich! Auch als Trainingsanfänger nehme ich dich an die Hand. Ich empfehle sogar, früh mit professioneller Betreuung zu starten – so erzielen wir vom ersten Tag an echte Ergebnisse und vermeiden schlechte Gewohnheiten von Beginn an.",
    },
    {
        value: "preise",
        title: "Welche Laufzeiten und Preise gibt es?",
        content: "Es gibt drei Modelle – je länger die Laufzeit, desto günstiger der monatliche Beitrag:\n\n1 Monat: 250 €/Monat\n3 Monate: 200 €/Monat\n12 Monate: 150 €/Monat\n\nDu erhältst selbstverständlich einen Vertrag sowie monatliche Rechnungen. Alle Details klären wir im kostenlosen Erstgespräch.",
    },
    {
        value: "ernaehrung",
        title: "Darf ich flexibel essen oder muss ich mich an einen festen Plan halten?",
        content: "Ich plane immer abgestimmt auf deine Bedürfnisse – egal ob du einen konkreten Ernährungsplan wünschst, Kalorienvorgaben oder mehr Flexibilität. Wir finden gemeinsam den passenden Weg. Die Coaching-App bietet zudem eine Trackingfunktion, damit wir deine Ernährung auch bei flexibler Handhabung nachvollziehen können.",
    },
    {
        value: "kein-kochen",
        title: "Kann ich auch abnehmen wenn ich wenig Zeit zum Kochen habe?",
        content: "Auch für Menschen, die keine Zeit zum Kochen haben oder einfach ungern vorkochen, finden wir eine Lösung, die im Alltag umsetzbar ist – damit du deine Ziele erreichst.",
    },
    {
        value: "studio",
        title: "Brauche ich ein Fitnessstudio oder kann ich auch zuhause trainieren?",
        content: "Du benötigst nicht zwingend ein Fitnessstudio. Auch Übungen daheim sind möglich, oder wir finden gemeinsam eine andere Lösung für mehr Aktivität in deinem Alltag.",
    },
    {
        value: "haeufigkeit",
        title: "Wie oft pro Woche muss ich trainieren?",
        content: "Wir finden gemeinsam das Trainingspensum, das in deinem Alltag realistisch umsetzbar ist. Es gibt keine starre Vorgabe – was zählt, ist Kontinuität, nicht Perfektion.",
    },
    {
        value: "warum",
        title: "Ich habe schon vieles ausprobiert – warum sollte es jetzt funktionieren?",
        content: "Weil ich dich begleite. Du bist nicht allein mit deinen Struggles und ich stehe jederzeit an deiner Seite. Mein Coaching ist kein starres Gerüst – es ist ein Coaching, das zu deinem Leben passt und dir damit leichter von der Hand geht. Mit langjähriger Erfahrung und echtem Interesse an deiner Person finden wir den Weg, der wirklich funktioniert.",
    },
    {
        value: "stress",
        title: "Kann ich auch gute Ergebnisse erzielen wenn ich viel Stress / Reise / Schichtdienst habe?",
        content: "Jeder Mensch hat sein Paket zu tragen und ist individuell zu betrachten. Auch für stressige Lebenssituationen finden wir die richtige Lösung. Ich begleite dich z.B. auch auf Dienstreisen und finde individuelle Wege im Rahmen deiner Umstände.",
    },
    {
        value: "blutbild",
        title: "Werden auch Blutbilder analysiert?",
        content: "Deine Gesundheit steht für mich an erster Stelle. Blutbilder sind mir daher sehr wichtig und werden selbstverständlich ausgewertet und mit dir persönlich besprochen.",
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
        <section className="relative py-28 px-6" style={{ backgroundColor: "transparent" }}>
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
                            className="text-4xl sm:text-5xl font-bold tracking-tight"
                            style={{ color: "#f0e8e0" }}
                        >
                            Häufige Fragen
                        </h2>
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
