import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-10">
      {children}
    </main>
  );
}
