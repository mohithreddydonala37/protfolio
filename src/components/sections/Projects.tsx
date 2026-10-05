import { motion } from 'framer-motion'
import { portfolioService } from '../../services/portfolioService'
import { ProjectCard } from '../projects/ProjectCard'

export function Projects() {
  const projects = portfolioService.getProjects()

  return (
    <section id="work" className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <h2 className="font-display text-5xl md:text-7xl xl:text-8xl tracking-tight leading-none">
          SELECTED <span className="text-muted">WORK</span>
        </h2>
        <p className="text-muted tracking-wide font-medium max-w-xs md:text-right">
          A showcase of recent AI products, full-stack applications, and developer tools.
        </p>
      </motion.div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
