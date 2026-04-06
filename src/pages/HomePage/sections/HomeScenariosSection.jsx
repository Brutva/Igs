'use client'

import { HomeScenariosGrid } from "../components/HomeScenariosGrid"
import { useRouter } from "next/navigation"

export function HomeScenariosSection() {
  const router = useRouter();
  return (
    <section className="home-scenarios-section app-shell pb-8 sm:pb-12 lg:pb-14">
      <div className="home-section-head mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 text-sm font-semibold text-primary">Сценарии</div>
          <h2 className="section-heading text-foreground">Где страхование встречается в жизни</h2>
        </div>
        <button
          onClick={() => router.push('/scenarios')}
          className="hidden rounded-2xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80 sm:inline-flex"
        >
          Смотреть все
        </button>
      </div>
      <HomeScenariosGrid />
    </section>
  )
}