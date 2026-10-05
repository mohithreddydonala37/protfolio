import { motion } from 'framer-motion'

const stackCategories = [
  {
    title: 'FRONTEND',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express', 'REST APIs']
  },
  {
    title: 'DATABASE',
    skills: ['MongoDB', 'PostgreSQL', 'Supabase', 'SQLite']
  },
  {
    title: 'LANGUAGES',
    skills: ['C', 'C++', 'Python']
  },
  {
    title: 'AI',
    skills: ['Gemini', 'Groq', 'LLMs', 'AI APIs']
  },
  {
    title: 'TOOLS',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway']
  }
]

export function Stack() {
  return (
    <section id="stack" className="py-24 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 md:mb-32"
      >
        <h2 className="font-display text-5xl md:text-7xl xl:text-8xl tracking-tight leading-none">
          THE <span className="text-muted">STACK</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {stackCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col border-t border-border pt-6"
          >
            <h3 className="text-sm font-medium tracking-widest text-accent mb-6">
              {category.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <li key={skill} className="text-xl md:text-2xl font-medium tracking-wide">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
