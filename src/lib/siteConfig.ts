export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'ai-blog',
  name: 'latent',
  origin: 'https://ai-blog.oriz.in',
  tagline: 'A working log on building AI systems that survive production',
  description: 'A working log on building AI systems that survive production — RAG, tool-using agents, and honest evals. By Chirag Singhal.',
}
