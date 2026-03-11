"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function StickyCTA() {
    const { scrollY } = useScroll();
    // Show after scrolling 400px
    const opacity = useTransform(scrollY, [300, 500], [0, 1]);
    const y = useTransform(scrollY, [300, 500], [20, 0]);

    return (
        <motion.div
            style={{ opacity, y }}
            className="fixed bottom-6 right-6 z-50 pointer-events-none"
        >
            <motion.a
                href="#kontakt"
                className="pointer-events-auto flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold shadow-2xl"
                style={{
                    background: "linear-gradient(135deg, #d62010 0%, #a01808 100%)",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(200,26,8,0.45), 0 2px 8px rgba(0,0,0,0.4)",
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
            >
                Kostenloses Erstgespräch
                <span className="opacity-80">→</span>
            </motion.a>
        </motion.div>
    );
}
