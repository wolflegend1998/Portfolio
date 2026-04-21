"use client";

import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const greetingStyles = [
    {
      text: "Hi ,",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      text: "Hola ,",
      gradient: "from-yellow-400 via-red-500 to-pink-500",
    },
    {
      text: "Bonjour ,",
      gradient: "from-indigo-500 via-purple-500 to-pink-400",
    },
    {
      text: "Ciao ,",
      gradient: "from-green-400 via-emerald-500 to-teal-500",
    },
    {
      text: "Hallo ,",
      gradient: "from-orange-400 via-red-500 to-yellow-500",
    },
    {
      text: "नमस्ते ,",
      gradient: "from-pink-500 via-rose-500 to-red-500",
    },
    {
      text: "السلام عليكم,",
      gradient: "from-green-500 via-lime-500 to-emerald-400",
    },
    {
      text: "こんにちは ,",
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      text: "안녕하세요 ,",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      text: "Olá , ",
      gradient: "from-yellow-300 via-orange-400 to-red-400",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetingStyles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0],
  );

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="h-screen relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #030213 0%, #ececf0 50%, #ffffff 100%)",
            "linear-gradient(225deg, #030213 0%, #ffffff 50%, #ececf0 100%)",
            "linear-gradient(135deg, #030213 0%, #ececf0 50%, #ffffff 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="absolute inset-0 grid md:grid-cols-2">
        <motion.div
          className="overflow-hidden"
          style={{
            x: mousePosition.x * -0.5,
            y: mousePosition.y * -0.5,
          }}
        >
          <motion.div style={{ scale }} className="h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1567003762442-2078a0da1cee"
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="overflow-hidden hidden md:block"
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
        >
          <motion.div style={{ scale }} className="h-full">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1775138841745-1a2a33f33124"
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* 🎯 Main Content */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex items-center justify-center z-10 text-center px-6"
      >
        <div>
          {/* 🌍 Gradient animated greeting */}
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] md:text-[8vw] font-bold leading-none tracking-tight"
            style={{
              x: mousePosition.x * 0.2,
              y: mousePosition.y * 0.2,
            }}
          >
            <span
              className={`bg-gradient-to-r ${greetingStyles[index].gradient} bg-clip-text text-transparent animate-gradient`}
            >
              {greetingStyles[index].text}
            </span>
            <span className="text-foreground">
              This is Salman
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-xl md:text-2xl text-muted-foreground"
          >
            Software Engineer building AI-powered SaaS products
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary text-primary-foreground"
            >
              Explore Work
            </button>

            <button className="px-8 py-4 border border-primary">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
}