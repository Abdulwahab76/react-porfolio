"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 pt-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello there! I'm <span className="font-medium">Abdul Wahab</span>, a <span className="font-medium">Frontend Developer</span> with <span className="font-medium">1+ year of experience</span> specializing in modern web applications. My tech stack includes{" "}
        <span className="font-medium">React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui</span>, complemented by backend tools like <span className="font-medium">Firebase, Appwrite</span>. I craft <span className="italic">responsive, high-performance interfaces</span> that work beautifully on any device.
        <span className="italic"> What I love most about development</span> is <span className="underline">solving challenging problems</span> and that moment when everything clicks into place. I'm always exploring <span className="font-medium">new technologies</span> and refining my skills. Currently open to{" "}
        <span className="font-medium">full-time roles</span> and <span className="font-medium">freelance collaborations</span> with innovative teams.
      </p>
    </motion.section>
  );
}
