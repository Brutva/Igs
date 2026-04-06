export function ScenariosProgressCard({ stats }) {
  return (
    <div className="rounded-[1.5rem] border border-primary/10 bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] p-5">
      <div className="mb-2 text-sm font-semibold text-primary">Твой прогресс</div>
      <div className="text-[15px] text-foreground/80">
        Пройдено: <span className="font-semibold text-foreground">{stats.completedCount}/3</span>
      </div>
      <div className="mt-1 text-[15px] text-foreground/80">
        В процессе: <span className="font-semibold text-foreground">{stats.inProgressCount}</span>
      </div>
    </div>
  );
}
