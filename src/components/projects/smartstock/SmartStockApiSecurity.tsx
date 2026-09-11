import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { endpoints, securityItems } from '../../../data/smartstock'

export default function SmartStockApiSecurity() {

  return (
    <section className="border-b border-white/5 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3ff12]">
              06 — API & Segurança
            </span>

            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              API protegida e
              <span className="text-[#a3ff12]"> documentada.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-zinc-500 sm:text-base sm:leading-7">
              A segurança do SmartStock foi construída com autenticação JWT,
              controle de acesso por perfil e proteção dos endpoints da API.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07
                }}
                className="rounded-xl border border-white/10 bg-[#090909] p-5 transition hover:border-[#a3ff12]/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-200">{item.title}</h3>

                  <span className="font-mono text-[10px] text-zinc-700">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-[1.2fr_0.8fr]">
          <EndpointsPanel endpoints={endpoints} />
          <SwaggerPanel />
        </div>
      </div>
    </section>
  )
}

interface Endpoint {
  method: string
  path: string
  description: string
}

function EndpointsPanel({ endpoints }: { endpoints: Endpoint[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#090909]"
    >
      <div className="border-b border-white/10 px-5 py-4 sm:px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
          Endpoints principais
        </span>

        <h3 className="mt-1 text-lg font-bold text-white">REST API</h3>
      </div>

      <div className="divide-y divide-white/5">
        {endpoints.map(endpoint => (
          <div
            key={`${endpoint.method}-${endpoint.path}`}
            className="grid gap-2 px-5 py-4 sm:grid-cols-[70px_1fr] sm:items-start sm:px-6"
          >
            <span
              className={`w-fit rounded-md border px-2 py-1 font-mono text-[10px] font-semibold ${
                endpoint.method === 'GET'
                  ? 'border-blue-400/20 bg-blue-400/5 text-blue-400'
                  : 'border-[#a3ff12]/20 bg-[#a3ff12]/5 text-[#a3ff12]'
              }`}
            >
              {endpoint.method}
            </span>

            <div>
              <code className="font-mono text-xs text-zinc-300 sm:text-sm">
                {endpoint.path}
              </code>

              <p className="mt-1 text-xs leading-5 text-zinc-600 sm:text-sm">
                {endpoint.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function SwaggerPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#090909] p-6 sm:p-8"
    >
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a3ff12]">
          OpenAPI
        </span>

        <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white">
          Swagger UI
        </h3>

        <p className="mt-4 text-sm leading-6 text-zinc-500">
          A documentação interativa permite visualizar contratos, parâmetros,
          respostas e testar os endpoints protegidos utilizando Bearer Token.
        </p>
      </div>

      <a
        href="https://smartstock-api-4jx3.onrender.com/swagger-ui.html"
        target="_blank"
        rel="noreferrer"
        className="group mt-8 inline-flex items-center justify-between rounded-lg border border-white/10 bg-[#050505] px-5 py-4 text-sm font-semibold text-zinc-300 transition hover:border-[#a3ff12]/25 hover:text-[#a3ff12]"
      >
        Abrir Swagger
        <ArrowUpRight
          size={17}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </motion.div>
  )
}
