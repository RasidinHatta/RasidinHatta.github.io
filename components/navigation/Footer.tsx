"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiShadcnui } from "react-icons/si";
import { navItems } from "@/data/navigation";
import ReactBit from "../logos/ReactBit";
import Motion from "../logos/Motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub className="h-5 w-5" />,
      href: "https://github.com/RasidinHatta",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/rasidin-hatta",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope className="h-5 w-5" />,
      href: "mailto:rasidinhatta8@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="w-full border-t border-border/40 bg-background/20 backdrop-blur-md pt-12 pb-24 md:pb-32 z-10 relative md:pl-[60px]"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Rasidin Hatta
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Crafting immersive digital experiences with modern web
              technologies. Specializing in 3D web development, full-stack
              engineering, and network security.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 p-2 rounded-full hover:bg-accent border border-transparent hover:border-border"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Rasidin Hatta. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground/80">Built with:</span>
            <div className="flex items-center gap-4">
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                title="Next.js 16"
              >
                <SiNextdotjs className="h-5 w-5" />
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="Tailwind CSS"
              >
                <SiTailwindcss className="h-5 w-5" />
              </a>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
                title="shadcn/ui"
              >
                <SiShadcnui className="h-5 w-5" />
              </a>
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFF312] transition-colors"
                title="Framer Motion"
              >
                <Motion className="h-5 w-5" />
              </a>
              <a
                href="https://reactbits.dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-500 transition-colors"
                title="React Bits"
              >
                <ReactBit className="h-5 w-5" />
              </a>
              <a
                href="https://animejs.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold hover:text-primary transition-colors"
                title="Anime.js"
              >
                Anime.js
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
