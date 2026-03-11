"use client";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

// ─── Kundenstimmen ───────────────────────────────────────────────────────────────
const testimonials: Testimonial[] = [
    {
        quote: "Thomas ist verständnisvoll, direkt und ehrlich in Momenten wenn man es braucht und selber vielleicht nicht sein kann. Er sieht dich als ganze Person mit all dem was gut und ausbaufähig bei dir ist. Ich bin sehr dankbar für die Zeit die er sich nimmt für mich, und das zahlt sich auch aus! Keiner der dich reduziert auf Ziele sondern einer der mit dir gemeinsam dran arbeitet. Ein toller Coach :)",
        name: "Magdalena D.",
        role: "Client",
        image: "/testimonials/Magda.jpeg",
    },
    {
        quote: "Ich habe seit meiner Kindheit unter starkem Übergewicht und Gewichtsschwankungen gelitten. Ich hatte Dinge wie weight watchers und iifym in Verbindung mit viel Sport probiert. Erst seit ich bei Thomas trainiere verstehe ich meinen Körper besser, habe endlich ein normales Gewicht und bin gesünder als je zuvor.",
        name: "Alex V.",
        role: "Client",
        image: "/testimonials/Alex.jpeg",
    },
    {
        quote: "Du hilfst mir sehr, weil du mich nicht nur als Coach kennst, sondern auch wie ein guter Freund weißt, wie ich ticke und wie ich denke. Du bist jemand, der sich wirklich in andere Menschen hineinversetzen kann und dich auf sie einstellen kann. Auch wenn wir erst seit zwei Monaten zusammen arbeiten – ich freue mich auf viele weitere Monate, in denen wir gemeinsam an meinen Zielen arbeiten. Ich bin wirklich dankbar, dich zu kennen und dass du sowohl als Coach als auch als Freund an meiner Seite bist. 🙏🏻",
        name: "Serhat T.",
        role: "Client",
        image: "/testimonials/Serhat.jpeg",
    },
    {
        quote: "Coach T ist einfach immer da und hat mir in allen Lebenslagen geholfen, ich würde sagen mein persönlicher lifesaver ✨ Ich bin ganz stolz ein Teil des cbta Teams zu sein ❤️",
        name: "Tanja S.",
        role: "Client",
        image: "/testimonials/Tanni.jpeg",
    },
    {
        quote: "Was kann ich nach 12 Monaten Coaching by Thomas Arndt sagen? Es war eine spannende und verdammt gute Zeit. Angesetzt auf 9 Monate – verlängert nach 6. Er hat mir viel beigebracht, ob Training, Ernährung oder Mindset. Thomas hatte immer ein offenes Ohr für Fragen und Zweifel, und hat diese schnell & sachlich aus dem Weg geräumt. In 12 Monaten wurde aus einem Coach ein Freund. Herzlich und prall gefüllt mit Kompetenz, ohne viel Schnickschnack. So sollte ein Coaching sein.",
        name: "Simon W.",
        role: "Client",
        image: "/testimonials/Simon.jpeg",
    },
    {
        quote: "Thomas ist für mich weit mehr als nur ein Coach. Das Besondere ist das menschliche Verhältnis – mit der Zeit ist daraus etwas entstanden, das über klassisches Coaching hinausgeht: eine vertrauensvolle, fast freundschaftliche Verbindung. Er hört zu, nimmt sich Zeit und schafft es, dass man sich öffnen kann ohne sich bewertet zu fühlen. Was ich besonders schätze, ist sein Humor – die Zusammenarbeit fühlt sich nie schwer an. Selbst jetzt, wo ich pausiere, ist er weiterhin da. Das zeigt mir, dass es ihm nicht nur um Coaching geht, sondern um ehrliche Unterstützung.",
        name: "Melinda H.",
        role: "Client",
        image: "/testimonials/Mel.jpeg",
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
