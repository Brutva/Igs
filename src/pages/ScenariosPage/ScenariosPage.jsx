'use client';

import { useEffect, useState } from 'react';
import { scenarios } from '@/data/insuranceData';
import { getScenariosStats } from '@/data/scenariosPageData';
import { getCompletedScenarios, getScenarioProgress } from '@/utils/appStorage';
import { ScenariosHeroSection } from './sections/ScenariosHeroSection';
import { ScenariosGridSection } from './sections/ScenariosGridSection';
import { ScenariosFooterSection } from './sections/ScenariosFooterSection';

export default function ScenariosPage() {
  const [completed, setCompleted] = useState([]);
  const [inProgress, setInProgress] = useState({});

  useEffect(() => {
    setCompleted(getCompletedScenarios());

    const next = {};
    scenarios.forEach((scenario) => {
      const progress = getScenarioProgress(scenario.id);
      if (progress?.currentStep > 0 || progress?.selected) {
        next[scenario.id] = progress;
      }
    });
    setInProgress(next);
  }, []);

  const stats = getScenariosStats(completed, inProgress);

  return (
    <main className="scenarios-page min-h-screen bg-background">
      <div className="scenarios-shell app-shell py-8 sm:py-10 lg:py-12 xl:py-14">
        <ScenariosHeroSection stats={stats} />
        <ScenariosGridSection scenarios={scenarios} completed={completed} inProgress={inProgress} />
        <ScenariosFooterSection />
      </div>
    </main>
  );
}
