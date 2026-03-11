"use client";

const items = [
    "Individuelle Planung",
    "Kein Schema F",
    "Ernährung",
    "Training",
    "Mindset",
    "24/7 erreichbar",
    "Blutbild-Analyse",
    "Wöchentliche Check-Ins",
    "Keine Copy-Paste Pläne",
    "Echte Ergebnisse",
    "Schlaf & Regeneration",
    "Immer ein offenes Ohr",
    "Supplements",
    "Meal Prep",
    "Langfristig denken",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden">
            <div
                className="flex gap-4 w-max"
                style={{
                    animation: `marquee${reverse ? "-reverse" : ""} 35s linear infinite`,
                }}
            >
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap flex-shrink-0"
                        style={{
                            background: i % 3 === 0
                                ? "rgba(190,40,20,0.15)"
                                : "rgba(255,255,255,0.04)",
                            border: i % 3 === 0
                                ? "1px solid rgba(190,40,20,0.30)"
                                : "1px solid rgba(255,255,255,0.08)",
                            color: i % 3 === 0 ? "#e0705a" : "#9a7c68",
                        }}
                    >
                        <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: i % 3 === 0 ? "#cc2d18" : "#6a4830" }}
                        />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

export function MarqueeSection() {
    return (
        <>
            <style>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    from { transform: translateX(-50%); }
                    to { transform: translateX(0); }
                }
            `}</style>
            <section className="relative py-10 overflow-hidden">
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "linear-gradient(90deg, #080604 0%, transparent 15%, transparent 85%, #080604 100%)",
                        zIndex: 1,
                    }}
                />
                <div className="flex flex-col gap-3 relative z-0">
                    <MarqueeRow />
                    <MarqueeRow reverse />
                </div>
            </section>
        </>
    );
}
