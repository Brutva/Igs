export function ScenarioAnswerPreviewCard({ items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="premium-card mt-4 rounded-[1.5rem] border border-border/50 p-5">
      <div className="mb-3 text-sm font-semibold text-foreground">Уже выбрано</div>
      <div className="grid gap-3 text-sm text-muted-foreground">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 text-xs uppercase tracking-[0.08em] text-muted-foreground/80">{item.label}</div>
            <div className="font-medium text-foreground">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
