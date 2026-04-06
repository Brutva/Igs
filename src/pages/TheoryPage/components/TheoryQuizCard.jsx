'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, HelpCircle } from 'lucide-react';

export function TheoryQuizCard({ mobile = false }) {
  const router = useRouter();

  return (
    <div
      className={mobile
        ? 'theory-mobile-cta mt-8 rounded-[1.5rem] border border-primary/10 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-6 lg:hidden'
        : 'hidden lg:block lg:sticky lg:top-28'}
    >
      <div className={mobile ? '' : 'rounded-[1.5rem] border border-primary/10 bg-gradient-to-br from-primary/[0.06] to-primary/[0.02] p-6'}>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5">
          <HelpCircle className="h-6 w-6 text-primary" strokeWidth={2} />
        </div>

        <div className="mb-2 text-lg font-semibold text-foreground">{mobile ? 'Проверь себя' : 'После теории — квиз'}</div>
        <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">
          {mobile
            ? 'Пройди мини-квиз из 5 вопросов — это займёт меньше 3 минут.'
            : 'Сначала разберись в понятиях, потом закрепи знания в мини-квизе из 5 вопросов.'}
        </p>

        <button
          onClick={() => router.push('/quiz')}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-primary to-primary/90 px-5 py-3.5 font-semibold text-primary-foreground transition-all duration-200 hover:shadow-[var(--glow-primary)] active:scale-[0.98]"
        >
          Пройти квиз
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
