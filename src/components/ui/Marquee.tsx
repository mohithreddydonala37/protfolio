import { motion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 25 }: MarqueeProps) {
  // Duplicate items to ensure smooth infinite loop
  const content = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full overflow-hidden bg-surface-2 border-y border-border py-4 md:py-6 flex items-center">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed
        }}
        className="flex whitespace-nowrap items-center"
      >
        {content.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-display text-4xl md:text-6xl tracking-tight uppercase mx-8 text-foreground/80">
              {item}
            </span>
            {index < content.length - 1 && (
              <span className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-accent" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
