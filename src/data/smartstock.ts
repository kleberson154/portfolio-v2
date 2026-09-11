import { Server, Database, ShieldCheck } from 'lucide-react'

export const projectStats = [
  {
    icon: Server,
    label: 'Back-end',
    value: 'Spring Boot'
  },
  {
    icon: Database,
    label: 'Banco de dados',
    value: 'PostgreSQL'
  },
  {
    icon: ShieldCheck,
    label: 'Segurança',
    value: 'JWT + Roles'
  }
]

export const layers = [
  {
    label: 'Front-end',
    title: 'React + TypeScript',
    description: 'Interface web hospedada na Vercel'
  },
  {
    label: 'API',
    title: 'Spring Boot',
    description: 'Back-end REST hospedado no Render'
  },
  {
    label: 'Banco de dados',
    title: 'PostgreSQL',
    description: 'Persistência dos dados da aplicação'
  }
]

export const itemsArquitecture = [
  {
    title: 'Autenticação',
    description:
      'JWT utilizado para autenticar usuários e proteger os endpoints da API.'
  },
  {
    title: 'Autorização',
    description:
      'Perfis USER e ADMIN controlam quais operações cada usuário pode executar.'
  },
  {
    title: 'Migrações',
    description:
      'Flyway mantém a evolução do schema do banco de dados versionada.'
  },
  {
    title: 'Containers',
    description:
      'Docker é utilizado no ambiente de desenvolvimento e na estratégia de deploy do back-end.'
  },
  {
    title: 'Documentação',
    description:
      'Swagger/OpenAPI documenta e permite testar os endpoints da API.'
  },
  {
    title: 'Deploy',
    description:
      'Front-end publicado na Vercel e back-end com PostgreSQL hospedados no Render.'
  }
]

export const decisions = [
  {
    number: '01',
    title: 'JWT + Spring Security',
    description:
      'A autenticação utiliza JWT para manter a API stateless. Após o login, o token é enviado nas requisições protegidas e validado pelo back-end.',
    tag: 'Security'
  },
  {
    number: '02',
    title: 'Controle de acesso por perfil',
    description:
      'Os perfis USER e ADMIN possuem permissões diferentes. Operações administrativas, como criar, editar e remover produtos, são restritas ao ADMIN.',
    tag: 'Authorization'
  },
  {
    number: '03',
    title: 'Movimentações de estoque',
    description:
      'Após a criação do produto, sua quantidade não é alterada diretamente. Entradas e saídas passam pelo fluxo de movimentações, preservando o histórico do estoque.',
    tag: 'Business Rule',
    featured: true
  },
  {
    number: '04',
    title: 'Operações transacionais',
    description:
      'A atualização da quantidade do produto e o registro da movimentação fazem parte da mesma operação, evitando inconsistências entre estoque e histórico.',
    tag: 'Data Integrity'
  },
  {
    number: '05',
    title: 'Flyway + validação do schema',
    description:
      'As alterações do banco são versionadas através de migrations do Flyway, enquanto o Hibernate valida se as entidades estão compatíveis com o schema existente.',
    tag: 'Database'
  },
  {
    number: '06',
    title: 'Tratamento global de erros',
    description:
      'Exceções de negócio são tratadas de forma centralizada, retornando respostas HTTP consistentes para situações como produto inexistente, código duplicado e estoque insuficiente.',
    tag: 'API Design'
  },
  {
    number: '07',
    title: 'Paginação',
    description:
      'Listagens de produtos e movimentações utilizam paginação para evitar o carregamento desnecessário de grandes volumes de dados em uma única requisição.',
    tag: 'Performance'
  },
  {
    number: '08',
    title: 'API documentada',
    description:
      'Swagger/OpenAPI fornece documentação interativa dos endpoints e permite testar a API, inclusive os recursos protegidos por Bearer Token.',
    tag: 'Documentation'
  }
]

export const technologies = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'JWT',
  'JPA / Hibernate',
  'PostgreSQL',
  'Flyway',
  'Swagger / OpenAPI',
  'Docker',
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Axios',
  'Vercel',
  'Render'
]

