import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function HeroSection() {
  const { bento } = profile;

  return (
    <section id="home" className="relative overflow-hidden bg-zinc-950 py-16 lg:py-24">
      {/* Decorative premium glows */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <Container className="relative z-10">
        {/* Intro Section */}
        <div className="flex flex-col items-start text-left max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.status}
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
            {profile.headline}
          </h1>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="flex items-center gap-2">
                View Projects <span>↓</span>
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">
                Get in touch
              </Button>
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Professional Summary */}
          <Card className="lg:col-span-2 md:col-span-2 flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white tracking-wide">Professional Summary</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {profile.description}
              </p>
            </div>
          </Card>

          {/* Card 2: NIT Patna */}
          <Card className="lg:col-span-1 flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white tracking-wide">{bento.education.school}</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{bento.education.degree}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white tracking-tight">{bento.education.gpa}</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{bento.education.gpaSubtext}</span>
              </div>
            </div>
          </Card>

          {/* Card 3: Prayas IAB */}
          <Card className="lg:col-span-2 md:col-span-2 flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white tracking-wide">{bento.prayas.title}</h2>
              <p className="text-xs text-zinc-500 mt-0.5">{bento.prayas.subtitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {bento.prayas.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bento.prayas.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-zinc-800/60 border border-zinc-700/30 px-2 py-0.5 text-xs text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Card 4: LeetCode Stats */}
          <Card className="lg:col-span-1 flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-blue-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">{bento.leetcode.count}</h2>
              <p className="text-xs text-zinc-400 mt-2 font-medium">
                {bento.leetcode.label}
              </p>
            </div>
          </Card>

        </div>
      </Container>
    </section>
  );
}