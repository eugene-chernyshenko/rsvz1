import { Scale, Library, Briefcase, ListTree } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { services } from "@/lib/data"

export const metadata = {
  title: "Сервисы — RosVuz",
  description: "Полезные сервисы для участников образовательного процесса: омбудсмены, библиотека, ED Hunter, ОКСО.",
}

const iconMap = { Scale, Library, Briefcase, ListTree } as const

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Сервисы" }]} />

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">Полезные сервисы</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
            Инструменты и справочные ресурсы для учащихся, родителей, педагогов и образовательных организаций.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
