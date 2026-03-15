"use client";

import { useState } from "react";

const skillData = {
  proficient: [
    { name: "Python", icon: "🐍" },
    { name: "TailwindCSS", icon: "~" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "SQL", icon: "🗄️" },
    { name: "Git", icon: "🌿" },
    { name: "HTML / CSS", icon: "🎨" },
    { name: "REST APIs", icon: "🔗" }
  ],
  intermediate: [
    { name: "Node.js", icon: "🟢" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Computer Vision", icon: "👁️" },
    { name: "Machine Learning", icon: "🤖" },
    
    { name: "ChromaDB", icon: "📈" },
    { name: "Docker", icon: "🐳" },
    { name: "Firebase", icon: "🔥" },
  ],
  learning: [
    { name: "TypeScript", icon: "🔷" },
    { name: "Kubernetes", icon: "☸️" },
    { name: "R Programming", icon: "📊" },
    { name: "Flutter", icon: "🐥" },
    { name: "RAG", icon: "" },
  ],
};

const categories = [
  {
    key: "proficient" as const,
    label: "Proficient",
    subtitle: "",
    accent: "#4ade80",
    ring: "rgba(74,222,128,0.25)",
    glow: "rgba(74,222,128,0.08)",
    bar: "from-green-500 to-emerald-400",
    dot: "bg-green-400",
  },
  {
    key: "intermediate" as const,
    label: "Intermediate",
    subtitle: "",
    accent: "#67e8f9",
    ring: "rgba(103,232,249,0.25)",
    glow: "rgba(103,232,249,0.08)",
    bar: "from-cyan-500 to-teal-400",
    dot: "bg-cyan-400",
  },
  {
    key: "learning" as const,
    label: "Still Learning",
    subtitle: "",
    accent: "#a5b4fc",
    ring: "rgba(165,180,252,0.25)",
    glow: "rgba(165,180,252,0.08)",
    bar: "from-indigo-400 to-violet-400",
    dot: "bg-indigo-400",
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-bold text-white mb-3">Skills</h1>
      </div>

      <div className="flex flex-col gap-16">
        {categories.map((cat) => (
          <section key={cat.key}>
            <div className="flex items-center gap-4 mb-6">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: cat.accent, boxShadow: `0 0 8px ${cat.accent}` }}
              />
              <div>
                <h2 className="text-xl font-semibold text-white leading-none">{cat.label}</h2>
                <p className="text-xs mt-1" style={{ color: cat.accent + "99" }}>{cat.subtitle}</p>
              </div>
              <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(to right, ${cat.ring}, transparent)` }} />
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-3">
              {skillData[cat.key].map((skill) => {
                const id = `${cat.key}-${skill.name}`;
                const isHovered = hovered === id;
                return (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHovered(id)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative cursor-default select-none transition-transform duration-200"
                    style={{ transform: isHovered ? "translateY(-4px)" : "translateY(0)" }}
                  >
                    {/* glow layer */}
                    <div
                      className="absolute inset-0 rounded-xl transition-opacity duration-200"
                      style={{
                        background: cat.glow,
                        boxShadow: isHovered ? `0 0 18px 4px ${cat.accent}44` : "none",
                        borderRadius: 12,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />
                    {/* chip */}
                    <div
                      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 border transition-colors duration-200"
                      style={{
                        background: isHovered ? `rgba(5,15,10,0.85)` : "rgba(255,255,255,0.04)",
                        borderColor: isHovered ? cat.accent + "88" : "rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="text-base leading-none">{skill.icon}</span>
                      <span style={{ color: isHovered ? cat.accent : undefined }}>{skill.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress bar decoration */}
            <div className="mt-5 h-px w-full rounded-full overflow-hidden bg-white/5">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${cat.bar}`}
                style={{
                  width:
                    cat.key === "proficient" ? "85%" :
                    cat.key === "intermediate" ? "60%" : "30%",
                  opacity: 0.5,
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
