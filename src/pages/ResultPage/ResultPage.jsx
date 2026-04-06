'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getBestQuizScore,
  getCompletedScenarios,
  getLastQuizResult,
  getScenarioResultState,
} from '@/utils/appStorage';
import { EmptyResultSection } from './sections/EmptyResultSection';
import { QuizResultSection } from './sections/QuizResultSection';
import { ScenarioResultSection } from './sections/ScenarioResultSection';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') || 'scenario';
  const scenarioId = searchParams.get('id');

  const [scenarioAnswers, setScenarioAnswers] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [bestQuizScore, setBestQuizScore] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCompletedCount(getCompletedScenarios().length);
    setBestQuizScore(getBestQuizScore());

    if (mode === 'quiz') {
      setQuizScore(getLastQuizResult()?.score ?? null);
      return;
    }

    if (scenarioId) {
      setScenarioAnswers(getScenarioResultState(scenarioId));
    }
  }, [mode, scenarioId]);

  if (mode === 'quiz' && quizScore !== null) {
    return <QuizResultSection score={quizScore} bestScore={bestQuizScore} completedCount={completedCount} />;
  }

  if (scenarioId && scenarioAnswers) {
    return (
      <ScenarioResultSection
        scenarioId={scenarioId}
        answers={scenarioAnswers}
        completedCount={completedCount}
        bestQuizScore={bestQuizScore}
      />
    );
  }

  return <EmptyResultSection />;
}
