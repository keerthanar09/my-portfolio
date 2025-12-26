
export default function Research() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <ul className="space-y-4">
        <li className="text-green-100">
          <strong className="text-xl text-green-300">Title: Smart Surveillance System for Public Mental Health Wellbeing.</strong> <br />
          <strong>About:</strong> Existing Smart Surveillance Systems usually are only designed for one task such as violence detection, or extract only one feature for analysis, thereby missing a lot of important context and data that could not only drastically improve the results of the application, but also provide in-depth analysis of the scene that humans alone cannot achieve. This is exactly what the Smart Surveillance System for Public Mental Wellbeing tries to achieve. This application makes use of lightweight, accurate and privacy preserving models to analyze various features detected in a surveillance footage, and provide a dashboard that updates in real time and not only reports anomalies, but also keeps track of both positive and negative states of the area, and provides an explained, in-depth analysis of the data collected. <br />
          <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/papers/SmartSurveillanceSystem.pdf"
            download
            style={{
              backgroundColor: "#008129ff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download PDF
          </a>
        </div>
        </li>
        <li className="text-green-100">
          <strong className="text-xl text-green-300">Title: Agentic AI + LLM Powered Document Retrieval System.</strong> <br />
          <strong>About:</strong> This article explores a possible solution that overcomes the issues inherent to 
          LLMs to a high degree, making use of recent technological advancements such as agentic AI and RAG, along with some
          classic, well known LLM techniques such as end-to-end evaluation, relevance assessment, knowledge graphs and more. 
          This solution makes sure that the system “understands” the document at a human-level to the 
          highest degree possible. <br />
          <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/papers/LLMresearch.pdf"
            download
            style={{
              backgroundColor: "#008129ff",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Download PDF
          </a>
        </div>
        </li>

      
        {/* Add more entries */}
      </ul>
    </main>
  );
}
