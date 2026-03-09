"use client";
import { motion } from "framer-motion";
import { Youtube, Instagram, Music2 } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-glow-button";
import { RippleButton } from "@/components/ui/ripple-button";

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

export function BackgroundPaths({
    title = "Background Paths",
}: {
    title?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xs tracking-[0.18em] uppercase mb-6"
                        style={{ color: "rgba(242,210,160,0.45)", fontFamily: "var(--font-mono)" }}
                    >
                        cbta
                    </motion.p>

                    {/* Animated title */}
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-10 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text"
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(160deg, #ffffff 30%, rgba(255,190,100,0.7) 100%)",
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="inline-block mb-10"
                    >
                        <HoverButton
                            glowColor="rgba(255,190,100,0.85)"
                            backgroundColor="rgba(13,9,2,0.9)"
                            textColor="#ffffff"
                            hoverTextColor="rgba(255,190,100,1)"
                            className="px-8 py-6 text-lg font-semibold rounded-[1.15rem] backdrop-blur-md shadow-lg"
                            style={{ border: "1px solid rgba(255,190,100,0.15)" }}
                        >
                            <span>Jetzt Termin buchen</span>
                            <span className="ml-3 opacity-70 transition-all duration-300">→</span>
                        </HoverButton>
                    </motion.div>

                    {/* Social Media Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {socials.map(({ label, href, icon: Icon }) => (
                            <RippleButton
                                key={label}
                                variant="hoverborder"
                                hoverBorderEffectColor="rgba(255,190,100,0.5)"
                                hoverBorderEffectThickness="1px"
                                rippleColor="rgba(255,190,100,0.1)"
                                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium"
                                style={{
                                    background: "rgba(255,190,100,0.06)",
                                    color: "rgba(200,212,234,0.7)",
                                }}
                                onClick={() =>
                                    window.open(href, "_blank", "noopener,noreferrer")
                                }
                            >
                                <Icon className="w-5 h-5" />
                                <span>{label}</span>
                            </RippleButton>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
