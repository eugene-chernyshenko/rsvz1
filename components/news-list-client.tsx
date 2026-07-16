"use client"

import { useMemo, useState } from "react"
import { news } from "@/lib/data"
import { NewsCard } from "@/components/news-card"

const categories = ["Все", "Школы", "Вузы", "Олимпиады", "Курсы", "Реестр"]

export function NewsListClient() {
  const [active, setActive] = useState("Все")

  const filtered = useMemo(
    () => (active === "Все" ? news : news.filter((n) => n.category === active)),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={
              active === cat
                ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                : "rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
