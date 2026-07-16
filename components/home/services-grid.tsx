import { Scale, Library, Briefcase, ListTree } from "lucide-react"
import { services } from "@/lib/data"

const iconMap = {
  Scale,
  Library,
  Briefcase,
  ListTree,
} as const

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Полезные сервисы</h2>
        <p className="mt-2 text-muted-foreground">Инструменты для участников образовательного процесса</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="mt-4 text-base font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
