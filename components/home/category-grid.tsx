import Link from "next/link"
import { Baby, BookOpen, GraduationCap, School, Laptop, Wifi, ArrowRight } from "lucide-react"
import { categories } from "@/lib/data"

const iconMap = {
  Baby,
  BookOpen,
  GraduationCap,
  School,
  Laptop,
  Wifi,
} as const

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Категории</h2>
          <p className="mt-2 text-muted-foreground">Выберите уровень образования, чтобы начать поиск</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap]
          return (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium text-muted-foreground">{cat.count}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Перейти
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
