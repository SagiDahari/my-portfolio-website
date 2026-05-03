import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            Sagi Dahari
          </h1>
          <p className="font-mono text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Backend developer — APIs, databases, secure systems.
          </p>
        </div>
        <nav
          aria-label="Primary"
          className="mt-10 lg:mt-14 flex flex-wrap items-center justify-center gap-3 text-lg"
        >
          <Link
            href="/projects"
            className="font-display rounded-full bg-foreground px-7 py-2.5 text-background transition-colors hover:bg-foreground/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="font-display rounded-full border border-foreground/15 px-6 py-2.5 transition-colors hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Read about me
          </Link>
          <a
            href="mailto:sagidahari7@gmail.com"
            className="font-display rounded-full border border-foreground/15 px-6 py-2.5 transition-colors hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </main>
  );
}
