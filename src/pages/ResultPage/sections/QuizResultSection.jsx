'use client';

import { useRouter } from 'next/navigation';
import { Home, Lightbulb, Map, RotateCcw, Trophy } from 'lucide-react';
import { getQuizResultMeta } from '@/data/resultPageData';

export function QuizResultSection({ score, bestScore, completedCount }) {
  const router = useRouter();
  const total = 5;
  const meta = getQuizResultMeta(score);

  return (
    <div className="result-page result-shell py-8 sm:py-10 lg:py-12 xl:py-14">
      <div className="result-grid grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)] xl:gap-8">
        <div className="result-sidebar lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[1.75rem] border border-border/50 bg-card p-8 text-center shadow-[var(--card-shadow)] sm:p-10">
            <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${meta.gradient} shadow-lg`}>
              <Trophy className="h-7 w-7 text-white" />
            </div>
            <div className={`mb-4 inline-flex rounded-full border px-4 py-2 text-sm font-semibold ${meta.badge}`}>{meta.title}</div>
            <div className="mb-2 text-[3.6rem] font-bold leading-none text-foreground sm:text-[4.2rem]">
              {score}
              <span className="text-2xl font-normal text-muted-foreground"> / {total}</span>
            </div>
            <div className="text-muted-foreground">правильных ответов</div>
            <div className="mt-6 text-sm leading-relaxed text-muted-foreground">{meta.text}</div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="result-top-grid grid gap-4 xl:grid-cols-3">
            <div className="premium-card rounded-2xl border border-border/50 p-5">
              <div className="mb-2 text-sm font-semibold text-primary">Текущий результат</div>
              <div className="text-2xl font-bold text-foreground">{score} / 5</div>
            </div>
            <div className="premium-card rounded-2xl border border-border/50 p-5">
              <div className="mb-2 text-sm font-semibold text-primary">Лучший результат</div>
              <div className="text-2xl font-bold text-foreground">{bestScore ?? '—'} / 5</div>
            </div>
            <div className="premium-card rounded-2xl border border-border/50 p-5">
              <div className="mb-2 text-sm font-semibold text-primary">Пройдено сценариев</div>
              <div className="text-2xl font-bold text-foreground">{completedCount} / 3</div>
            </div>
          </div>

          <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              Что делать дальше
            </div>
            <div className="grid gap-3 text-[15px] text-muted-foreground sm:text-base">
              <div>• Пройди хотя бы один сценарий и посмотри, как сайт объясняет риск на практике.</div>
              <div>• Сравни теорию с результатом: так лучше видно, как работают страховой случай и выплата.</div>
              <div>• Повтори квиз после сценария — так закрепление будет сильнее.</div>
            </div>
          </div>

          <div className="result-actions-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <button onClick={() => router.push('/scenarios')} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-primary to-primary/90 px-5 py-4 text-[15px] font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-95 active:scale-[0.98]">
              <Map className="h-4 w-4" />
              Пройти сценарий
            </button>
            <button onClick={() => router.push('/quiz')} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-secondary px-5 py-4 text-[15px] font-semibold text-secondary-foreground transition-all duration-200 hover:bg-secondary/80">
              <RotateCcw className="h-4 w-4" />
              Повторить квиз
            </button>
            <button onClick={() => router.push('/')} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-[15px] font-semibold text-muted-foreground transition-all duration-200 hover:bg-secondary/50 hover:text-foreground sm:col-span-2 xl:col-span-1">
              <Home className="h-4 w-4" />
              На главную
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
