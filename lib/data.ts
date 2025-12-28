import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import digital from "@/public/corpcomment.png";
import estore from "@/public/rmtdev.png";
// import quick from "@/public/wordanalytics.png";
import timezee from '@/public/timezee-watch.png';
import hcWebApp from '@/public/hc-web.png';
import shop from '@/public/shopco.png';
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
    name: "Blogs",
    hash: "/blogs",
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
    title: "Timezee Watch Store",
    description:
      "A modern e-commerce platform for luxury watches with product catalog, cart functionality, and responsive design using shadcn/ui components.",
    tags: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    imageUrl: timezee,
    url: 'http://timezee-five.vercel.app/'
  },
  {
    title: 'SHOP.CO',
    description: 'A responsive and user-friendly shoes e-commerce website built with React.js and Tailwind CSS, powered by Firebase for authentication, database.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Context API', 'E-commerce'],
    imageUrl: shop,
    url: 'https://ecommerce-platform-zeta-one.vercel.app/'
  },
  {
    title: 'Height Comparison Web app',
    description:
      'A web application that allows users to compare their height with famous personalities using React and Tailwind CSS for a responsive design.',
    tags: ['React', 'Tailwind CSS', 'Nextjs', 'Typescript', 'API Integration'],
    imageUrl: hcWebApp,
    url: 'https://hc-calculator-olive.vercel.app/'
  },
  {
    title: "Digital Dialogue",
    description:
      "SEO-optimized blog platform with server-side rendering, Contentful CMS integration, and MongoDB database for efficient content management.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Contentful"],
    imageUrl: digital,
    url: 'https://digital-dialogue.vercel.app/'
  },
  {
    title: "E-Store Dashboard",
    description:
      "Admin dashboard for e-commerce management featuring real-time analytics, inventory tracking, and Redux state management with TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Charts"],
    imageUrl: estore,
    url: 'https://e-store-dashboard.vercel.app/dashboard'
  },
  // {
  //   title: "Quick Proposal Generator",
  //   description:
  //     "AI-powered tool for freelancers to generate professional Upwork proposals instantly with customizable templates and API integration.",
  //   tags: ["React", "TypeScript", "Tailwind", "REST API", "AI Integration"],
  //   imageUrl: quick,
  // },
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
  "Redux Toolkit",
  "Framer Motion",
  "Shadecn/ui",
  "Firebase",
  "Appwrite",
  "Wordpress"
] as const;
