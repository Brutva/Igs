'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { scenariosHowItWorks } from '@/data/scenariosPageData';
import { ScenariosProgressCard } from '../components/ScenariosProgressCard';

export function ScenariosHeroSection({ stats }) {
  const router = useRouter();

  return (
    <div className="scenarios-top-grid mb-8 grid gap-6 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end xl:grid-cols-[minmax(0,1fr)_380px]">
      <div>
        <button
          onClick={() => router.push('/')}
          className="group mb-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          На главную
        </button>

        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.08] px-3.5 py-1.5 text-sm font-medium text-primary">
          Сценарии
        </div>

        <h1 className="mb-3 max-w-3xl text-[2rem] leading-tight text-foreground sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3.1rem]">
          Выбери свою ситуацию
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg xl:text-xl">
          Каждый сценарий даёт не просто ответ, а риск-скор, причины результата, сравнение вариантов и практический чеклист.
        </p>
      </div>

      <div className="scenarios-side-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="premium-card rounded-[1.5rem] border border-border/50 p-5">
          <div className="mb-3 text-sm font-semibold text-foreground">Как это работает</div>
          <div className="grid gap-2.5 text-sm text-muted-foreground">
            {scenariosHowItWorks.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <ScenariosProgressCard stats={stats} />
      </div>
    </div>
  );
}
