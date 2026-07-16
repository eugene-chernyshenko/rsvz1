import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, ChevronLeft, Share2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { NewsCard } from "@/components/news-card"
import { news } from "@/lib/data"

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = news.find((n) => n.slug === slug)
  if (!item) return { title: "Новость не найдена — RosVuz" }
  return { title: `${item.title} — RosVuz`, description: item.excerpt }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = news.find((n) => n.slug === slug)
  if (!item) notFound()

  const related = news.filter((n) => n.id !== item.id).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Новости", href: "/news" },
            { label: item.title },
          ]}
        />

        <article className="mt-6">
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
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {item.date}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-4xl">
            {item.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">{item.excerpt}</p>

          <div className="mt-6 flex items-center justify-between border-y border-border py-3">
            <span className="text-sm text-muted-foreground">Редакция RosVuz</span>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
              Поделиться
            </Button>
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {item.body.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground text-pretty">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-10">
          <Button variant="ghost" nativeButton={false} render={<Link href="/news" />}>
            <ChevronLeft className="h-4 w-4" />
            Все новости
          </Button>
        </div>

        <section className="mt-12 border-t border-border pt-10">
          <h2 className="text-xl font-bold tracking-tight text-foreground">Читайте также</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <NewsCard key={r.id} item={r} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
