import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["20%", "-20%"],
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-10%"],
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative overflow-hidden bg-muted/30"
    >
      <div className="container mx-auto px-6 py-32">
        {/* Large section number */}
        <motion.div
          className="absolute top-12 right-6 text-[15vw] font-light text-foreground/5 pointer-events-none"
          style={{ y: textY }}
        >
          01
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            viewport={{ once: true }}
            style={{ y: textY }}
          >
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              About
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mt-4 mb-12">
              Creative
              <br />
              Developer &<br />
              Designer
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer and digital creator
                focused on building scalable, user-centric web
                applications that combine performance with
                clean, modern design.
              </p>

              <p>
                I specialize in React, modern frontend systems,
                and full-stack development, creating products
                that are not just visually engaging but also
                highly functional and production-ready.
              </p>

              <p>
                My approach blends strong engineering principles
                with thoughtful design—prioritizing simplicity,
                usability, and real-world impact in every
                project I build.
              </p>
            </div>

            {/* Stats in minimalist style */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-border">
              <div>
                <div className="text-4xl font-light mb-2">
                  8+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Years
                </div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">
                  150+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-4xl font-light mb-2">
                  40+
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground">
                  Clients
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <motion.div style={{ y: imageY }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzY2NzAyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Creative workspace"
                  className="w-full h-[70vh] object-cover"
                />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-sm uppercase tracking-wider mb-1">
                Based in
              </div>
              <div className="text-2xl">Houston</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-32 max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/80">
            "Your work reflects not your skill—but your courage
            to think differently.."
          </blockquote>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Fyodor Dostoevsky
          </div>
        </motion.div>
      </div>
    </section>
  );
}