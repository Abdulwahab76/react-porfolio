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
  Hello there! I'm <span className="font-medium">Abdul Wahab </span>, a skilled Front-End Web Developer with over 1 year of experience
  <span className="font-medium">full-stack web development</span>. My core stack includes{" "}
  <span className="font-medium">HTML, CSS, JavaScript, React.js, Material UI, and Tailwind CSS</span>. I love creating modern websites and web applications that work smoothly on any device. 
  <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. I am also familiar with TypeScript and Prisma, and I am always looking to learn new technologies. I am currently seeking a{" "}
  <span className="font-medium">full-time position</span> as a software developer.
</p>



    </motion.section>
  );
}
