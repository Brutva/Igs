'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Check, Save, Sparkles, Trophy } from 'lucide-react';

export function QuizSidebarSection({ score, currentQ, totalQuestions, progress, restored, bestScore }) {
  const router = useRouter();

  return (
    <aside className="quiz-sidebar lg:sticky lg:top-28 lg:h-fit">
      <button
        onClick={() => router.push('/')}
        className="group mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-5"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        На главную
      </button>

      <div className="premium-card rounded-[1.5rem] border border-border/50 p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.08] px-3 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">Квиз</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5">
            <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />
            <span className="text-sm font-semibold text-emerald-700">{score}</span>
          </div>
        </div>

        <h1 className="mb-2 text-2xl leading-tight text-foreground xl:text-[2rem]">Мини-квиз</h1>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          5 коротких вопросов, чтобы проверить, насколько хорошо ты разобрался в теме страхования.
        </p>

        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">Прогресс</span>
          <span className="text-muted-foreground">{currentQ + 1} / {totalQuestions}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/90 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }).map((_, idx) => (
            <div
              key={idx}
              className={`flex h-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ${
                idx < currentQ
                  ? 'bg-primary text-primary-foreground'
                  : idx === currentQ
                    ? 'border border-primary/20 bg-primary/[0.08] text-primary'
                    : 'bg-secondary text-muted-foreground'
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border/50 bg-secondary/45 p-4 text-sm text-muted-foreground">
          Сначала выбери ответ, потом проверь себя. Прогресс сохраняется автоматически.
        </div>

        {restored && (
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-700">
            <Save className="mt-0.5 h-4 w-4 flex-shrink-0" />
            Мы восстановили незавершённый квиз.
          </div>
        )}
      </div>

      <div className="premium-card mt-4 rounded-[1.5rem] border border-border/50 p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <Trophy className="h-4 w-4 text-amber-600" />
          Лучший результат
        </div>
        <div className="text-2xl font-bold text-foreground">{bestScore === null ? '—' : `${bestScore} / 5`}</div>
        <div className="mt-2 text-sm text-muted-foreground">После завершения квиза результат обновится автоматически.</div>
      </div>
    </aside>
  );
}
