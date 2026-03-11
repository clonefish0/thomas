"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1400;
        const step = 16;
        const increment = to / (duration / step);
        const timer = setInterval(() => {
            start += increment;
            if (start >= to) {
                setCount(to);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, step);
        return () => clearInterval(timer);
    }, [inView, to]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
    { value: 10, suffix: "+", label: "Jahre Erfahrung", sub: "Angefangen 2013 in Facebook-Gruppen" },
    { value: 50, suffix: "+", label: "Betreute Klienten", sub: "Menschen, keine Nummern" },
    { value: 24, suffix: "/7", label: "Erreichbar", sub: "Immer. Wirklich." },
];

export function StatsSection() {
    return (
        <section className="relative py-16 px-6">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(190,40,20,0.06) 50%, transparent 100%)",
                }}
            />
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            className="text-center"
                        >
                            <div
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-1"
                                style={{
                                    background: "linear-gradient(160deg, #f0e8e0 30%, #cc2d18 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                <CountUp to={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-sm sm:text-base font-semibold mb-1" style={{ color: "#f0e8e0" }}>
                                {stat.label}
                            </p>
                            <p className="text-xs sm:text-sm" style={{ color: "#9a7c68" }}>
                                {stat.sub}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
