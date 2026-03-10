"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
                        style={{ color: "#c0a898" }}
                    >
                        Willkommen. Ich bin Thomas – dein Coach für Ernährung, Training und nachhaltige Veränderung. Hier findest du alles, was du brauchst, um endlich voranzukommen.
                    </motion.p>

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
        </div>
    );
}
