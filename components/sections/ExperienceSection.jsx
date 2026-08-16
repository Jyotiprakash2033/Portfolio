import { Container } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="about" className="bg-zinc-950 py-16 lg:py-24 border-t border-zinc-900">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Jyoti Prakash
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-snug">
            Engineering immersive experiences and high-performance systems.
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Focusing on AI, hardware architectures, and building modern software from concept to production.
          </p>
        </div>

        {/* Experience Bento Card */}
        <Card className="border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8 border-b border-zinc-800 pb-4">
            <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <h3 className="text-lg font-bold text-white tracking-wide">Experience</h3>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 border-l border-zinc-800 space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-800 bg-zinc-950 flex items-center justify-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>

                {/* Period & Category tags */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded bg-zinc-800/60 border border-zinc-700/30 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                    {exp.period}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                    {exp.category}
                  </span>
                </div>

                {/* Role & Company */}
                <h4 className="mt-3 text-lg font-bold text-white">{exp.role}</h4>
                <p className="text-xs font-medium text-blue-400">{exp.company}</p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-3xl">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-zinc-850 px-2 py-0.5 text-xs text-zinc-400 ring-1 ring-inset ring-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
