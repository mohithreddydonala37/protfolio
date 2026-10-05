import { motion } from 'framer-motion'
import { portfolioService } from '../../services/portfolioService'

export function Hackathons() {
  const hackathons = portfolioService.getHackathons()

  return (
    <section id="hackathons" className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <h2 className="font-display text-5xl md:text-7xl xl:text-8xl tracking-tight leading-none">
          HACKATHONS <span className="text-muted">&</span><br />
          <span className="text-muted">ACHIEVEMENTS</span>
        </h2>
      </motion.div>

      <div className="flex flex-col border-t border-border">
        {hackathons.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-border group hover:bg-surface-2 transition-colors px-4 -mx-4"
          >
            <div className="flex items-center gap-6 md:gap-12 w-full md:w-1/2">
              <span className="text-xs font-medium tracking-widest text-muted tabular-nums">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors">
                {item.name}
              </h3>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full md:w-1/2 gap-2 md:gap-8 pl-12 md:pl-0">
              <span className="text-sm font-medium tracking-wide text-foreground/80">
                {item.achievement}
              </span>
              <span className="text-xs font-medium tracking-widest text-muted uppercase">
                {item.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
