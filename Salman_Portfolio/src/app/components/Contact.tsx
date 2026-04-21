import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const socials = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Dribbble, label: "Dribbble", href: "#" },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Large background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-light text-muted/5 pointer-events-none whitespace-nowrap">
        CONTACT
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
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Get In Touch
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight mt-4 max-w-4xl">
            Let's Create
            <br />
            Something
            <br />
            Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Whether you have a project in mind, want to
                collaborate, or just want to say hello, I'd love
                to hear from you.
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail
                      size={20}
                      className="text-muted-foreground"
                    />
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:syed710salman@gmail.com"
                    className="text-xl hover:text-muted-foreground transition-colors"
                  >
                    Syed710salman@gmail.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin
                      size={20}
                      className="text-muted-foreground"
                    />
                    <span className="text-sm uppercase tracking-wider text-muted-foreground">
                      Location
                    </span>
                  </div>
                  <p className="text-xl">
                    Houston, United States of America
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
                Follow
              </p>
              <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ y: -5 }}
                      className="p-3 border border-border hover:border-foreground transition-colors"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.01, 0.05, 0.95],
            }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="text-sm uppercase tracking-wider text-muted-foreground"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-transparent border-b-2 border-border focus:border-foreground outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="text-sm uppercase tracking-wider text-muted-foreground"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-transparent border-b-2 border-border focus:border-foreground outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="text-sm uppercase tracking-wider text-muted-foreground"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={8}
                  className="w-full p-4 bg-transparent border-b-2 border-border focus:border-foreground outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors inline-flex items-center gap-3"
              >
                <span>Send Message</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Availability notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-muted-foreground">
              Currently available for work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}