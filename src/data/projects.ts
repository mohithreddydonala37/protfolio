export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description?: string;
  technologies: string[];
  coverImage?: string;
  gallery?: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'dont-send-that',
    number: '01',
    title: "DON'T SEND THAT",
    category: 'AI / Communication Intelligence',
    description: 'AI message analysis tool that estimates communication-risk and provides goal-aware rewrites (Calm, Firm, Direct) before sending. Features voice generation and risk comparison.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'Gemma 3', 'Ollama', 'ElevenLabs'],
    featured: true
  },
  {
    id: 'ranktracker',
    number: '02',
    title: 'RANKTRACKER',
    category: 'Web Application / Developer Tool',
    description: 'A developer tool to track performance and ranking metrics.',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/mohithreddydonala37/ranktracker',
    featured: true
  },
  {
    id: 'medlens',
    number: '03',
    title: 'MEDLENS',
    category: 'AI / Healthcare',
    description: 'Healthcare application leveraging AI.',
    technologies: ['React', 'Python', 'AI'],
    featured: true
  },
  {
    id: 'guidemate',
    number: '04',
    title: 'GUIDEMATE',
    category: 'AI / Travel Assistant',
    description: 'An AI-powered travel assistant.',
    technologies: ['Next.js', 'AI'],
    featured: true
  }
]
