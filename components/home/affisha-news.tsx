import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { affisha } from "@/lib/data"
import { NewsCard } from "@/components/news-card"
import { news } from "@/lib/data"

export function AffishaNews() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        {/* Affisha */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Афиша</h2>
            <Link href="/news" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Все события
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="mt-6 flex flex-col gap-3">
            {affisha.map((event) => (
              <li
                key={event.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="text-lg font-bold leading-none">{event.date}</span>
                  <span className="text-xs">{event.day}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-foreground text-balance">{event.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {event.place}, {event.city}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* News */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">Новости образования</h2>
            <Link href="/news" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Все новости
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {news.slice(0, 4).map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
