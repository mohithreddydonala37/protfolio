import { motion } from 'framer-motion'

const learningThemes = [
  'FULL-STACK',
  'AI SYSTEMS',
  'PRODUCT BUILDING',
  'PROBLEM SOLVER',
  'HACKATHONS',
  'SYSTEM DESIGN'
]

export function Learning() {
  return (
    <section className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-border text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center mb-16"
      >
        <h2 className="text-sm font-medium tracking-widest text-muted uppercase mb-8">
          CURRENTLY FOCUSED ON
        </h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8 max-w-4xl mx-auto">
          {learningThemes.map((theme, index) => (
            <motion.span
              key={theme}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="font-display text-4xl md:text-6xl tracking-tight text-foreground/40 hover:text-foreground transition-colors cursor-default"
            >
              {theme}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
