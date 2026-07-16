"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Menu, X, GraduationCap, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const mainNav = [
  { label: "Детские сады", href: "/kindergarten" },
  { label: "Школы", href: "/kindergarten" },
  { label: "Колледжи", href: "/kindergarten" },
  { label: "Вузы", href: "/kindergarten" },
  { label: "Курсы", href: "/kindergarten" },
  { label: "Новости", href: "/news" },
  { label: "Сервисы", href: "/services" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Ros<span className="text-primary">Vuz</span>
          </span>
        </Link>

        <div className="ml-auto hidden flex-1 items-center justify-end gap-2 lg:flex">
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Поиск учреждений и новостей"
              className="h-10 w-full rounded-lg border border-input bg-secondary pl-9 pr-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
              aria-label="Поиск"
            />
          </div>
          <Button variant="ghost" nativeButton={false} render={<Link href="/login" />}>
            <User className="h-4 w-4" />
            Войти
          </Button>
          <Button nativeButton={false} render={<Link href="/register" />}>
            Регистрация
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          aria-label="Открыть меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="hidden border-t border-border lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 px-4 sm:px-6 lg:px-8">
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="relative mb-4">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Поиск"
                className="h-10 w-full rounded-lg border border-input bg-secondary pl-9 pr-3 text-sm outline-none focus:border-ring"
                aria-label="Поиск"
              />
            </div>
            <nav className="flex flex-col">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent" nativeButton={false} render={<Link href="/login" />}>
                Войти
              </Button>
              <Button className="flex-1" nativeButton={false} render={<Link href="/register" />}>
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
