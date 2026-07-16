import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SidebarNav } from "@/components/sidebar-nav"
import { CatalogClient } from "@/components/catalog-client"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata = {
  title: "Каталог учреждений — RosVuz",
  description: "Детские сады, школы, колледжи и вузы России. Поиск по городу, типу и рейтингу.",
}

export default function KindergartenPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Каталог учреждений" }]} />

        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance">Каталог учреждений</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
            Образовательные организации по всей России. Используйте фильтры, чтобы быстро найти подходящее учреждение.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-32 rounded-xl border border-border bg-card p-4">
              <SidebarNav />
            </div>
          </aside>
          <CatalogClient />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
