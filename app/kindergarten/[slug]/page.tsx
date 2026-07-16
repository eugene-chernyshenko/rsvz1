import { notFound } from "next/navigation"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe, Star, Check, ChevronLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { institutions } from "@/lib/data"

export function generateStaticParams() {
  return institutions.map((inst) => ({ slug: inst.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const inst = institutions.find((i) => i.slug === slug)
  if (!inst) return { title: "Учреждение не найдено — RosVuz" }
  return {
    title: `${inst.name} — RosVuz`,
    description: inst.description,
  }
}

const reviewsSample = [
  {
    author: "Ольга М.",
    date: "Февраль 2026",
    rating: 5,
    text: "Прекрасное учреждение, внимательные педагоги и современное оснащение. Ребёнок ходит с удовольствием.",
  },
  {
    author: "Дмитрий К.",
    date: "Январь 2026",
    rating: 4,
    text: "В целом всё устраивает. Хорошая подготовка и удобное расположение, но иногда не хватает мест в группах.",
  },
]

export default async function InstitutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const inst = institutions.find((i) => i.slug === slug)
  if (!inst) notFound()

  const similar = institutions.filter((i) => i.type === inst.type && i.id !== inst.id).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Каталог учреждений", href: "/kindergarten" },
            { label: inst.name },
          ]}
        />

        {/* Header */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                {inst.type}
              </span>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
                {inst.name}
              </h1>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {inst.city}, {inst.address}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 rounded-lg bg-secondary px-4 py-3">
              <Star className="h-5 w-5 fill-chart-4 text-chart-4" />
              <span className="text-2xl font-bold text-foreground">{inst.rating}</span>
              <span className="text-sm text-muted-foreground">/ {inst.reviews} отзывов</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div className="flex flex-col gap-8">
            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Об учреждении</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{inst.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Особенности и услуги</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {inst.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Отзывы</h2>
              <div className="mt-4 flex flex-col gap-4">
                {reviewsSample.map((review) => (
                  <div key={review.author} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">{review.author}</span>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="mt-1 flex gap-0.5" aria-label={`Оценка ${review.rating} из 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={
                            i < review.rating
                              ? "h-4 w-4 fill-chart-4 text-chart-4"
                              : "h-4 w-4 text-border"
                          }
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-base font-semibold text-foreground">Контакты</h2>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`tel:${inst.phone}`} className="text-foreground hover:text-primary">
                    {inst.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href={`mailto:${inst.email}`} className="text-foreground hover:text-primary">
                    {inst.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-foreground">{inst.website}</span>
                </li>
              </ul>
              <Button className="mt-5 w-full">Записаться на приём</Button>
              <Button variant="outline" className="mt-2 w-full bg-transparent">
                Оставить отзыв
              </Button>
            </div>

            <div className="rounded-xl border border-border bg-secondary p-6">
              <h2 className="text-base font-semibold text-foreground">Адрес</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {inst.city}, {inst.address}
              </p>
              <div className="mt-4 flex h-40 items-center justify-center rounded-lg border border-dashed border-border bg-card text-sm text-muted-foreground">
                Карта расположения
              </div>
            </div>
          </aside>
        </div>

        {/* Similar */}
        {similar.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-bold tracking-tight text-foreground">Похожие учреждения</h2>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((s) => (
                <Link
                  key={s.id}
                  href={`/kindergarten/${s.slug}`}
                  className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                      {s.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      <Star className="h-3.5 w-3.5 fill-chart-4 text-chart-4" />
                      {s.rating}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.city}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10">
          <Button variant="ghost" nativeButton={false} render={<Link href="/kindergarten" />}>
            <ChevronLeft className="h-4 w-4" />
            Вернуться к каталогу
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
