import { Check, X } from 'lucide-react';
import { getQuizOptionStyle } from '@/data/quizPageData';

export function QuizOptionCard({ option, selected, confirmed, correctId, onSelect }) {
  const isSelected = selected === option.id;
  const isCorrectOption = confirmed && option.id === correctId;
  const isWrongSelected = confirmed && option.id === selected && selected !== correctId;
  const optionStyle = getQuizOptionStyle({
    confirmed,
    selected,
    optionId: option.id,
    correctId,
  });

  return (
    <button
      onClick={() => onSelect(option.id)}
      className={`group relative flex min-h-[78px] items-center justify-between gap-3 rounded-2xl border-2 px-4 py-4 text-left font-medium transition-all duration-200 sm:min-h-[90px] sm:px-5 ${optionStyle} ${confirmed ? 'cursor-default' : ''}`}
    >
      <span className="pr-2 text-[15px] leading-relaxed sm:text-base">{option.label}</span>

      {confirmed && isCorrectOption && (
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
          <Check className="h-4 w-4" strokeWidth={3} />
        </div>
      )}

      {confirmed && isWrongSelected && (
        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
          <X className="h-4 w-4" strokeWidth={3} />
        </div>
      )}

      {!confirmed && (
        <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${isSelected ? 'border-primary-foreground bg-white/20' : 'border-border group-hover:border-primary/30'}`}>
          {isSelected && <Check className="h-4 w-4" strokeWidth={3} />}
        </div>
      )}
    </button>
  );
}
