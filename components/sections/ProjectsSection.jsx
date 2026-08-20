import { Container } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-zinc-950 py-16 lg:py-24 border-t border-zinc-900">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Engineering Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            A collection of architectures and explorations in cloud infrastructure, machine learning hardware, and interactive system design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm">
              <div>
                {/* Tags / Subtitle */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800/50 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-zinc-400 border border-zinc-700/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white tracking-wide">{project.title}</h3>
                <p className="text-xs text-zinc-500 mt-1 font-mono">{project.subtitle}</p>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              {project.links && project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-zinc-800/60">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href}>
                      <Button variant={link.icon === "code" ? "primary" : "secondary"} className="py-2 px-4 text-xs">
                        {link.label}
                      </Button>
                    </a>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
