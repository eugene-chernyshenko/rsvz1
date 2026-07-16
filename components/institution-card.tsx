import Link from "next/link"
import { MapPin, Star } from "lucide-react"
import type { Institution } from "@/lib/data"

export function InstitutionCard({ inst }: { inst: Institution }) {
  return (
    <Link
      href={`/kindergarten/${inst.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
          {inst.type}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
          <Star className="h-3.5 w-3.5 fill-chart-4 text-chart-4" />
          {inst.rating}
        </span>
      </div>

      <h3 className="mt-3 text-base font-semibold leading-snug text-foreground text-balance group-hover:text-primary">
        {inst.name}
      </h3>

      <p className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
        <span>
          {inst.city}, {inst.address}
        </span>
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {inst.features.slice(0, 3).map((f) => (
          <span key={f} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
            {f}
          </span>
        ))}
      </div>
    </Link>
  )
}