export const gallery = [
  {
    title: 'Produtos',
    description:
      'Listagem de produtos com paginação, controle por perfil e operações administrativas.',
    image: '/projects/smartstock/products.png'
  },
  {
    title: 'Movimentações',
    description:
      'Histórico de entradas e saídas com rastreabilidade das alterações de estoque.',
    image: '/projects/smartstock/movements.png'
  },
  {
    title: 'Estoque mínimo',
    description:
      'Visualização de produtos que atingiram o nível mínimo configurado.',
    image: '/projects/smartstock/low-stock.png'
  }
]

export const mobileScreens = [
  {
    title: 'Dashboard mobile',
    image: '/projects/smartstock/mobile-dashboard.png'
  },
  {
    title: 'Menu mobile',
    image: '/projects/smartstock/mobile-menu.png'
  }
]

export const endpoints = [
  {
    method: 'POST',
    path: '/api/auth/register',
    description: 'Cadastro de usuário.'
  },
  {
    method: 'POST',
    path: '/api/auth/login',
    description: 'Autenticação e geração do token JWT.'
  },
  {
    method: 'GET',
    path: '/api/products',
    description: 'Listagem paginada de produtos.'
  },
  {
    method: 'POST',
    path: '/api/products',
    description: 'Criação de produto — acesso ADMIN.'
  },
  {
    method: 'GET',
    path: '/api/movements',
    description: 'Histórico paginado de movimentações.'
  },
  {
    method: 'POST',
    path: '/api/movements',
    description: 'Entrada ou saída de estoque.'
  }
]

export const securityItems = [
  {
    title: 'JWT',
    description:
      'O usuário recebe um token após o login e o envia nas requisições protegidas através do header Authorization.'
  },
  {
    title: 'Spring Security',
    description:
      'A API utiliza Spring Security para autenticação, autorização e proteção dos endpoints.'
  },
  {
    title: 'Roles',
    description:
      'Perfis USER e ADMIN determinam quais operações cada usuário pode executar.'
  },
  {
    title: 'BCrypt',
    description:
      'As senhas são armazenadas utilizando hash BCrypt, sem persistência em texto puro.'
  }
]

export const qualityItems = [
  {
    title: 'JUnit',
    description:
      'Testes automatizados foram utilizados para validar regras e comportamentos importantes da aplicação.'
  },
  {
    title: 'Mockito',
    description:
      'Mocks foram utilizados para isolar dependências e testar serviços de forma controlada.'
  },
  {
    title: 'Bean Validation',
    description:
      'DTOs utilizam validações para impedir dados inválidos antes que cheguem às regras de negócio.'
  },
  {
    title: 'Global Exception Handler',
    description:
      'Erros de negócio são tratados de forma centralizada e retornam respostas HTTP padronizadas.'
  }
]

export const infrastructure = [
  {
    label: 'Front-end',
    title: 'Vercel',
    description:
      'A aplicação React é publicada na Vercel e consome a API em produção.'
  },
  {
    label: 'Back-end',
    title: 'Render',
    description: 'A API Spring Boot é executada em produção no Render.'
  },
  {
    label: 'Database',
    title: 'PostgreSQL',
    description:
      'O banco de dados PostgreSQL também está hospedado no ambiente de produção.'
  }
]

export const itemsDeployment = [
  {
    title: 'Docker',
    description:
      'O back-end utiliza Docker para padronizar o ambiente de execução e facilitar o deploy.'
  },
  {
    title: 'Variáveis de ambiente',
    description:
      'Credenciais e configurações sensíveis são fornecidas através de variáveis de ambiente em produção.'
  },
  {
    title: 'CORS',
    description:
      'O back-end permite requisições da aplicação publicada na Vercel, mantendo o acesso controlado entre front-end e API.'
  },
  {
    title: 'Flyway',
    description:
      'As migrations garantem que o banco de dados em produção seja criado e atualizado de forma versionada.'
  }
]

export const learnings = [
  'Estruturação de uma API REST com regras de negócio reais',
  'Autenticação e autorização com JWT e Spring Security',
  'Integração entre React, Spring Boot e PostgreSQL',
  'Versionamento de banco de dados com Flyway',
  'Testes automatizados com JUnit e Mockito',
  'Deploy de uma aplicação full stack em produção'
]

export const links = [
    {
      label: 'Back-end',
      description: 'Java + Spring Boot',
      href: 'https://github.com/kleberson154/SmartStockBackEnd'
    },
    {
      label: 'Front-end',
      description: 'React + TypeScript',
      href: 'https://github.com/kleberson154/SmartStockFrontEnd'
    }
  ]
