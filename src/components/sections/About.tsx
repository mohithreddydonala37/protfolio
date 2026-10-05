import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-6 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.9] text-balance">
              I BUILD THINGS<br />
              <span className="text-muted">THAT SOLVE</span><br />
              REAL PROBLEMS.
            </h2>
          </motion.div>
        </div>
        
        <div className="md:col-span-6 flex flex-col justify-end pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none text-muted font-medium"
          >
            <p className="mb-6 text-foreground/90 text-xl md:text-2xl leading-relaxed">
              I am a full-stack developer and AI builder focused on turning ambitious ideas into robust, production-ready software.
            </p>
            <p className="mb-6 leading-relaxed">
              My engineering approach bridges the gap between complex backend systems and premium frontend experiences. Whether it's integrating language models for communication intelligence, building developer tools, or rapidly prototyping at hackathons, I optimize for impact and clean architecture.
            </p>
            <p className="leading-relaxed">
              I don't just write code; I solve problems through continuous learning and intentional design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
