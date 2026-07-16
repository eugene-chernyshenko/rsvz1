import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { NewsListClient } from "@/components/news-list-client"

export const metadata = {
  title: "Новости образования — RosVuz",
  description: "Актуальные новости образования России: приёмные кампании, олимпиады, гранты и изменения в реестре.",
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Новости" }]} />

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">Новости образования</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
            Следите за изменениями в сфере образования: приёмные кампании, олимпиады, гранты и обновления реестра
            учреждений.
          </p>
        </div>

        <div className="mt-8">
          <NewsListClient />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
