'use client';

import { useRouter } from 'next/navigation';
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  MonitorSmartphone,
} from 'lucide-react';
import { homeHeroSteps, getHomeProgressCards } from '@/data/homePageData';
import { HomeProgressGrid } from '../components/HomeProgressGrid';

export function HomeHeroSection({ progress }) {
  const router = useRouter();
  const progressCards = getHomeProgressCards(progress);

  return (
    <section className="home-hero relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ background: 'var(--hero-gradient)' }} />
      <div className="home-hero-grid app-shell relative grid gap-10 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:gap-12 lg:pb-24 lg:pt-20 xl:grid-cols-[minmax(0,1fr)_400px] 2xl:grid-cols-[minmax(0,1fr)_460px] 2xl:gap-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/10 bg-primary/[0.08] px-4 py-2 sm:mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Современный интерактивный гид</span>
          </div>

          <h1 className="mb-5 max-w-4xl text-[2.4rem] leading-[1.05] text-foreground sm:text-[3rem] md:text-[3.5rem] lg:text-[4.1rem] 2xl:text-[4.6rem]">
            Страхование{' '}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">простыми</span>{' '}
            словами
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl xl:max-w-xl 2xl:max-w-2xl">
            Выбирай жизненную ситуацию, отвечай на короткие вопросы и получай понятный вывод:
            где риск высокий, когда страховка может помочь и что стоит проверить до покупки.
          </p>

          <div className="home-actions mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              onClick={() => router.push('/scenarios')}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-primary to-primary/90 px-6 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[var(--glow-primary)] active:scale-[0.98] sm:w-auto sm:px-7"
            >
              Выбрать сценарий
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => router.push('/theory')}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-border bg-card px-6 py-4 font-semibold text-foreground transition-all duration-200 hover:border-border/80 hover:bg-secondary sm:w-auto sm:px-7"
            >
              <BookOpen className="h-4 w-4" />
              Объясняем простыми словами
            </button>
          </div>

          <HomeProgressGrid items={progressCards} />
        </div>

        <div className="home-highlight-grid grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <div className="premium-card rounded-[1.75rem] border border-border/50 p-5 sm:p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary">
              <MonitorSmartphone className="h-5 w-5" />
            </div>
            <div className="mb-1 text-lg font-semibold text-foreground">Как работает сайт</div>
            <div className="grid gap-3 text-sm text-muted-foreground sm:text-[15px]">
              {homeHeroSteps.map((step) => (
                <div key={step} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-primary/10 bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] p-5 sm:p-6">
            <div className="mb-3 text-sm font-semibold text-primary">Сильная сторона проекта</div>
            <div className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">
              Это не просто теория. Сайт показывает, как ответы пользователя влияют на результат,
              и помогает сравнить варианты: без страховки, с базовой или расширенной защитой.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
