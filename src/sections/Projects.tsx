import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import myselfmymoves from "@/assets/images/myselfmymoves.png";
import gocart from "@/assets/images/gocart.png";
import quickai from "@/assets/images/quickai.png";

const portfolioProjects = [
  {
    company: "TedWiz LLP",
    year: "2024",
    title: "Myself and My Moves",
    results: [
      { title: "Comprehensive UI using NextJS, MaterialUI" },
      { title: "Student Management" },
      { title: "Attendance Tracking and Payment History" },
    ],
    link: "https://myselfandmymoves.com/",
    image: myselfmymoves,
  },
  {
    company: "GoCart Inc.",
    year: "2025",
    title: "Go Cart E-commerce Platform",
    results: [
      { title: "Multi vendor e-commerce platform" },
      { title: "Product description generation using AI" },
      { title: "Imagekit integration" },
    ],
    link: "https://gocart-alpha.vercel.app/",
    image: gocart,
  },
  {
    company: "Quantum Dynamics",
    year: "2025",
    title: "QuickAI SaaS Platform",
    results: [
      { title: "AI Tools" },
      { title: "Premium features by subscription plans." },
      { title: "Serverless postgres Database in Neon" },
    ],
    link: "https://quick-ai-gamma-green.vercel.app/",
    image: quickai,
  },
];

type ProjectsSectionProps = {
  id?: string;
  // ...other props
};

export const ProjectsSection = ({ id }: ProjectsSectionProps) => {
  return (
    <section id={id} className="pb-16 py-24">
      <div className="container"></div>
      <SectionHeader
        eyebrow="Real-world results"
        title="Featured Projects"
        description="See how I transformed concepts into engaging digital experiences."
      />
      <div className="mt-10 md:mt-20 flex flex-col gap-20">
        {portfolioProjects.map((project, projectIndex) => (
          <Card
            key={project.title}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`,
            }}
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="flex">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
