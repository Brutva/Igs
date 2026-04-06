'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles } from 'lucide-react';

export function TheoryHeroSection() {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => router.push('/')}
        className="group mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-8"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        На главную
      </button>

      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.08] px-3.5 py-1.5 text-sm font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Теория
      </div>

      <h1 className="mb-3 max-w-3xl text-[2rem] leading-tight text-foreground sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem]">
        Объясняем простыми словами
      </h1>
      <p className="max-w-2xl text-base text-muted-foreground sm:text-lg xl:text-xl">
        Здесь собраны базовые понятия, без которых сложно понять результаты сценариев и квиза.
      </p>
    </div>
  );
}
