import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        background: { color: "transparent" },
        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color: { value: ["#ff0080", "#00f0ff", "#ffcd00"] },
          shape: { type: ["circle", "triangle", "star"] },
          opacity: { value: 0.6 },
          size: { value: { min: 2, max: 6 } },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticleBackground;
