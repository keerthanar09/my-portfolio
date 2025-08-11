import Head from "next/head";
import { FC } from "react";

const ResearchPaper: FC = () => (
    <>
        <Head>
            <title>My Research Paper</title>
            <meta
                name="description"
                content="Research paper on AI-powered Public Mental Health Tracking" />
        </Head>

        <main
            style={{
                maxWidth: "800px",
                margin: "auto",
                padding: "20px",
                fontFamily: "serif",
                lineHeight: "1.6",
            }}
        >
            {/* Title */}
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}
            >
                AI Powered Public Mental Health Tracking
            </h1>
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
                Author: Your Name | Affiliation: Your University
            </p>

            {/* Abstract */}
            <section>
                <h2>Abstract</h2>
                <p>
                    Your abstract here... Brief summary of your research, goals, and key
                    findings.
                </p>
            </section>

            {/* Introduction */}
            <section>
                <h2>1. Introduction</h2>
                <p>Your introduction here...</p>
            </section>

            {/* Literature Review */}
            <section>
                <h2>2. Literature Review</h2>
                <p>Discuss relevant papers and prior work...</p>
            </section>

            {/* Methodology */}
            <section>
                <h2>3. Methodology</h2>
                <p>Explain your approach, tools, datasets...</p>
            </section>

            {/* Results */}
            <section>
                <h2>4. Results</h2>
                <p>Your results here...</p>
            </section>

            {/* Conclusion */}
            <section>
                <h2>5. Conclusion</h2>
                <p>Wrap up your paper with final thoughts...</p>
            </section>

            {/* References */}
            <section>
                <h2>References</h2>
                <ol>
                    <li>Author1, Author2. &quot;Paper Title.&quot; Journal, Year.</li>
                    <li>Author3, Author4. &quot;Another Paper.&quot; Conference, Year.</li>
                </ol>
            </section>

            {/* Download PDF Link */}
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <a
                    href="/papers/my-research-paper.pdf"
                    download
                    style={{
                        backgroundColor: "#0070f3",
                        color: "#fff",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        textDecoration: "none",
                    }}
                >
                    📄 Download PDF
                </a>
            </div>
        </main>
    </>
);

export default ResearchPaper;
