"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{
          scale: scale,
          opacity: opacity,
        }}
        className="group mb-6 sm:mb-8 last:mb-0"
      >
        <section
          className="
          relative overflow-hidden rounded-lg w-full lg:w-7/12 my-4 mx-auto border border-black/5
          bg-gray-100 transition
          hover:bg-gray-200
          sm:pr-8 sm:h-[20rem]
          dark:bg-white/10 dark:hover:bg-white/20
        "
        >
          {/* ✅ IMAGE */}
          <div
            className="
            relative w-full h-56
            sm:absolute sm:top-8 sm:-right-40 sm:h-auto sm:w-[28.25rem]
            sm:group-even:right-[initial] sm:group-even:-left-40
          "
          >
            <Image
              src={imageUrl}
              alt={title}
              className="
              w-full h-full object-cover rounded-t-lg
              sm:rounded-lg shadow-2xl transition
  
              sm:group-hover:scale-[1.04]
              sm:group-hover:-translate-x-3
              sm:group-hover:translate-y-3
              sm:group-hover:-rotate-2
  
              sm:group-even:group-hover:translate-x-3
              sm:group-even:group-hover:translate-y-3
              sm:group-even:group-hover:rotate-2
            "
            />
          </div>

          {/* ✅ CONTENT */}
          <div
            className="
            flex flex-col p-6
            sm:pl-10 sm:pr-2 sm:pt-10
            sm:max-w-[50%] sm:h-full
            sm:group-even:ml-[20rem]
          "
          >
            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="mt-2 leading-relaxed text-gray-950 dark:text-white/70">
              {description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="
                  rounded-full bg-black/[0.7]
                  px-3 py-1 text-[0.7rem]
                  uppercase tracking-wider text-white
                  dark:text-white/70
                "
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </motion.div>
    </Link>

  );
}
