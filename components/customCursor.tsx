"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);
    useEffect(() => {
        const enter = () => setHover(true);
        const leave = () => setHover(false);

        const elements = document.querySelectorAll("a, button");

        elements.forEach(el => {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);
        });

        return () => {
            elements.forEach(el => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            })
        };
    }, []);

    // Disable on mobile
    if (typeof window !== "undefined" && window.innerWidth < 600) return null;

    return (
        <>
            {/* OUTLINE (TRAILING) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999]
        h-10 w-10 rounded-full border border-gray-900  md:block hidden
        dark:border-white"
                animate={{
                    x: mouse.x - 20,
                    y: mouse.y - 20,
                    scale: hover ? 1.6 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 0.6,
                }}
            />

            {/* INNER CURSOR (FAST) */}
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999]
        h-3 w-3 rounded-full bg-gray-900 dark:bg-white mix-blend-difference"
                animate={{
                    x: mouse.x - 6,
                    y: mouse.y - 6,
                }}
                transition={{
                    type: "tween",
                    ease: "linear",
                    duration: 0.05, // VERY FAST
                }}
            />
        </>
    );
}
