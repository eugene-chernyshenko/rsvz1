import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-muted-foreground">
            Более 110 000 учреждений в каталоге
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl">
            Образование России — в одном понятном каталоге
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            Детские сады, школы, колледжи и вузы по всей стране. Сравнивайте, читайте отзывы и следите за новостями
            образования.
          </p>

          <form className="mt-8 flex flex-col gap-3 sm:flex-row" action="/kindergarten">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Название учреждения или город"
                className="h-12 w-full rounded-lg border border-input bg-background pl-11 pr-4 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
                aria-label="Поиск учреждений"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-8">
              Найти
            </Button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span>Популярное:</span>
            <Link href="/kindergarten" className="text-primary hover:underline">
              детские сады Москвы
            </Link>
            <span>·</span>
            <Link href="/kindergarten" className="text-primary hover:underline">
              вузы Санкт-Петербурга
            </Link>
            <span>·</span>
            <Link href="/news" className="text-primary hover:underline">
              олимпиады 2026
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
