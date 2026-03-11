"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Youtube, Instagram, Music2, ChevronDown } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const socials = [
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ThomasArndt_cbta",
        icon: Youtube,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/thomasarndt_cbta/",
        icon: Instagram,
    },
    {
        label: "Spotify",
        href: "https://open.spotify.com/show/4ZmKyh5I2lLhb1nUhRfCK0",
        icon: Music2,
    },
];

export function BackgroundPaths() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
                        className="flex justify-center mb-8"
                    >
                        <Image
                            src="/Logo.png"
                            alt="cbta – Coaching by Thomas Arndt"
                            width={380}
                            height={380}
                            quality={100}
                            className="rounded-none"
                            priority
                        />
                    </motion.div>

                    {/* Welcome text */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                        style={{ color: "#ddd0c8" }}
                    >
                        Du hast es schon versucht. Alleine, mit irgendwelchen Plänen, mit Apps. Irgendetwas fehlte immer. Ich bin Thomas – und das hier ist kein Schema F.
                    </motion.p>

                    {/* Primary CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex justify-center mb-6"
                    >
                        <a
                            href="#coaching"
                            onClick={e => { e.preventDefault(); document.getElementById("coaching")?.scrollIntoView({ behavior: "smooth" }); }}
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold tracking-wide transition-all duration-200"
                            style={{
                                background: "linear-gradient(135deg, #cc2d18 0%, #a02010 100%)",
                                color: "#fff",
                                boxShadow: "0 4px 24px rgba(204,45,24,0.35)",
                                fontFamily: "var(--font-sans)",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 6px 32px rgba(204,45,24,0.55)")}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(204,45,24,0.35)")}
                        >
                            Kostenloses Erstgespräch →
                        </a>
                    </motion.div>

                    {/* Social Media Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {socials.map(({ label, href, icon: Icon }) => (
                            <GradientButton
                                key={label}
                                variant="soft"
                                className="px-5 py-3 rounded-xl text-sm"
                                onClick={() =>
                                    window.open(href, "_blank", "noopener,noreferrer")
                                }
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </GradientButton>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => document.getElementById("ueber-mich")?.scrollIntoView({ behavior: "smooth" })}
            >
                <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#9a8070", fontFamily: "var(--font-mono)" }}>
                    Mehr
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5" style={{ color: "#cc2d18" }} />
                </motion.div>
            </motion.div>
        </div>
    );
}
