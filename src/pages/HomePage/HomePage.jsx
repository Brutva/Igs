'use client';

import { useEffect, useState } from 'react';
import { getProgressSnapshot } from '@/utils/appStorage';
import { HomeHeroSection } from './sections/HomeHeroSection';
import { HomeBottomSection } from './sections/HomeBottomSection';
import { HomeConceptsSection } from './sections/HomeConceptsSection';
import { HomeScenariosSection } from './sections/HomeScenariosSection';

const initialProgress = {
  completedScenarios: [],
  bestQuizScore: null,
  activeScenarioCount: 0,
  hasQuizInProgress: false,
};

export default function HomePage() {
  const [progress, setProgress] = useState(initialProgress);

  useEffect(() => {
    setProgress(getProgressSnapshot());
  }, []);

  return (
    <main className="home-page min-h-screen">
      <HomeHeroSection progress={progress} />
      <HomeScenariosSection />
      <HomeConceptsSection />
      <HomeBottomSection />
    </main>
  );
}
