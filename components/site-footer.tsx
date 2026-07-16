import Link from "next/link"
import { GraduationCap } from "lucide-react"

const footerCols = [
  {
    title: "Каталог",
    links: [
      { label: "Детские сады", href: "/kindergarten" },
      { label: "Школы", href: "/kindergarten" },
      { label: "Колледжи", href: "/kindergarten" },
      { label: "Вузы", href: "/kindergarten" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "Новости", href: "/news" },
      { label: "Афиша событий", href: "/news" },
      { label: "Закон об образовании", href: "/services" },
      { label: "Гранты и олимпиады", href: "/news" },
    ],
  },
  {
    title: "Сервисы",
    links: [
      { label: "Уполномоченные", href: "/services" },
      { label: "Электронная библиотека", href: "/services" },
      { label: "ED Hunter", href: "/services" },
      { label: "ОКСО", href: "/services" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Ros<span className="text-primary">Vuz</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Образовательный портал-каталог учреждений России для детей, школьников, студентов и взрослых.
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>{"© 2026 RosVuz. Все права защищены."}</p>
          <div className="flex gap-6">
            <Link href="/services" className="hover:text-primary">
              Политика конфиденциальности
            </Link>
            <Link href="/services" className="hover:text-primary">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
