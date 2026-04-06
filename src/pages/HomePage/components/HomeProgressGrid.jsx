export function HomeProgressGrid({ items }) {
  return (
    <div className="home-progress-grid grid gap-3 sm:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="premium-card rounded-2xl border border-border/50 p-4 sm:p-5">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <div className="text-2xl font-bold text-foreground sm:text-[1.9rem]">{item.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}
