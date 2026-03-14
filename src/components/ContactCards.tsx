import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "chamithu.peiris@outlook.com",
    href: "mailto:chamithu.peiris@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0427 362 777",
    href: "tel:0427362777",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, Australia",
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@Chamithu-Peiris",
    href: "https://www.linkedin.com/in/chamithu-peiris/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@nenux808",
    href: "https://github.com/nenux808",
  },
];

export default function ContactCards() {
  return (
    <section className="grid gap-4">
      {items.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <div className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 transition duration-300 group-hover:scale-110">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  {label}
                </p>
                <p className="mt-2 break-words text-sm leading-6 text-zinc-200">
                  {value}
                </p>
              </div>

              {href ? (
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition duration-300 group-hover:text-cyan-300" />
              ) : null}
            </div>
          </div>
        );

        if (href) {
          return (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="block"
            >
              {content}
            </a>
          );
        }

        return <div key={label}>{content}</div>;
      })}
    </section>
  );
}