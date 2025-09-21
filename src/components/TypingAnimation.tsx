"use client";

import { useEffect, useMemo, useState } from "react";

export default function TypingAnimation() {
  const words = useMemo(
    () => [
      "I'm Keerthana R",
      "I LOVEEE Programming! ",
      "I'm an aspiring Software Engineer and a computer science student!!!",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // Blinking cursor
  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <h1
      className="text-2xl md:text-4xl font-mono space-x-2 text-center  
                 bg-gradient-to-r from-blue-400 via-blue-100 to-blue-800
                 bg-clip-text text-transparent"
    >
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h1>
  );
}
