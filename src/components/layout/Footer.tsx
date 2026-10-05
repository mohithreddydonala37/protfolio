export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-2">MOHITH REDDY</h2>
          <p className="text-muted font-medium tracking-wide">FULL-STACK DEVELOPER · AI BUILDER</p>
        </div>
        
        <div className="flex gap-6">
          <a href="https://github.com/mohithreddydonala37" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mohith-reddy-58a8563ba" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:mohithreddydonala37@gmail.com" className="text-muted hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 text-muted/60 text-sm">
        <p>© 2026 Mohith Reddy</p>
      </div>
    </footer>
  )
}
