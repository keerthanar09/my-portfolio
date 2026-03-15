"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import FloatingSpotifyPlayer from "./spotifyPlayer";

const sections = [
  {
    id: "name",
    content: (
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent mb-4">
          Keerthana R
        </h1>
        <p className="text-green-400/70 text-lg tracking-widest uppercase">
          Computer Science Undergrad
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-green-400 to-transparent animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    id: "role",
    content: (
      <div className="text-center max-w-2xl">
        <p className="text-4xl md:text-5xl font-light text-white/90 leading-tight">
          Aspiring{" "}
          <span className="text-green-400 font-semibold">Software Engineer</span>
        </p>
        <p className="mt-4 text-2xl text-white/60">
          & Emerging Tech Enthusiast
        </p>
      </div>
    ),
  },
  {
    id: "student",
    content: (
      <div className="text-center max-w-2xl">
        <p className="text-4xl md:text-5xl font-light text-white/90 leading-tight">
          Computer Science{" "}
          <span className="text-emerald-400 font-semibold">Student</span>
        </p>
        <p className="mt-6 text-lg text-white/50 leading-relaxed">
          Passionate about building things that matter
        </p>
        <p className="mt-3 text-xs text-white/50 leading-relaxed">
          (And building things purely for fun, sometimes!!)
        </p>
      </div>
    ),
  },
  {
    id: "love",
    content: (
      <div className="text-center max-w-xl">
        <p className="text-5xl md:text-6xl font-bold text-white/90">
          I{" "}
          <span className="text-green-400">LOVE</span>{" "}
          programming.
        </p>
        <p className="mt-4 text-white/50 text-xl">
          Like, genuinely, deeply, obsessively.
        </p>
      </div>
    ),
  },
  {
    id: "resume",
    content: null, 
  },
];

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "rect" | "star";
  opacity: number;
}

function SparkleButton({ onDownload }: { onDownload: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    // button rect inside the canvas
    const bx = 40, by = 30, bw = W - 80, bh = H - 60;
    const br = 14; // border radius

    interface Spark {
      t: number;       // 0–1 position along perimeter
      speed: number;
      size: number;
      color: string;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    }

    const colors = ["#4ade80", "#86efac", "#ffffff", "#d1fae5", "#67e8f9", "#a7f3d0"];
    const sparks: Spark[] = Array.from({ length: 28 }, () => ({
      t: Math.random(),
      speed: 0.0008 + Math.random() * 0.0012,
      size: 1.5 + Math.random() * 2.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.4 + Math.random() * 0.6,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.04 + Math.random() * 0.06,
    }));

    function perimeterPoint(t: number): [number, number] {
      const straight = 2 * (bw - 2 * br) + 2 * (bh - 2 * br);
      const corners = 2 * Math.PI * br;
      const total = straight + corners;
      let d = t * total;

      const segs = [
        { len: bw - 2 * br, fn: (s: number): [number, number] => [bx + br + s, by] },
        { len: (Math.PI / 2) * br, fn: (s: number): [number, number] => [bx + bw - br + Math.sin(s / br) * br, by + br - Math.cos(s / br) * br] },
        { len: bh - 2 * br, fn: (s: number): [number, number] => [bx + bw, by + br + s] },
        { len: (Math.PI / 2) * br, fn: (s: number): [number, number] => [bx + bw - br + Math.cos(s / br) * br, by + bh - br + Math.sin(s / br) * br] },
        { len: bw - 2 * br, fn: (s: number): [number, number] => [bx + bw - br - s, by + bh] },
        { len: (Math.PI / 2) * br, fn: (s: number): [number, number] => [bx + br - Math.sin(s / br) * br, by + bh - br + Math.cos(s / br) * br] },
        { len: bh - 2 * br, fn: (s: number): [number, number] => [bx, by + bh - br - s] },
        { len: (Math.PI / 2) * br, fn: (s: number): [number, number] => [bx + br - Math.cos(s / br) * br, by + br - Math.sin(s / br) * br] },
      ];

      for (const seg of segs) {
        if (d <= seg.len) return seg.fn(d);
        d -= seg.len;
      }
      return [bx + br, by];
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // draw button background
      ctx.beginPath();
      ctx.moveTo(bx + br, by);
      ctx.lineTo(bx + bw - br, by);
      ctx.arcTo(bx + bw, by, bx + bw, by + br, br);
      ctx.lineTo(bx + bw, by + bh - br);
      ctx.arcTo(bx + bw, by + bh, bx + bw - br, by + bh, br);
      ctx.lineTo(bx + br, by + bh);
      ctx.arcTo(bx, by + bh, bx, by + bh - br, br);
      ctx.lineTo(bx, by + br);
      ctx.arcTo(bx, by, bx + br, by, br);
      ctx.closePath();
      ctx.fillStyle = "rgba(5, 15, 10, 0)";
      ctx.fill();
      ctx.strokeStyle = "rgba(74, 222, 128, 0)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // draw sparks
      sparks.forEach((sp) => {
        sp.t = (sp.t + sp.speed) % 1;
        sp.pulse += sp.pulseSpeed;
        const [x, y] = perimeterPoint(sp.t);
        const pulsedSize = sp.size * (0.7 + 0.3 * Math.sin(sp.pulse));
        const pulsedAlpha = sp.alpha * (0.6 + 0.4 * Math.sin(sp.pulse));

        // glow
        const grd = ctx.createRadialGradient(x, y, 0, x, y, pulsedSize * 4);
        grd.addColorStop(0, sp.color + "cc");
        grd.addColorStop(1, sp.color + "00");
        ctx.beginPath();
        ctx.arc(x, y, pulsedSize * 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.globalAlpha = pulsedAlpha * 0.5;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(x, y, pulsedSize, 0, Math.PI * 2);
        ctx.fillStyle = sp.color;
        ctx.globalAlpha = pulsedAlpha;
        ctx.fill();

        ctx.globalAlpha = 1;
      });

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: 280, height: 90 }}>
      <canvas
        ref={canvasRef}
        width={280}
        height={90}
        className="absolute inset-0 pointer-events-none"
      />
      <a
        href="/resume.pdf"
        download
        onClick={onDownload}
        className="relative z-10 text-white font-semibold text-base tracking-wide"
        style={{ letterSpacing: "0.05em" }}
      >
        Download My Resume
      </a>
    </div>
  );
}

