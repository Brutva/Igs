export function getQuizOptionStyle({ confirmed, selected, optionId, correctId }) {
  if (!confirmed) {
    return selected === optionId
      ? 'bg-gradient-to-r from-primary to-primary/90 border-transparent text-primary-foreground shadow-lg shadow-primary/20'
      : 'bg-card border-border text-foreground hover:border-primary/20 hover:bg-secondary/30';
  }

  if (optionId === correctId) {
    return 'bg-gradient-to-r from-emerald-500 to-teal-500 border-transparent text-white shadow-lg shadow-emerald-500/20';
  }

  if (optionId === selected && selected !== correctId) {
    return 'bg-gradient-to-r from-red-500 to-rose-500 border-transparent text-white shadow-lg shadow-red-500/20';
  }

  return 'bg-card border-border text-muted-foreground opacity-40';
}
