"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [hovering, setHovering] = useState(false);
    const [visible, setVisible] = useState(false);

    const mx = useMotionValue(-100);
    const my = useMotionValue(-100);

    // Dot: snappy
    const dotX = useSpring(mx, { stiffness: 700, damping: 32 });
    const dotY = useSpring(my, { stiffness: 700, damping: 32 });

    // Ring: lags behind
    const ringX = useSpring(mx, { stiffness: 160, damping: 22 });
    const ringY = useSpring(my, { stiffness: 160, damping: 22 });

    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const onEnter = () => setHovering(true);
        const onLeave = () => setHovering(false);

        window.addEventListener("mousemove", onMove);

        const attachHover = () => {
            document.querySelectorAll("a, button, [role='button'], input, textarea, label").forEach((el) => {
                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
            });
        };
        attachHover();

        const observer = new MutationObserver(attachHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", onMove);
            observer.disconnect();
        };
    }, [mx, my, visible]);

    if (!visible) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
                animate={{
                    width: hovering ? 46 : 28,
                    height: hovering ? 46 : 28,
                    opacity: 1,
                    borderColor: hovering ? "rgba(204,45,24,0.9)" : "rgba(204,45,24,0.65)",
                }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="fixed top-0 left-0 rounded-full border pointer-events-none"
                style={{
                    zIndex: 99999,
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            {/* Dot */}
            <motion.div
                style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
                animate={{ scale: hovering ? 0 : 1, opacity: 1 }}
                transition={{ duration: 0.15 }}
                className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none"
                style={{
                    zIndex: 99999,
                    backgroundColor: "#cc2d18",
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
