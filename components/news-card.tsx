import Link from "next/link"
import { Calendar, ArrowUpRight } from "lucide-react"
import type { NewsItem } from "@/lib/data"

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center gap-2">
        <span
          className={
            item.important
              ? "inline-flex items-center rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-medium text-destructive"
              : "inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
          }
        >
          {item.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          {item.date}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold leading-snug text-foreground text-balance group-hover:text-primary">
        {item.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Читать полностью
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
