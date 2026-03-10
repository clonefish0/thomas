"use client";
import { motion } from "framer-motion";
import { Youtube, Instagram, Music2 } from "lucide-react";
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
                                                "linear-gradient(160deg, #1c0e02 30%, rgba(190,40,20,0.9) 100%)",
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
                        <GradientButton
                            className="px-8 py-6 text-lg rounded-[1.15rem] shadow-lg"
                            onClick={() =>
                                document
                                    .getElementById("kontakt")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            Jetzt Termin buchen
                            <span className="opacity-70">→</span>
                        </GradientButton>
                    </motion.div>

                    {/* Social Media Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
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
        </div>
    );
}
