import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import digital from "@/public/corpcomment.png";
import estore from "@/public/rmtdev.png";
import quick from "@/public/wordanalytics.png";
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
    title: "Intermediate",
    location: "Karachi, Pakistan",
    description:
      "I completed my study after 3 years of studying in DIMT.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Frontend Internship",
    location: "Karachi, Pakistan",
    description:
      "I immediately found an internship as a front-end developer in HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Remote",
    description:
      "I contributed to Professional Real World projects using Next.js, React, and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Timezee Watch Store",
    description:
      "A modern e-commerce platform for luxury watches with product catalog, cart functionality, and responsive design using shadcn/ui components.",
    tags: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "TypeScript"],
    imageUrl: timezee,
    url: 'http://timezee-five.vercel.app/',
    github: 'https://github.com/abidali671/timezee'
  },
  {
    title: 'SHOP.CO',
    description: 'A responsive and user-friendly shoes e-commerce website built with React.js and Tailwind CSS, powered by Firebase for authentication, database.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Context API', 'E-commerce'],
    imageUrl: shop,
    url: 'https://ecommerce-platform-zeta-one.vercel.app/',
    github: 'https://github.com/Abdulwahab76/ecommerce-platform'
  },
  {
    title: 'Height Comparison Web app',
    description:
      'A web application that allows users to compare their height with famous personalities using React and Tailwind CSS for a responsive design.',
    tags: ['React', 'Tailwind CSS', 'Nextjs', 'Typescript', 'API Integration'],
    imageUrl: hcWebApp,
    url: 'https://hc-calculator-olive.vercel.app/',
    github: 'https://github.com/amirsaeed671/hc-next'
  },
  {
    title: "Digital Dialogue",
    description:
      "SEO-optimized blog platform with server-side rendering, Contentful CMS integration, and MongoDB database for efficient content management.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Contentful"],
    imageUrl: digital,
    url: 'https://digital-dialogue.vercel.app/',
    github: 'https://github.com/abidali671/digital-dialogue'
  },
  {
    title: "E-Store Dashboard",
    description:
      "Admin dashboard for e-commerce management featuring real-time analytics, inventory tracking, and Redux state management with TypeScript.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Charts"],
    imageUrl: estore,
    url: 'https://e-store-dashboard.vercel.app/dashboard',
    github: 'https://github.com/abidali671/e-store-dashboard'
  },
  {
    title: "Quick Proposal Generator",
    description:
      "AI-powered tool for freelancers to generate professional Upwork proposals instantly with customizable templates and API integration.",
    tags: ["React", "TypeScript", "Tailwind", "REST API", "AI Integration"],
    imageUrl: quick,
    url: 'https://quick-proposal.vercel.app/',
    github: 'https://github.com/abidali671/quick-proposal'
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
  "Redux Toolkit",
  "Framer Motion",
  "Shadecn/ui",
  "Firebase",
  "Appwrite",
  "Wordpress"
] as const;
