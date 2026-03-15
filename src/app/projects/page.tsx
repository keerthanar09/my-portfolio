"use client";

import { useState } from "react";

interface Project {
  title: string;
  tagline: string;
  tags: string[];
  github?: string;
  live?: string;
  about: string;
}

const projects: Project[] = [
  {
    title: "Smart Surveillance System",
    tagline: "AI-powered public mental health monitoring surveillance",
    tags: ["Computer Vision", "AI/ML", "Real-time"],
    github: "https://github.com/keerthanar09/smart-surveillance-ndf",
    about:
      "Existing Smart Surveillance Systems are usually designed for one task such as violence detection, or extract only one feature for analysis, missing a lot of important context. This system uses lightweight, accurate and privacy-preserving models to analyze various features in surveillance footage, providing a real-time dashboard that not only reports anomalies but also tracks positive and negative states of the area, with an explained, in-depth analysis of the collected data.",
  },
  {
    title: "Teacher Assistant Application",
    tagline: "AI assistant to reduce teacher workload and enable personalization",
    tags: ["Next.js", "AI", "Google Solution Challenge 2025"],
    github: "https://github.com/keerthanar09/teacher-assistant-1",
    live: "https://teacher-assistant-1.vercel.app/",
    about:
      "Created for the problem statement 'Overburdened Teachers and the Need for Personalized Feedback' at Google Solution Challenge 2025. Still in active development. The main goal is to build an application that assists teachers with mundane, repetitive tasks — leaving them with extra time to interact with students personally and provide meaningful, individualized feedback.",
  },
  {
    title: "Algorithm Visualizer",
    tagline: "Interactive SVG-based visualizations for complex algorithms",
    tags: ["React", "Visualization", "Education", "SVGs", "Django"],
    github: "https://github.com/keerthanar09/algovizXX/",
    live: "https://algoviz-xx.vercel.app/",
    about:
      "The Algorithm Visualizer Application provides interactive, step-by-step visualizations for complex algorithms to help developers at all stages understand how they work. The deployed link takes you to the MVP of the application, which already covers a solid range of sorting and graph algorithms with clean, animated visuals.",
  },
  {
    title: "PensieveAI - A Context Preservation Engine",
    tagline: "RAG-based Context Aware Onboarding Assistant",
    tags: ["Dev-Onboarding", "RAG", "ChromaDB", "Astrava Hackathon"],
    github: "https://github.com/Nithya07shree/ContextPreservationEngine",
    about:
      "PensieveAI is a privacy-preserving RAG application that synthesizes context from code, Slack, and Jira to help developers understand legacy systems in hours instead of weeks. It helps developers understand legacy codebases by providing semantic access to historical context and decision-making behind implementations.",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10">Projects</h1>
      {/* <p className="text-white/40 mb-10 text-sm tracking-wide">Click a card to learn more</p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <button
            key={p.title}
            onClick={() => setSelected(p)}
            className="text-left rounded-2xl p-6 border border-white/10
                       bg-white/5 backdrop-blur-md
                       hover:bg-white/10 hover:border-green-500/50
                       hover:shadow-lg hover:shadow-green-900/30
                       transition-all duration-200 hover:-translate-y-1
                       group cursor-pointer"
          >
            <h2 className="text-lg font-semibold text-white group-hover:text-green-300 transition-colors mb-2">
              {p.title}
            </h2>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">{p.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-green-900/40 text-green-300 border border-green-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative rounded-2xl border border-white/10 bg-[#0a1a12]/90 backdrop-blur-xl p-8 shadow-2xl"
            style={{ width: "100%", maxWidth: 640, minHeight: 420 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white text-2xl leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-white mb-1">{selected.title}</h2>
            <p className="text-green-400/70 text-sm mb-4">{selected.tagline}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-green-900/40 text-green-300 border border-green-700/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/70 leading-relaxed text-sm mb-8">{selected.about}</p>

            <div className="flex gap-4">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors border border-white/10"
                >
                  GitHub →
                </a>
              )}
              {selected.live && (
                <a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-lg bg-green-700 hover:bg-green-600 text-white text-sm transition-colors"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
