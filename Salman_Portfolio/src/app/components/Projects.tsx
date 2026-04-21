import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRef } from 'react';

const projects = [
  {
    title: "Zen Commerce",
    category: "E-commerce Platform",
    description: "A minimalist e-commerce platform built with modern web technologies, focusing on user experience and performance.",
    image: "https://images.unsplash.com/photo-1747727350761-a607eae63dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzc2NzA1Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    size: "large"
  },
  {
    title: "MindFlow",
    category: "Mobile Application",
    description: "A meditation and mindfulness app with beautiful animations.",
    image: "https://images.unsplash.com/photo-1643888395130-4cb09f9814d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9ufGVufDF8fHx8MTc3NjcwNTI5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    size: "medium"
  },
  {
    title: "Studio Portfolio",
    category: "Creative Portfolio",
    description: "A creative portfolio website featuring smooth animations.",
    image: "https://images.unsplash.com/photo-1752658918430-e3ff8a92c4e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1pbmltYWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzY3MDUyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    size: "medium"
  },
  {
    title: "Editorial Platform",
    category: "Content Management",
    description: "Modern editorial design with advanced typography systems.",
    image: "https://images.unsplash.com/photo-1752650735608-6895f65de119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBkZXNpZ24lMjBsYXlvdXR8ZW58MXx8fHwxNzc2NjY5ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2025",
    size: "large"
  },
  {
    title: "Urban Spaces",
    category: "Architecture",
    description: "Interactive architectural visualization platform.",
    image: "https://images.unsplash.com/photo-1759998084337-dee6ca953a50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnV0YWxpc3QlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWx8ZW58MXx8fHwxNzc2NzA1MjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    year: "2024",
    size: "medium"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Large background text */}
      <motion.div 
        className="absolute top-20 left-1/2 -translate-x-1/2 text-[20vw] font-light text-muted/10 pointer-events-none whitespace-nowrap"
        style={{
          x: useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
        }}
      >
        PROJECTS
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with artistic layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Selected Work</span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mt-4">
              Projects
            </h2>
          </div>
          
          <div className="max-w-md">
            <p className="text-muted-foreground">
              A curated selection of digital experiences crafted with attention 
              to detail and artistic vision.
            </p>
          </div>
        </motion.div>

        {/* Artistic masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          {projects.map((project, index) => {
            const isLarge = project.size === 'large';
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4';
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`group cursor-pointer ${colSpan}`}
              >
                <div className="relative overflow-hidden bg-muted">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover ${
                        isLarge ? 'h-[60vh]' : 'h-[50vh]'
                      }`}
                    />
                  </motion.div>
                  
                  {/* Overlay with info */}
                  <motion.div 
                    className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl text-white mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-4 max-w-lg">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2 text-white">
                        <span className="text-sm">View Project</span>
                        <ExternalLink size={16} />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Year badge */}
                  <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 text-sm">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Archive link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.button
            whileHover={{ x: 10 }}
            className="text-lg uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-4"
          >
            View Archive
            <span className="text-2xl">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}