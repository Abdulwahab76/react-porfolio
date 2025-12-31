"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="z-[999] relative">
      {/* Background */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full border border-white/40
        bg-white/80 shadow-lg backdrop-blur sm:top-6 sm:h-[3.25rem]
        sm:w-[40rem] sm:rounded-full dark:bg-gray-950/75 dark:border-black/40"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Desktop Nav */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2">
        <ul className="flex w-[24rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center cursor-pointer justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-300":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="sm:hidden fixed top-4 right-4 z-[1000] flex h-10 w-10
        items-center justify-center rounded-full bg-white/80 backdrop-blur
        shadow dark:bg-gray-900"
        aria-label="Open menu"
      >
        <span className="space-y-1">
          <span className="block h-0.5 w-5 bg-black dark:bg-white" />
          <span className="block h-0.5 w-5 bg-black dark:bg-white" />
          <span className="block h-0.5 w-5 bg-black dark:bg-white" />
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm
              bg-white dark:bg-gray-950 z-[1000] shadow-xl p-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-2xl"
                aria-label="Close menu"
              >
                ✕
              </button>

              <ul className="mt-16 space-y-6 text-lg font-medium">
                {links.map((link) => (
                  <motion.li
                    key={link.hash}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                  >
                    <Link
                      href={link.hash}
                      className={clsx(
                        "block  cursor-pointer hover:text-gray-950 dark:hover:text-gray-300",
                        {
                          "text-gray-950 dark:text-gray-200":
                            activeSection === link.name,
                        }
                      )}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                        setIsOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
