import { HomeConceptsGrid } from "../components/HomeConceptsGrid";

export function HomeConceptsSection() {
  return (
    <section className="home-concepts-section app-shell pb-8 sm:pb-12 lg:pb-14">
      <div className="mb-6 text-center">
        <div className="mb-2 text-sm font-semibold text-primary">База</div>
        <h2 className="section-heading text-foreground">Три понятия, без которых сайт не понять</h2>
      </div>
      <HomeConceptsGrid />
    </section>
  )
}
