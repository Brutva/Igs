'use client';

import { ArrowRight, CheckCircle2, Clock, PauseCircle } from 'lucide-react';
import { scenariosColorMap, scenariosIconMap } from '@/data/scenariosPageData';

export function ScenarioCard({ scenario, isDone, hasProgress, progressLabel, onOpen }) {
  const Icon = scenariosIconMap[scenario.id];
  const colors = scenariosColorMap[scenario.id];

  return (
    <button
      onClick={onOpen}
      className={`group premium-card rounded-[1.35rem] border border-border/50 p-5 text-left ring-2 ring-transparent transition-all duration-300 hover:-translate-y-1 active:translate-y-0 sm:p-6 xl:min-h-[290px] ${colors.ring}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.lightBg} transition-transform duration-300 group-hover:scale-105`}>
          <Icon className={`h-6 w-6 ${colors.accent}`} strokeWidth={2} />
        </div>

        <div className="flex flex-col items-end gap-2">
          {isDone && (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Пройдено
            </span>
          )}

          {hasProgress && !isDone && (
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-100 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
              <PauseCircle className="h-3.5 w-3.5" />
              В процессе
            </span>
          )}
        </div>
      </div>

      <span className={`mb-4 inline-block rounded-full border px-2.5 py-1 text-xs font-semibold ${colors.tag}`}>
        {scenario.subtitle}
      </span>

      <h2 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">{scenario.title}</h2>
      <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{scenario.description}</p>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {scenario.steps.length} вопроса
          </div>
          {progressLabel && <div>{progressLabel}</div>}
        </div>

        <div className={`flex items-center gap-1.5 text-sm font-semibold ${colors.accent}`}>
          {hasProgress ? 'Продолжить' : 'Начать'}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );
}
