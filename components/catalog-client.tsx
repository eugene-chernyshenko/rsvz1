"use client"

import { useMemo, useState } from "react"
import { Search, SlidersHorizontal } from "lucide-react"
import { institutions, cities } from "@/lib/data"
import { InstitutionCard } from "@/components/institution-card"
import { Button } from "@/components/ui/button"

const types = ["Все", "Детский сад", "Гимназия", "Лицей", "Колледж", "Вуз"]

export function CatalogClient() {
  const [query, setQuery] = useState("")
  const [city, setCity] = useState("Все города")
  const [type, setType] = useState("Все")
  const [sort, setSort] = useState<"rating" | "reviews">("rating")

  const filtered = useMemo(() => {
    const result = institutions.filter((inst) => {
      const matchQuery =
        query.trim() === "" ||
        inst.name.toLowerCase().includes(query.toLowerCase()) ||
        inst.city.toLowerCase().includes(query.toLowerCase())
      const matchCity = city === "Все города" || inst.city === city
      const matchType = type === "Все" || inst.type === type
      return matchQuery && matchCity && matchType
    })
    return result.sort((a, b) => (sort === "rating" ? b.rating - a.rating : b.reviews - a.reviews))
  }, [query, city, type, sort])

  return (
    <div>
      {/* Filters bar */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Поиск по названию или городу"
              className="h-10 w-full rounded-lg border border-input bg-secondary pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
              aria-label="Поиск учреждений"
            />
          </div>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-10 rounded-lg border border-input bg-secondary px-3 text-sm text-foreground outline-none focus:border-ring"
            aria-label="Город"
          >
            <option>Все города</option>
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "rating" | "reviews")}
            className="h-10 rounded-lg border border-input bg-secondary px-3 text-sm text-foreground outline-none focus:border-ring"
            aria-label="Сортировка"
          >
            <option value="rating">По рейтингу</option>
            <option value="reviews">По числу отзывов</option>
          </select>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={
                type === t
                  ? "rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"
                  : "rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Найдено учреждений: <span className="font-medium text-foreground">{filtered.length}</span>
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {filtered.map((inst) => (
            <InstitutionCard key={inst.id} inst={inst} />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16 text-center">
          <p className="text-base font-medium text-foreground">Ничего не найдено</p>
          <p className="mt-1 text-sm text-muted-foreground">Попробуйте изменить параметры фильтра</p>
          <Button
            variant="outline"
            className="mt-4 bg-transparent"
            onClick={() => {
              setQuery("")
              setCity("Все города")
              setType("Все")
            }}
          >
            Сбросить фильтры
          </Button>
        </div>
      )}
    </div>
  )
}
