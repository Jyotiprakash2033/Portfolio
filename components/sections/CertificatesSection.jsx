import { Container } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="bg-zinc-950 py-16 lg:py-24 border-t border-zinc-900">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Credentials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Professional certifications and specialized courses in cloud, programming, and digital system design.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card key={cert.title} className="flex flex-col justify-between border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700/80 hover:bg-zinc-900/60">
              <div>
                <div className="flex items-start justify-between">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50 border border-zinc-700/30 text-blue-400">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-zinc-800/50 px-2.5 py-0.5 text-[10px] font-mono tracking-wide text-zinc-400 border border-zinc-700/30">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-blue-400 mt-1 font-medium">{cert.issuer}</p>
              </div>

              <div>
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono">Performance</span>
                  <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                    {cert.grade}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full py-2 px-3 text-xs justify-center flex">
                      View Certificate
                    </Button>
                  </a>
                  {cert.website && (
                    <a href={cert.website} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="secondary" className="w-full py-2 px-3 text-xs justify-center flex">
                        Website
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
