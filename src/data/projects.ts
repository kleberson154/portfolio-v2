export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'smartstock',
    title: 'SmartStock',
    category: 'Full Stack Application',
    description:
      'Sistema completo de gerenciamento de estoque com autenticação JWT, controle de acesso por perfil, movimentações de entrada e saída, alertas de estoque mínimo e deploy em produção.',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
    ],
    image: '/projects/smartstock-dashboard.png',
    githubUrl: 'https://github.com/kleberson154/SmartStockBackEnd',
    liveUrl: 'https://smart-stock-front-end-six.vercel.app',
    featured: true,
  },
]
