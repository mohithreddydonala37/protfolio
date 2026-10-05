import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'STACK', href: '#stack' },
  { name: 'WORK', href: '#work' },
  { name: 'HACKATHONS', href: '#hackathons' },
  { name: 'CONTACT', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-display text-2xl tracking-tight z-50 relative">
          MOHITH REDDY
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Nav Trigger */}
        <button className="md:hidden z-50 relative">
          <span className="sr-only">Menu</span>
          <div className="w-6 h-0.5 bg-foreground mb-1.5"></div>
          <div className="w-6 h-0.5 bg-foreground"></div>
        </button>
      </div>
    </motion.header>
  )
}
