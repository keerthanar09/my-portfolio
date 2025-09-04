
export default function Research() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul className="space-y-4">
        <li className="text-blue-100">
          <strong className="text-xl text-blue-300">Title: Agentic AI + LLM Powered Document Retrieval System.</strong> <br />
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
              backgroundColor: "#0070f3",
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

        <li className="text-blue-100">
          <strong className="text-xl text-blue-300">Title: AI Powered Public Mental Health Tracker.</strong> <br />
          <strong>About:</strong> AI Driven Public Mental Health Tracker aims to create a preventative 
          solution for a group of people, rather than focusing on an individual. With the help of 
          emerging Machine Learning technologies, this project aims to detect and accurately analyse 
          the aggregated mental health of the public, and provide the possible cause of this mental 
          state. This article provides an explorative literature survey on past, related technologies. <br />
          <div style={{ textAlign: "center", marginTop: "40px" }}>
          <a
            href="/papers/Major-project-report-body-1.pdf"
            download
            style={{
              backgroundColor: "#0070f3",
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
