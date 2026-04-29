import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects · Sagi Dahari",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <h1 className="font-display text-4xl">Projects</h1>
    </main>
  );
}
