import { motion } from 'framer-motion'
import { HeroPortrait } from './HeroPortrait'

export function Hero() {
  const nameText = "MOHITH REDDY"
  const titleText = "FULL-STACK DEVELOPER · AI BUILDER · HACKATHON DEVELOPER · PROBLEM SOLVER"

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroPortrait />
      </div>
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-6 max-w-3xl mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-x-4 gap-y-2 text-xs md:text-sm tracking-widest font-medium text-accent"
          >
            {titleText.split(' · ').map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                {item}
                {i < titleText.split(' · ').length - 1 && <span className="w-1 h-1 rounded-full bg-accent/50" />}
              </span>
            ))}
          </motion.div>

          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter mix-blend-difference text-foreground">
            {nameText.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 max-w-xl text-balance mt-4 mix-blend-difference"
          >
            I build AI-powered products and full-stack experiences that turn ambitious ideas into working software.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 mt-8 relative z-20"
        >
          <a href="#work" className="px-8 py-4 bg-foreground text-background font-medium tracking-wide hover:bg-accent hover:text-white transition-colors">
            VIEW MY WORK
          </a>
          <a href="#contact" className="px-8 py-4 border border-border-strong hover:border-accent hover:text-accent transition-colors tracking-wide font-medium bg-background/20 backdrop-blur-sm">
            LET'S CONNECT
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 text-xs font-medium tracking-widest text-muted mix-blend-difference"
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-12 h-[1px] bg-border-strong overflow-hidden relative">
          <motion.div
            animate={{ x: [-48, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-0 bg-accent w-1/3"
          />
        </div>
      </motion.div>
    </section>
  )
}
