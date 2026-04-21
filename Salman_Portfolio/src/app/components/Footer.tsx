import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-24">
        {/* Large footer branding */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-light leading-none mb-8">
            Creative
            <br />
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Crafting digital experiences with precision and
            artistic vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Navigate
            </h4>
            <ul className="space-y-4">
              {["About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 10 }}
                      className="text-lg hover:text-muted-foreground transition-colors inline-block"
                    >
                      {item}
                    </motion.a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Web Design & Development</li>
              <li>Mobile App Design</li>
              <li>Brand Identity</li>
              <li>Creative Direction</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a
                  href="mailto:syed710salman@gmail.com"
                  className="hover:text-foreground transition-colors"
                >
                  syed710salman@gmail.com
                </a>
              </li>
              <li>Houston , U.s.a</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Creative Portfolio. Designed &
            developed with passion.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors"
          >
            Back to Top
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}