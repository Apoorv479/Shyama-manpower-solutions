import { useEffect, useRef, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";

const AUTO_MS = 3000; // 3 seconds
const TRANSITION_CLASS = "transition-opacity duration-[1000ms] ease-in-out";

const slides = [
  {
    image: hero1,
    headline: "Trusted Security, Reliable Protection",
    message: "Comprehensive security guard and surveillance services tailored to your needs.",
  },
  {
    image: hero2,
    headline: "Delivering Excellence in Security & Manpower Solutions",
    message: "Expert personnel and robust solutions for corporate, industrial, and residential sectors.",
  },
  {
    image: hero3,
    headline: "Empowering Safety Through Technology and Training",
    message: "Integrating cutting-edge technology with highly-trained security professionals for maximum safety.",
  },
  {
    image: hero4,
    headline: "24/7 Vigilance, 100% Commitment",
    message: "Around-the-clock monitoring and dedicated service to safeguard your assets and people.",
  },
  {
    image: hero5,
    headline: "Your Safety, Our Priority — Always",
    message: "A commitment to peace of mind through proactive and dependable security measures.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero"
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${TRANSITION_CLASS} ${i === index ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.image}
              alt={s.headline}
              className="h-full w-full object-cover"
            />
            {/* Gradient overlay for readability and brand consistency */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0b3d64]/80 to-[#1a9bb9]/60" />
          </div>
        ))}
      </div>

      {/* Centered headline and message */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            {slides[index].headline}
          </h1>
          {/* New message element */}
          <p className="mt-4 text-white text-xl md:text-2xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] px-4">
            {slides[index].message}
          </p>
        </div>
      </div>

      {/* Subtle top blend into navbar gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-linear-to-b from-[#d4f1f8]/30 via-transparent to-transparent" />
    </section>
  );
};

export default Hero;