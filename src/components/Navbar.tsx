"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
          : "border-b border-transparent bg-black/30 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-10">
        <Link
          href="/"
          className="relative text-lg font-black tracking-[0.25em] text-white transition duration-300 hover:text-cyan-300"
          onClick={() => setOpen(false)}
        >
          NENUX
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm text-zinc-300 transition duration-300 hover:text-white"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)]"
          >
            Start a Project
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10 md:hidden"
        >
          <span
            className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-center text-sm text-zinc-200 transition-all duration-300 hover:bg-white/5 hover:text-white ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={`mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{
              transitionDelay: open ? `${links.length * 60}ms` : "0ms",
            }}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}