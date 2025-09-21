import Image from "next/image";
import FloatingSpotifyPlayer from "../components/spotifyPlayer";
import TypingAnimation from "../components/TypingAnimation";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="m-5 mb-20 flex flex-row items-center space-x-10">
        <div>
          <Image
            className="outline-5 outline-white outline-offset-10 rounded-full inset-shadow-sm inset-shadow-black"
            src="/profile.jpeg"
            alt="Profile"
            width={300}
            height={300}
          />
        </div>
        <div
          style={{
            width: 350,
            minHeight: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypingAnimation />
        </div>
      </div>

      <p className="text-lg text-gray-600 mb-6 text-center">
        Aspiring Software Engineer | Emerging Tech Enthusiast | CSE Student
      </p>
      <div className="space-x-4">
        <a
          href="/resume.pdf"
          download
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Download My Resume
        </a>
      </div>
      <div className = "mt-4 text-gray-400">Keerthana R</div>

      {/* Floating music player */}
      <FloatingSpotifyPlayer
        url="https://open.spotify.com/track/3KOSyr9WSD2x4l77k8k7Bo"
        songName=""
      />
    </main>
  );
}
