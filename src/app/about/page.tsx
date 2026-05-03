import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · Sagi Dahari",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <h1 className="font-display text-4xl">About</h1>
    </main>
  );
}
