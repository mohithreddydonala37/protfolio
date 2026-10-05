import { motion } from 'framer-motion'
import heroImage from '../../assets/hero.png'

export function HeroPortrait() {
  return (
    <div className="absolute inset-0 flex items-end justify-end md:justify-center overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[75vh] md:h-[90vh] flex items-end justify-end md:justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-20" />
        
        <div className="relative w-full md:w-3/4 max-w-4xl h-full flex justify-end md:justify-center">
           <img 
             src={heroImage}
             alt="Mohith Reddy"
             className="object-cover object-top h-full w-auto max-w-none md:max-w-full"
           />
        </div>
      </motion.div>
    </div>
  )
}
