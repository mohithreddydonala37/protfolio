import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-6xl md:text-8xl xl:text-[10rem] tracking-tighter leading-none mb-12 uppercase mix-blend-difference text-balance">
            HAVE AN IDEA<br />
            <span className="text-accent">WORTH BUILDING?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="mailto:mohithreddydonala37@gmail.com"
            className="inline-flex items-center gap-4 bg-foreground text-background px-8 py-5 md:px-12 md:py-6 font-medium tracking-wide hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 group"
          >
            mohithreddydonala37@gmail.com
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
