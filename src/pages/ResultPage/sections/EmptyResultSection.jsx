export function EmptyResultSection() {
  return (
    <div className="result-page result-shell py-10">
      <div className="rounded-[1.75rem] border border-border/50 bg-card p-8 text-center shadow-[var(--card-shadow)] sm:p-10">
        <div className="mb-3 text-2xl font-bold text-foreground">Пока нет данных для результата</div>
        <p className="mb-6 text-muted-foreground">Сначала пройди сценарий или квиз, а потом возвращайся сюда.</p>
      </div>
    </div>
  );
}
