import { motion } from 'motion/react';
import { useRef } from 'react';

const skills = [
  { name: "Design", items: ["UI/UX", "Visual Design", "Prototyping", "Branding"] },
  { name: "Development", items: ["React", "TypeScript", "Next.js", "Node.js"] },
  { name: "Tools", items: ["Figma", "Adobe CC", "WebGL", "Three.js"] },
  { name: "Approach", items: ["User Research", "Accessibility", "Performance", "SEO"] }
];

const expertise = [
  { area: "Interface Design", level: 95 },
  { area: "Frontend Development", level: 90 },
  { area: "Motion Design", level: 85 },
  { area: "Creative Direction", level: 80 }
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="skills" className="py-32 bg-background relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-light text-muted/5 pointer-events-none whitespace-nowrap">
        EXPERTISE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Capabilities</span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mt-4">
            Skills &<br />
            Expertise
          </h2>
        </motion.div>

        {/* Skills grid - artistic layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {skills.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: [0.6, 0.01, 0.05, 0.95]
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl mb-8 pb-4 border-b border-border">
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: idx * 0.1 + i * 0.05
                    }}
                    viewport={{ once: true }}
                    className="text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Expertise levels - minimal artistic style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-12">
            {expertise.map((item, idx) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="text-xl">{item.area}</h4>
                  <span className="text-3xl font-light text-muted-foreground">
                    {item.level}%
                  </span>
                </div>
                
                {/* Minimal progress bar */}
                <div className="relative h-px bg-border overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: item.level / 100 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: idx * 0.1 + 0.3,
                      ease: [0.6, 0.01, 0.05, 0.95]
                    }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-primary origin-left"
                    style={{ height: '2px', top: '-0.5px' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services list */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 pt-24 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                What I Do
              </h3>
              <ul className="space-y-6 text-xl">
                <motion.li
                  whileHover={{ x: 10 }}
                  className="cursor-default transition-colors hover:text-muted-foreground"
                >
                  Web Design & Development
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  className="cursor-default transition-colors hover:text-muted-foreground"
                >
                  Mobile App Design
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  className="cursor-default transition-colors hover:text-muted-foreground"
                >
                  Brand Identity
                </motion.li>
                <motion.li
                  whileHover={{ x: 10 }}
                  className="cursor-default transition-colors hover:text-muted-foreground"
                >
                  Creative Direction
                </motion.li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8">
                How I Work
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in a collaborative, iterative approach. Each project 
                begins with understanding your vision and goals, followed by 
                research, prototyping, and refinement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The result is a thoughtful, user-centered solution that not only 
                looks beautiful but performs exceptionally.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}