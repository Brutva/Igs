import { ChevronDown } from 'lucide-react';

export function TheoryAccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-primary/20 bg-card shadow-[0_4px_24px_oklch(0.52_0.22_264/0.08)]'
          : 'border-border/60 bg-card/50 hover:border-border hover:bg-card'
      }`}
    >
      <button onClick={onToggle} className="flex w-full items-start justify-between gap-4 p-4 text-left sm:p-5 lg:p-6">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div
            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 ${
              isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
            }`}
          >
            {index + 1}
          </div>
          <div className="min-w-0 pt-0.5">
            <div className="mb-1 text-[15px] font-semibold text-foreground sm:text-base">{item.title}</div>
            {!isOpen && <div className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{item.summary}</div>}
          </div>
        </div>

        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6 lg:pl-[4.75rem]">
            <p className="text-[15px] leading-relaxed text-foreground/80 sm:text-base">{item.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
