"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FloatingSpotifyPlayerProps {
  url: string;
  songName: string;
}

const FloatingSpotifyPlayer: React.FC<FloatingSpotifyPlayerProps> = ({ url, songName }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Convert regular Spotify URL to embed URL
  const embedUrl = url
    .replace("https://open.spotify.com/", "https://open.spotify.com/embed/")
    .split("?")[0];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "rgba(0, 0, 0, 0.19)",
        padding: "8px 12px",
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        cursor: "pointer",
        zIndex: 1000,
      }}
      onClick={() => setShowPlayer(!showPlayer)}
    >
      <Image
        src="/music-icon.png"
        alt="Music"
        width={30}
        height={30}
      />
      <span className="font-medium">{songName}</span>
      {showPlayer && (
        <iframe
          src={embedUrl}
          width="300"
          height="80"
          allow="autoplay; encrypted-media"
          allowTransparency
          title="Spotify Player"
          style={{ border: "none", marginLeft: "8px" }}
        ></iframe>
      )}
    </div>
  );
};

export default FloatingSpotifyPlayer;
