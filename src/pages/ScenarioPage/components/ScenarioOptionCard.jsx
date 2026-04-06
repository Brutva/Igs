import { Check } from 'lucide-react';

export function ScenarioOptionCard({ option, selected, onSelect, selectedClassName }) {
  const isSelected = selected === option.id;

  return (
    <button
      onClick={() => onSelect(option.id)}
      className={`group relative flex min-h-[78px] items-center justify-between gap-3 rounded-2xl border-2 px-4 py-4 text-left font-medium transition-all duration-200 sm:min-h-[92px] sm:px-5 ${isSelected ? selectedClassName : 'bg-card text-foreground border-border hover:border-primary/20 hover:bg-secondary/30'}`}
    >
      <span className="pr-2 text-[15px] leading-relaxed sm:text-base">{option.label}</span>
      <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-200 ${isSelected ? 'bg-white/20' : 'border-2 border-border group-hover:border-primary/30'}`}>
        {isSelected && <Check className="h-4 w-4" strokeWidth={3} />}
      </div>
    </button>
  );
}
