import { conceptCards } from "@/data/conceptCards";

export function HomeConceptsGrid() {
  return (
    <div className="home-concepts-grid grid gap-4 lg:grid-cols-3 lg:gap-5">
      {conceptCards.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="premium-card rounded-[1.5rem] border border-border/50 p-5 sm:p-6">
            <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}>
              <Icon className={`h-5 w-5 ${item.iconColor}`} />
            </div>
            <div className="mb-2 text-lg font-semibold text-foreground">{item.title}</div>
            <div className="text-[15px] leading-relaxed text-muted-foreground sm:text-base">{item.description}</div>
          </div>
        );
      })}
    </div>
  )
}