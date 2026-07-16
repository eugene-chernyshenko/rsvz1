import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomeHero } from "@/components/home/home-hero"
import { CategoryGrid } from "@/components/home/category-grid"
import { AffishaNews } from "@/components/home/affisha-news"
import { ServicesGrid } from "@/components/home/services-grid"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HomeHero />
        <CategoryGrid />
        <AffishaNews />
        <ServicesGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
