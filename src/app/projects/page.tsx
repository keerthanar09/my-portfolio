// src/app/projects/page.tsx

const projects = [
  { name: "Rubik's Cube Solver", link: "https://github.com/yourusername/rubik-solver" },
  { name: "Algorithm Visualizer", link: "https://github.com/yourusername/algovis" },
];

export default function Projects() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.name}>
            <a href={p.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
