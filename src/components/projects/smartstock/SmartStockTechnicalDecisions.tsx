import { motion } from 'motion/react'

export default function SmartStockTechnicalDecisions() {
  const decisions = [
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

  return (
    <section className="border-b border-white/5 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
            03 — Decisões Técnicas
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Mais do que
            <br />
            apenas um
            <span className="text-[#a3ff12]"> CRUD.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
            Algumas decisões foram tomadas para aproximar o projeto de situações
            encontradas em aplicações reais, priorizando segurança, consistência
            dos dados e manutenção.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-2">
          {decisions.map((decision, index) => (
            <TechnicalDecisionCard
              key={decision.number}
              decision={decision}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TechnicalDecisionCardProps {
  decision: {
    number: string
    title: string
    description: string
    tag: string
    featured?: boolean
  }
  index: number
}

function TechnicalDecisionCard({
  decision,
  index
}: TechnicalDecisionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05
      }}
      className={`group relative overflow-hidden rounded-xl border p-5 transition sm:p-6 ${
        decision.featured
          ? 'border-[#a3ff12]/25 bg-[#a3ff12]/[0.035]'
          : 'border-white/10 bg-[#090909] hover:border-[#a3ff12]/20'
      }`}
    >
      {decision.featured && (
        <div className="absolute right-0 top-0 rounded-bl-lg border-b border-l border-[#a3ff12]/20 bg-[#a3ff12]/10 px-3 py-1.5">
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#a3ff12]">
            Regra principal
          </span>
        </div>
      )}

      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-zinc-700">
          {decision.number}
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#a3ff12]">
          {decision.tag}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-zinc-100 sm:text-xl">
        {decision.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500 sm:leading-7">
        {decision.description}
      </p>
    </motion.article>
  )
}
