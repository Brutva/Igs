import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ScenarioOptionCard } from '../components/ScenarioOptionCard';

export function ScenarioQuestionSection({
  scenario,
  step,
  currentStep,
  colors,
  selected,
  animating,
  isLast,
  onSelect,
  onBack,
  onNext,
}) {
  return (
    <section className={`scenario-main-card premium-card rounded-[1.75rem] border border-border/50 p-5 transition-all duration-300 sm:p-6 lg:p-8 xl:p-10 ${animating ? 'translate-x-3 opacity-0' : 'translate-x-0 opacity-100'}`}>
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">Вопрос {currentStep + 1} из {scenario.steps.length}</p>
          <h2 className="max-w-3xl text-[1.8rem] leading-tight text-foreground sm:text-[2rem] xl:text-[2.35rem]">{step.question}</h2>
        </div>
        <div className={`inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-semibold ${colors.lightSurface} ${colors.border} ${colors.text}`}>
          {scenario.subtitle}
        </div>
      </div>

      <div className="scenario-options-grid mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {step.options.map((option) => (
          <ScenarioOptionCard
            key={option.id}
            option={option}
            selected={selected}
            onSelect={onSelect}
            selectedClassName={colors.selected}
          />
        ))}
      </div>

      <div className="mb-8 text-sm text-muted-foreground">Нажми на вариант, потом переходи дальше. Сайт сам запомнит прогресс.</div>

      <div className="scenario-actions flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-3.5 font-semibold text-foreground transition-all duration-200 hover:bg-secondary lg:hidden"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад
        </button>

        <button
          onClick={onNext}
          disabled={!selected}
          className={`group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-300 sm:w-auto sm:min-w-[240px] ${selected ? `${colors.primary} text-white shadow-lg hover:opacity-95 active:scale-[0.98]` : 'cursor-not-allowed bg-secondary text-muted-foreground'}`}
        >
          {isLast ? 'Посмотреть результат' : 'Следующий вопрос'}
          <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${selected ? 'group-hover:translate-x-0.5' : ''}`} />
        </button>
      </div>
    </section>
  );
}
