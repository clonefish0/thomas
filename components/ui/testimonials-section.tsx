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
    {
        quote: "Ich bin seit Juli 2025 bei Thomas im Coaching – zweifache Mama, damals mehr als unzufrieden mit meinem Körper. Mittlerweile habe ich fast 18 Kilo abgenommen und Muskeln aufgebaut, Kraft, Verdauung, Schlaf und Ernährung dauerhaft verbessert. Thomas ist nicht nur fachlich, sondern auch menschlich außergewöhnlich: der empathischste und verständnisvollste Mensch, den ich kenne. Ihm geht es nie ums Geld – er möchte das Leben seiner Klienten langfristig verbessern. Danke für alles was wir bereits geschafft haben und für alles was noch kommt! 🫶🏻",
        name: "Sarah G.",
        role: "Client",
        image: "/testimonials/Sarah.jpeg",
    },
    {
        quote: "Eine der besten Entscheidungen, die ich getroffen habe. Lange selber versucht mich perfekt zu ernähren und zu trainieren – aber da steht man sich am Ende selbst im Weg. Bei Thomas konnte ich das alles abgeben. Jetzt mache ich mir keine Gedanken mehr, habe weniger Stress und meine Einheiten sind kürzer bei besserer Regeneration. Keine Copy-Paste Pläne, sondern alles individuell angepasst – ob Training oder Ernährung. Thomas steht einem immer mit Rat und Tat zur Seite, egal ob Schlaf oder andere Themen. Fundiertes Fachwissen weit über das Training hinaus. 💪",
        name: "Markus G.",
        role: "Client",
        image: "/testimonials/Markus.jpeg",
    },
    {
        quote: "Seit 2 Jahren wachsen wir gemeinsam – du als Coach, der sich permanent weiterbildet, um uns alle bestmöglich zu betreuen. Ich kenne kaum jemanden, der so viel Herzblut in diese Sache hineinsteckt. Du bist nicht nur Coach, sondern auch Mensch. Gehst individuell auf Bedürfnisse ein und machst es wirklich für jeden umsetzbar – erfolgreich sogar! Lösungsorientiert, informierst dich bei unbekannten Problemen, und dabei steht immer der Mensch im Vordergrund. Deshalb würde ich auch keinen anderen Coach wählen.",
        name: "Alina B.",
        role: "Client",
        image: "/testimonials/Alina.jpeg",
    },
    {
        quote: "Ich bin sehr froh, doch den Schritt gewagt zu haben und dich als Coach zu haben 🫶🏻 Trotz meinen ganzen Krankheiten und Unfällen haben wir in dem halben Jahr schon gut was gerockt – ~10kg 🤯 Also danke dafür!",
        name: "Lea H.",
        role: "Client",
        image: "/testimonials/Lea.jpeg",
    },
    {
        quote: "Ich lernte Thomas in einer Zeit kennen, in der bei mir wirklich vieles den Bach runterging. Durch einen seiner Klienten erfuhr ich, wie Thomas arbeitet – und immer wieder fiel derselbe Satz: „Der ist wirklich top!" Ich wusste, dass ich jemanden brauche, der nicht nur fachlich top ist, sondern auch menschlich in der Lage, einen zu erreichen. Er war da. Er hat zugehört. Er hat erklärt, wie sein Plan aussieht – nicht nur körperlich, sondern auch mental. Thomas ist Coach mit Herz, Verstand und Leidenschaft. Er ist mir absolut ans Herz gewachsen und längst nicht nur Coach, sondern Freund. 🔥❤️",
        name: "Jamie M.",
        role: "Client",
        image: "/testimonials/Jamie.jpeg",
    },
    {
        quote: "Danke an meinen Coach – oder eher Freund – der mich nicht nur körperlich, sondern auch mental auf ein ganz neues Level gebracht hat. Du hast immer ein offenes Ohr und gibst einem das Gefühl, dass man mit allem zu dir kommen kann. Was ich am meisten schätze: Du kümmerst dich IMMER zuerst um deine Klienten. Training, Ernährung, Fortschritte und ganz besonders die Psyche – gerade in schwierigen Zeiten hast du immer nachgefragt und unterstützt. Du bist nicht nur Coach, sondern ein echter Wegbegleiter. Hab dich lieb 🫶💪🏼",
        name: "Sebastian K.",
        role: "Client",
        image: "/testimonials/Basti.jpeg",
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
