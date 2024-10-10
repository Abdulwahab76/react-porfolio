import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import digital from "../public/digital.png";
import estore from "../public/estore.png";
import quick from "../public/qucikpropsal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "intermediate",
    location: "Karachi, pakistan",
    description:
      "I completed my study after 3 years of studying in DIMT.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Frontend internship",
    location: "Karachi, pakistan",
    description:
      "I immediately found a internship as a front-end developer in html cs js.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Karachi, pakistan",
    description:
      "I worked as a front-end developer for 1 years in react js. I also upskilled to the new techs.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Digital Dialogue",
    description:
      "I build this blog project using nextjs for seo optimization.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "contentful"],
    imageUrl: digital,
  },
  {
    title: "E store Dashboard",
    description:
      "i build e-commerce management dashboard using reactjs ",
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    imageUrl: estore,
  },
  {
    title: "Quick proposal",
    description:
      "I build qucik proposal generator for upwork users.",
    tags: ["React", "Tailwind", 'API', 'Typescript'],
    imageUrl: quick,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
