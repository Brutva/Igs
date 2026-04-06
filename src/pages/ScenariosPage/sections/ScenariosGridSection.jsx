'use client';

import { useRouter } from 'next/navigation';
import { ScenarioCard } from '../components/ScenarioCard';

export function ScenariosGridSection({ scenarios, completed, inProgress }) {
  const router = useRouter();

  return (
    <div className="scenarios-cards-grid mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
      {scenarios.map((scenario) => {
        const isDone = completed.includes(scenario.id);
        const hasProgress = Boolean(inProgress[scenario.id]);
        const progressLabel = hasProgress
          ? `Шаг ${Math.min((inProgress[scenario.id].currentStep || 0) + 1, scenario.steps.length)} из ${scenario.steps.length}`
          : null;

        return (
          <ScenarioCard
            key={scenario.id}
            scenario={scenario}
            isDone={isDone}
            hasProgress={hasProgress}
            progressLabel={progressLabel}
            onOpen={() => router.push(`/scenarios/${scenario.id}`)}
          />
        );
      })}
    </div>
  );
}
