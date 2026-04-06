'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import { ScenarioAnswerPreviewCard } from '../components/ScenarioAnswerPreviewCard';

export function ScenarioSidebarSection({
  scenario,
  currentStep,
  progress,
  colors,
  Icon,
  isRestored,
  answerPreview,
  onBack,
}) {
  const router = useRouter();

  const handleBack = () => {
    if (currentStep === 0) {
      router.push('/scenarios');
      return;
    }

    onBack();
  };

  return (
    <aside className="scenario-sidebar lg:sticky lg:top-28 lg:h-fit">
      <button
        onClick={handleBack}
        className="group mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:mb-5"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        {currentStep === 0 ? 'К сценариям' : 'Назад'}
      </button>

      <div className="premium-card rounded-[1.5rem] border border-border/50 p-5 sm:p-6">
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${colors.lightSurface} ${colors.border}`}>
          <Icon className={`h-4 w-4 ${colors.text}`} strokeWidth={2} />
          <span className={`text-sm font-semibold ${colors.text}`}>{scenario.title}</span>
        </div>

        <h1 className="mb-2 text-2xl leading-tight text-foreground xl:text-[2rem]">{scenario.title}</h1>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{scenario.description}</p>

        <div className="mb-3 flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">Прогресс</span>
          <span className="text-muted-foreground">{currentStep + 1} / {scenario.steps.length}</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div className={`h-full rounded-full bg-gradient-to-r ${colors.progress} transition-all duration-500 ease-out`} style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-4 flex justify-between gap-2">
          {scenario.steps.map((_, idx) => (
            <div
              key={idx}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 sm:h-9 sm:w-9 ${
                idx < currentStep
                  ? `${colors.primary} text-white`
                  : idx === currentStep
                    ? `${colors.lightSurface} ${colors.text} border ${colors.border}`
                    : 'bg-secondary text-muted-foreground'
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border/50 bg-secondary/45 p-4 text-sm text-muted-foreground">
          Выбери один вариант ответа. Прогресс сохраняется автоматически.
        </div>

        {isRestored && (
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-700">
            <Save className="mt-0.5 h-4 w-4 flex-shrink-0" />
            Мы нашли сохранённый прогресс и восстановили шаги.
          </div>
        )}
      </div>

      <ScenarioAnswerPreviewCard items={answerPreview} />
    </aside>
  );
}
