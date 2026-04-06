'use client';

import { useRouter } from 'next/navigation';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  CircleGauge,
  ClipboardList,
  Home,
  Map,
  RotateCcw,
  Shield,
  Sparkles,
} from 'lucide-react';
import { scenarios, getScenarioAnalysis } from '@/data/insuranceData';
import { getRiskToneClass, resultScenarioIconMap } from '@/data/resultPageData';
import { RiskMeter } from '../components/RiskMeter';

export function ScenarioResultSection({ scenarioId, answers, completedCount, bestQuizScore }) {
  const router = useRouter();
  const scenario = scenarios.find((item) => item.id === scenarioId);
  const analysis = getScenarioAnalysis(scenarioId, answers);
  const Icon = resultScenarioIconMap[scenarioId];
  const riskTone = getRiskToneClass(analysis.riskEmoji);

  if (!scenario || !Icon) {
    return null;
  }

  return (
    <div className="result-page result-shell py-8 sm:py-10 lg:py-12 xl:py-14">
      <div className="result-grid grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)] xl:gap-8">
        <div className="result-sidebar lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-[1.75rem] border border-border/50 bg-card p-8 shadow-[var(--card-shadow)] sm:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/[0.08] px-3 py-1.5 text-sm font-semibold text-primary">
              <Icon className="h-4 w-4" />
              {scenario.title}
            </div>
            <div className="mb-4 text-2xl font-bold text-foreground">{analysis.title}</div>
            <RiskMeter score={analysis.score} label={analysis.riskLabel} emoji={analysis.riskEmoji} />
            <div className="mt-6 rounded-2xl border border-border/50 bg-secondary/40 p-4 text-sm leading-relaxed text-muted-foreground">
              {analysis.summary}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="result-top-grid grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
            <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <CircleGauge className="h-5 w-5 text-primary" />
                Почему результат именно такой
              </div>
              <div className="grid gap-3">
                {analysis.drivers.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <div className="text-[15px] leading-relaxed text-foreground sm:text-base">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="premium-card rounded-2xl border border-border/50 p-5">
                <div className={`mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${riskTone}`}>
                  {analysis.recommendationLevel}
                </div>
                <div className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">{analysis.recommendation}</div>
              </div>
              <div className="premium-card rounded-2xl border border-border/50 p-5">
                <div className="mb-2 text-sm font-semibold text-primary">Твой прогресс</div>
                <div className="text-sm text-muted-foreground">
                  Сценарии: <span className="font-semibold text-foreground">{completedCount}/3</span>
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  Лучший квиз: <span className="font-semibold text-foreground">{bestQuizScore ?? '—'}/5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="result-coverage-grid grid gap-4 xl:grid-cols-2">
            <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Shield className="h-5 w-5 text-emerald-600" />
                Что может покрываться
              </div>
              <div className="grid gap-3">
                {analysis.covered.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground sm:text-base">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                Что может не покрываться
              </div>
              <div className="grid gap-3">
                {analysis.exclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground sm:text-base">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
            <div className="mb-4 text-lg font-semibold text-foreground">Сравнение вариантов</div>
            <div className="result-plan-grid grid gap-4 xl:grid-cols-3">
              {analysis.plans.map((plan) => (
                <div key={plan.name} className={`rounded-2xl border p-4 sm:p-5 ${plan.recommended ? 'border-primary/20 bg-primary/[0.05]' : 'border-border/50 bg-card'}`}>
                  {plan.recommended && (
                    <div className="mb-3 inline-flex rounded-full border border-primary/10 bg-primary/[0.08] px-3 py-1 text-xs font-semibold text-primary">
                      Рекомендуемый вариант
                    </div>
                  )}
                  <div className="mb-2 text-base font-semibold text-foreground">{plan.name}</div>
                  <div className="text-sm leading-relaxed text-muted-foreground">{plan.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-bottom-grid grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <ClipboardList className="h-5 w-5 text-primary" />
                Чеклист перед выбором страховки
              </div>
              <div className="grid gap-3">
                {analysis.checklist.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/50 bg-card px-4 py-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-sm font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div className="text-[15px] leading-relaxed text-foreground sm:text-base">{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card rounded-2xl border border-border/50 p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                Твои ответы
              </div>
              <div className="grid gap-3">
                {analysis.answerSummary.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/50 bg-card px-4 py-3">
                    <div className="mb-1 text-xs uppercase tracking-[0.08em] text-muted-foreground">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="result-note rounded-2xl border border-border/50 bg-gradient-to-r from-secondary/80 to-secondary/50 p-5 sm:p-6">
            <p className="text-center text-[15px] text-muted-foreground sm:text-base">
              Это не финансовый совет. Главное — понимать риск, читать условия и принимать решение вместе с родителями.
            </p>
          </div>

          <div className="result-actions-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <button onClick={() => router.push('/scenarios')} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-primary to-primary/90 px-5 py-4 text-[15px] font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-95 active:scale-[0.98]">
              <Map className="h-4 w-4" />
              Пройти другой сценарий
            </button>
            <button onClick={() => router.push('/quiz')} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-secondary px-5 py-4 text-[15px] font-semibold text-secondary-foreground transition-all duration-200 hover:bg-secondary/80">
              <RotateCcw className="h-4 w-4" />
              Пройти квиз
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
