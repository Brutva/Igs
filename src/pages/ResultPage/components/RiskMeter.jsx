export function RiskMeter({ score, label, emoji }) {
  const angle = Math.max(0, Math.min(100, score));
  const background = `conic-gradient(oklch(0.52 0.22 264) ${angle * 3.6}deg, oklch(0.93 0.01 258) 0deg)`;

  return (
    <div className="mx-auto flex w-full max-w-[220px] flex-col items-center">
      <div className="relative flex h-40 w-40 items-center justify-center rounded-full" style={{ background }}>
        <div className="absolute inset-[12px] rounded-full bg-background shadow-[inset_0_0_0_1px_oklch(0.89_0.01_258)]" />
        <div className="relative z-10 text-center">
          <div className="text-3xl font-bold text-foreground">{score}</div>
          <div className="mt-1 text-sm text-muted-foreground">из 100</div>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
        <span>{emoji}</span>
        Риск: {label}
      </div>
    </div>
  );
}
