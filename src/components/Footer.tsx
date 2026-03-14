import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "mailto:chamithu.peiris@outlook.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/nenux808",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/chamithu-peiris/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-10">
        <div className="grid gap-10 text-center md:grid-cols-[1.2fr_0.8fr_0.9fr] md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="inline-block text-lg font-black tracking-[0.25em] text-white"
            >
              NENUX
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
              Cyber security, network engineering, and premium web systems with
              a focus on clean execution, performance, and real-world value.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Navigation
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Connect
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-3 text-sm text-zinc-400 transition hover:text-white"
                >
                  <Icon className="h-4 w-4 text-cyan-300" />
                  <span>{label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-xs text-zinc-500 md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Nenux. All rights reserved.</p>
          <p>Built by Chamithu Nenuka in Melbourne, Australia.</p>
        </div>
      </div>
    </footer>
  );
}
