"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { tsParticles } from "@tsparticles/engine";

export function ParticleNetwork() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadSlim(tsParticles).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="!fixed inset-0 -z-10"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 60, density: { enable: true } },
          color: { value: ["#f58220", "#2a8fd5"] },
          opacity: { value: { min: 0.1, max: 0.3 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            distance: 150,
            color: "#2a8fd5",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "bounce" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.25, color: "#f58220" } },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
