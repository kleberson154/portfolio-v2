export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string

  githubUrl?: string
  frontendUrl?: string
  backendUrl?: string
  liveUrl?: string

  featured?: boolean
  caseStudy?: boolean
  contribution?: boolean
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
      'Docker'
    ],
    image: '/projects/smartstock/dashboard.png',
    backendUrl: 'https://github.com/kleberson154/SmartStockBackEnd',
    frontendUrl: 'https://github.com/kleberson154/SmartStockFrontEnd',
    liveUrl: 'https://smart-stock-front-end-six.vercel.app',
    featured: true,
    caseStudy: true
  },
  {
    id: 2,
    slug: 'rm-studio',
    title: 'RM Studio',
    category: 'Full Stack Application',
    description:
      'Sistema web de agendamento para salão de beleza, com seleção de serviços, validação de dados, calendário inteligente, cálculo de horários disponíveis e integração com API REST.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Axios',
      'Vitest'
    ],
    image: '/projects/rmstudio.png',

    frontendUrl: 'https://github.com/kleberson154/RMStudioFrontEnd',

    backendUrl: 'https://github.com/kleberson154/RMStudioBackEnd',

    liveUrl: 'https://rmstudio.vercel.app'
  },
  {
    id: 3,
    slug: 'zettanote',
    title: 'ZettaNote',
    category: 'Open Source',
    description:
      'Contribuição em uma aplicação open source de produtividade inspirada no Notion, com editor Markdown, gerenciamento de páginas, autenticação, tarefas e compartilhamento.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'Docker'
    ],
    image: '/projects/zettanote.png',

    githubUrl: 'https://github.com/braydenidzenga/ZettaNote',

    liveUrl: 'https://zettanote.tech',

    contribution: true
  },
  {
    id: 4,
    slug: 'open-ui-library',
    title: 'Open UI Library',
    category: 'Open Source',
    description:
      'Biblioteca open source de componentes prontos para aplicações web, com foco em reutilização, consistência visual e produtividade no desenvolvimento de interfaces.',
    technologies: ['React', 'Tailwind CSS', 'Vue', 'JavaScript'],
    image: '/projects/open-ui-library.png',
    githubUrl: 'https://github.com/alirezazim03/OpenUI-Library',
    contribution: true
  }
]
