import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-8 py-16 md:py-24 border-b border-border last:border-b-0"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="w-full md:w-5/12 flex flex-col order-2 md:order-1">
          <div className="flex items-center gap-4 mb-6 md:mb-12">
            <span className="font-display text-2xl md:text-3xl text-accent">{project.number}</span>
            <div className="h-[1px] flex-grow bg-border" />
            <span className="text-xs md:text-sm tracking-widest font-medium text-muted uppercase">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-4xl md:text-6xl tracking-tight leading-none mb-6">
            {project.title}
          </h3>

          {project.description && (
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-xl">
              {project.description}
            </p>
          )}

          <div className="flex flex-wrap gap-2 mb-12">
            {project.technologies.map(tech => (
              <span key={tech} className="text-xs font-medium tracking-wider px-3 py-1 bg-surface-2 border border-border rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-auto">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm tracking-widest font-medium hover:text-accent transition-colors uppercase">
                GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm tracking-widest font-medium hover:text-accent transition-colors uppercase">
                Live Demo <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="w-full md:w-7/12 order-1 md:order-2">
          <div className="aspect-[4/3] md:aspect-[16/10] bg-surface-2 border border-border overflow-hidden relative group">
            {project.coverImage ? (
              <img 
                src={project.coverImage} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-br from-surface to-surface-2">
                <div className="w-full h-full border border-border-strong/30 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-background to-background" />
                   <span className="font-display text-3xl md:text-4xl opacity-20 tracking-tighter mix-blend-overlay">PROJECT ASSET PENDING</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
