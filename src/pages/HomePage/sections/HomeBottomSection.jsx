'use client'

import { MythsGrid } from "../components/MythsGrid";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export function HomeBottomSection() {

  const router = useRouter();

  return (
    <section className="home-bottom-section app-shell pb-14 sm:pb-16 lg:pb-20">
      <div className="home-bottom-grid grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px] 2xl:grid-cols-[minmax(0,1fr)_480px]">
        <div className="premium-card rounded-[1.75rem] border border-border/50 p-6 sm:p-8">
          <div className="mb-2 text-sm font-semibold text-primary">Практика</div>
          <h2 className="mb-4 text-[1.7rem] leading-tight text-foreground sm:text-[2rem]">Почему этот сайт выглядит сильнее обычного учебного проекта</h2>
          <div className="grid gap-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            <div>• Есть реальные маршруты, а не одна страница с переключением состояний.</div>
            <div>• Сценарии сохраняют прогресс, поэтому пользователь может вернуться позже.</div>
            <div>• Результат показывает не только вывод, но и причины, сравнение вариантов и чеклист.</div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => router.push('/quiz')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-primary to-primary/90 px-5 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-primary)] active:scale-[0.98]"
            >
              Пройти квиз
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => router.push('/theory')}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-3.5 font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              Читать теорию
            </button>
          </div>
        </div>

        <MythsGrid />
      </div>
    </section>
  )
}