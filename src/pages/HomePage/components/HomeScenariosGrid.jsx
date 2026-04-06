'use client'

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { scenarioCards } from "@/data/scenarioCards";

export function HomeScenariosGrid() {

  const router = useRouter();

  return (
    <div className="home-scenarios-grid grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
      {scenarioCards.map((scenario) => {
        const Icon = scenario.icon;
        return (
          <button
            key={scenario.id}
            onClick={() => router.push(`/scenarios/${scenario.id}`)}
            className={`group premium-card rounded-[1.35rem] border p-5 text-left transition-all duration-300 hover:-translate-y-1 sm:p-6 ${scenario.border}`}
          >
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${scenario.lightBg}`}>
              <Icon className={`h-6 w-6 ${scenario.accent}`} />
            </div>
            <div className="mb-2 text-lg font-semibold text-foreground sm:text-xl">{scenario.title}</div>
            <div className="mb-6 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{scenario.description}</div>
            <div className={`inline-flex items-center gap-1.5 text-sm font-semibold ${scenario.accent}`}>
              Начать сценарий
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        );
      })}
    </div>
  )
}