// src/app/research/page.tsx

export default function Research() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Research Work</h1>
      <ul className="space-y-4">
        <li>
          <strong>Title:</strong> Your Research Paper Title<br />
          <strong>Published in:</strong> Conference Name / Journal<br />
          <a href="https://link-to-paper.com" className="text-blue-500 underline">View Paper</a>
        </li>
        {/* Add more entries */}
      </ul>
    </main>
  );
}
