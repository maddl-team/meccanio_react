"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";
import styles from "./home.module.css";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    video.muted = true;
    const playback = video.play();
    if (playback) {
      playback.catch(() => undefined);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={styles.heroVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={site.heroVideo} type="video/mp4" />
    </video>
  );
}
