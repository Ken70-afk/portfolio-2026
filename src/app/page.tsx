export default function Home() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 pt-12">
        <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tighter uppercase relative inline-block leading-[1.1]">
          <span className="relative z-10 text-white dark:text-black bg-black dark:bg-white px-3 py-1 mr-2 inline-block mb-2 md:mb-0">Code.</span>
          <br className="md:hidden" />
          <span className="relative z-10 italic inline-block mr-2 mb-2 md:mb-0">Build.</span>
          <br className="md:hidden" />
          <span className="relative z-10 text-transparent bg-clip-text bg-black dark:bg-white" style={{ WebkitTextStroke: "1.5px var(--foreground)" }}>Scale.</span>
        </h1>
        <p className="text-lg md:text-2xl font-mono max-w-2xl leading-relaxed border-l-4 border-black dark:border-white pl-4 md:pl-6">
          Software Engineer building production-grade full-stack applications.
          AWS Certified Cloud Practitioner focused on scalable backend architecture, clean API design, CI/CD automation, and reliable cloud deployments.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-white dark:bg-[#111] border-4 border-black dark:border-white p-8 md:p-10 relative shadow-hard dark:shadow-hard-lg overflow-hidden group">
        <div className="absolute top-0 right-0 bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-mono font-bold text-sm uppercase z-20">
          About
        </div>
        <div className="absolute inset-0 bg-halftone opacity-5 pointer-events-none" />

        {/* Tech decorative scanline */}
        <div className="absolute -inset-10 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-[-100%] group-hover:translate-y-[100%] pointer-events-none" />

        <div className="relative z-10 space-y-6 mt-4">
          <p className="text-lg leading-relaxed font-sans">
            I am a Software Engineer equipped with an Advanced Diploma in Computer Engineering Technology from Algonquin College. I specialize in building robust applications using <strong className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 font-mono text-sm ml-1">.NET</strong>, <strong className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 font-mono text-sm">React</strong>, <strong className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 font-mono text-sm">PostgreSQL</strong>, and <strong className="bg-black text-white dark:bg-white dark:text-black px-1.5 py-0.5 font-mono text-sm">Node.js</strong>.
          </p>
          <p className="text-lg leading-relaxed font-sans mt-4">
            As an <strong className="border-b-2 border-dashed border-black dark:border-white">AWS Certified Cloud Practitioner</strong>, I bring hands-on experience in CI/CD automation and cloud deployment, specifically with Microsoft Azure and GitHub Actions. I am driven by the challenge of solving complex problems and ensuring production system reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 font-mono">
            <div className="border-2 border-black dark:border-white p-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
              <h3 className="font-bold mb-3 uppercase text-xs tracking-wider opacity-60">Core Technologies</h3>
              <ul className="space-y-1.5 text-sm list-disc pl-5">
                <li>.NET (C#) & Java</li>
                <li>Python & Node.js</li>
                <li>React</li>
                <li>PostgreSQL & SQL Server</li>
              </ul>
            </div>
            <div className="border-2 border-black dark:border-white p-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300">
              <h3 className="font-bold mb-3 uppercase text-xs tracking-wider opacity-60">Cloud & DevOps</h3>
              <ul className="space-y-1.5 text-sm list-disc pl-5">
                <li>Microsoft Azure</li>
                <li>AWS Cloud</li>
                <li>Docker</li>
                <li>GitHub Actions (CI/CD)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