function ConfettiCanvas({ trigger }: { trigger: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animRef = useRef<number>(0);

  const colors = ["#22c55e", "#4ade80", "#86efac", "#38bdf8", "#facc15", "#f472b6", "#a78bfa"];

  const spawnParticles = useCallback((cx: number, cy: number) => {
    const newParticles: Particle[] = Array.from({ length: 80 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 8;
      return {
        id: Date.now() + i,
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 4 + Math.random() * 8,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: (["circle", "rect", "star"] as const)[Math.floor(Math.random() * 3)],
        opacity: 1,
      };
    });
    particles.current = newParticles;
  }, [colors]);

  useEffect(() => {
    if (!trigger) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    spawnParticles(rect.width / 2, rect.height / 2);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          vy: p.vy + 0.3,
          rotation: p.rotation + p.rotationSpeed,
          opacity: p.opacity - 0.015,
        }))
        .filter((p) => p.opacity > 0);

      particles.current.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          // star
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
            const r = i % 2 === 0 ? p.size / 2 : p.size / 4;
            ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
          }
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      });

      if (particles.current.length > 0) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [trigger, spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={300}
      className="pointer-events-none absolute inset-0 w-full h-full"
    />
  );
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [confetti, setConfetti] = useState(false);

  // Use IntersectionObserver so the active index is always the section
  // that is actually snapped into view — no scroll-math rounding errors.
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { root: containerRef.current, threshold: 0.6 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleDownload = () => {
    setConfetti(false);
    setTimeout(() => setConfetti(true), 10);
  };

  return (
    <div
      ref={containerRef}
      className="h-[calc(100vh-57px)] overflow-y-scroll scroll-smooth"
      style={{ scrollSnapType: "y mandatory" }}
    >
      {sections.map((section, i) => {
        const distance = Math.abs(i - activeIndex);
        const blur = distance === 0 ? 0 : Math.min(distance * 6, 18);
        const opacity = distance === 0 ? 1 : Math.max(0.15, 1 - distance * 0.4);
        const scale = distance === 0 ? 1 : Math.max(0.88, 1 - distance * 0.05);

        return (
          <div
            key={section.id}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="h-[calc(100vh-57px)] flex items-center justify-center"
            style={{ scrollSnapAlign: "start" }}
          >
            <div
              style={{
                filter: `blur(${blur}px)`,
                opacity,
                transform: `scale(${scale})`,
                transition: "filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {section.id === "resume" ? (
                <div className="text-center flex flex-col items-center gap-8">
                  <p className="text-3xl text-white/80 font-light">
                    Want to know more?
                  </p>
                  <div className="relative flex items-center justify-center" style={{ width: 400, height: 300 }}>
                    <ConfettiCanvas trigger={confetti} />
                    <SparkleButton onDownload={handleDownload} />
                  </div>
                  <p className="text-white/30 text-sm">Keerthana R · Portfolio</p>
                </div>
              ) : (
                section.content
              )}
            </div>
          </div>
        );
      })}

      {/* scroll progress indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => {
              sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "h-6 bg-green-400" : "h-2 bg-white/30"
            }`}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      <FloatingSpotifyPlayer
        url="https://open.spotify.com/track/3KOSyr9WSD2x4l77k8k7Bo"
        songName=""
      />
    </div>
  );
}
