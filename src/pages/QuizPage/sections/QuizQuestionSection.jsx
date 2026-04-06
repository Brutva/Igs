import { ArrowRight, Check, HelpCircle } from 'lucide-react';
import { QuizOptionCard } from '../components/QuizOptionCard';

export function QuizQuestionSection({
  question,
  currentQ,
  totalQuestions,
  selected,
  confirmed,
  isCorrect,
  isLast,
  animating,
  onSelect,
  onConfirm,
  onNext,
}) {
  return (
    <section className={`quiz-main-card premium-card rounded-[1.75rem] border border-border/50 p-5 transition-all duration-300 sm:p-6 lg:p-8 xl:p-10 ${animating ? 'translate-x-3 opacity-0' : 'translate-x-0 opacity-100'}`}>
      <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-muted-foreground">Вопрос {currentQ + 1} из {totalQuestions}</p>
          <h2 className="max-w-3xl text-[1.8rem] leading-tight text-foreground sm:text-[2rem] xl:text-[2.35rem]">{question.question}</h2>
        </div>
        <div className="inline-flex items-center rounded-full border border-primary/10 bg-primary/[0.08] px-3 py-1.5 text-sm font-semibold text-primary">
          <HelpCircle className="mr-1 h-4 w-4" />
          Проверка знаний
        </div>
      </div>

      <div className="quiz-options-grid mb-5 grid grid-cols-1 gap-3 sm:gap-4">
        {question.options.map((option) => (
          <QuizOptionCard
            key={option.id}
            option={option}
            selected={selected}
            confirmed={confirmed}
            correctId={question.correctId}
            onSelect={onSelect}
          />
        ))}
      </div>

      {confirmed && (
        <div className={`mb-8 rounded-2xl border p-5 sm:p-6 ${isCorrect ? 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50' : 'border-red-100 bg-gradient-to-br from-red-50 to-rose-50'}`}>
          <div className={`mb-2 font-semibold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>{isCorrect ? 'Верно!' : 'Есть ошибка'}</div>
          <p className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">{question.explanation}</p>
        </div>
      )}

      <div className="quiz-actions flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {!confirmed ? (
          <button
            onClick={onConfirm}
            disabled={!selected}
            className={`group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all duration-300 sm:w-auto sm:min-w-[220px] ${selected ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/20 hover:opacity-95 active:scale-[0.98]' : 'cursor-not-allowed bg-secondary text-muted-foreground'}`}
          >
            Проверить
            <Check className="h-4 w-4" strokeWidth={3} />
          </button>
        ) : (
          <button
            onClick={onNext}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-primary to-primary/90 px-5 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:opacity-95 active:scale-[0.98] sm:w-auto sm:min-w-[220px]"
          >
            {isLast ? 'Посмотреть результат' : 'Следующий вопрос'}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        )}
      </div>
    </section>
  );
}
