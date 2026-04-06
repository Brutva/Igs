import { myths } from "@/data/myths"
 
export function MythsGrid() {
  return (
    <div className="home-myths-grid grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
      {myths.map((item) => (
        <div key={item.title} className="rounded-[1.5rem] border border-border/50 bg-card p-5 sm:p-6">
          <div className={`mb-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${item.color}`}>{item.result}</div>
          <div className="text-base font-semibold text-foreground">{item.title}</div>
        </div>
      ))}
      </div>
  )
}