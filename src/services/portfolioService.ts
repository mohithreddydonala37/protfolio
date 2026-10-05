import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { hackathons } from '../data/hackathons'

export const portfolioService = {
  getProfile: () => profile,
  getProjects: () => projects,
  getHackathons: () => hackathons,
}
