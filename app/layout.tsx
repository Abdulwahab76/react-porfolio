import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { projectsData } from "@/lib/data";
import CustomCursor from "@/components/customCursor";

const inter = Inter({ subsets: ["latin"] });

// Enhanced SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://frontenddev-porfolio.netlify.app'),
  title: {
    default: 'Abdul Wahab | Frontend Developer | React & Next.js Specialist',
    template: '%s | Abdul Wahab'
  },
  description: 'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Building responsive, high-performance web applications with modern UI/UX. Based in Karachi, Pakistan. Available for freelance and full-time opportunities.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Web Developer',
    'JavaScript Developer',
    'TypeScript',
    'Tailwind CSS',
    'Portfolio',
    'Karachi Developer',
    'Pakistan Developer',
    'Freelance Developer',
    'UI/UX Developer'
  ],
  authors: [{ name: 'Abdul Wahab', url: 'https://frontenddev-porfolio.netlify.app' }],
  creator: 'Abdul Wahab',
  publisher: 'Abdul Wahab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frontenddev-porfolio.netlify.app',
    title: 'Abdul Wahab | Frontend Developer | React & Next.js Specialist',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and TypeScript. Building responsive, high-performance web applications.',
    siteName: 'Abdul Wahab Portfolio',
    images: [
      {
        url: 'https://frontenddev-porfolio.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-pic.dcd79e15.png&w=256&q=95', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Abdul Wahab - Frontend Developer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Wahab | Frontend Developer',
    description: 'Frontend Developer specializing in React, Next.js, and TypeScript',
    images: ['https://frontenddev-porfolio.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-pic.dcd79e15.png&w=256&q=95'],
    creator: '@yourtwitter', // Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://frontenddev-porfolio.netlify.app',
  },
  category: 'technology',
};

// JSON-LD Structured Data
// Map projects to structured data format
const projectsJsonLd = projectsData.map(project => ({
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: project.url,
  image: project.imageUrl ? `https://frontenddev-porfolio.netlify.app${project.imageUrl.src ?? project.imageUrl}` : undefined,
  keywords: project.tags.join(", ")
}));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Wahab",
  url: "https://frontenddev-porfolio.netlify.app",
  image: "https://frontenddev-porfolio.netlify.app/profile-pic.png",
  jobTitle: "Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and TypeScript",
  email: "abdulwahab12.pk@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressRegion: "Sindh",
    addressCountry: "PK"
  },
  sameAs: [
    "https://github.com/Abdulwahab76",
    "https://www.linkedin.com/in/aws-abdul-wahab/"
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "Frontend Development",
    "Tailwind CSS",
    "Redux",
    "HTML",
    "CSS",
    "Wordpress"
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "DIMT"
  },
  workExample: projectsJsonLd,
  hasOccupation: {
    "@type": "Occupation",
    name: "Frontend Developer",
    occupationLocation: {
      "@type": "City",
      name: "Karachi"
    },
    skills: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux, Wordpress"
  }
};


const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Abdul Wahab Portfolio',
  url: 'https://frontenddev-porfolio.netlify.app',
  description: 'Frontend Developer Portfolio showcasing React and Next.js projects',
  author: {
    '@type': 'Person',
    name: 'Abdul Wahab'
  },
  inLanguage: 'en-US'
};

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  dateCreated: '2024-01-01T00:00:00+00:00',
  dateModified: new Date().toISOString(),
  mainEntity: {
    '@type': 'Person',
    name: 'Abdul Wahab',
    alternateName: 'Abdul Wahab Frontend Developer',
    description: 'Frontend Developer specializing in React and Next.js',
    image: 'https://frontenddev-porfolio.netlify.app/profile-pic.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <CustomCursor />
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>

            <Header />
            <main>{children}</main>
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}