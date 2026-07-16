"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navGroups } from "@/lib/data"

export function SidebarNav() {
  const pathname = usePathname()
  let activeAssigned = false

  return (
    <nav aria-label="Категории" className="flex flex-col gap-6">
      {navGroups.map((group) => {
        return (
        <div key={group.id}>
          <h3 className="px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{group.label}</h3>
          <ul className="mt-2 flex flex-col gap-1">
            {group.items.map((item) => {
              const active = !activeAssigned && pathname === item.href
              if (active) activeAssigned = true
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={
                      active
                        ? "block rounded-lg bg-accent px-3 py-2 text-sm font-medium text-accent-foreground"
                        : "block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        )
      })}
    </nav>
  )
}
