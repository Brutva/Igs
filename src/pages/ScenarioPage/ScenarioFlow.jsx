'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { scenarios } from '@/data/insuranceData';
import { getScenarioAnswerPreview, scenarioFlowColorMap, scenarioFlowIconMap } from '@/data/scenarioFlowData';
import {
  clearScenarioProgress,
  saveScenarioProgress,
  saveScenarioResult,
  markScenarioComplete,
  getScenarioProgress,
} from '@/utils/appStorage';
import { ScenarioSidebarSection } from './sections/ScenarioSidebarSection';
import { ScenarioQuestionSection } from './sections/ScenarioQuestionSection';

export default function ScenarioFlow({ scenarioId }) {
  const router = useRouter();
  const scenario = scenarios.find((item) => item.id === scenarioId);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [isRestored, setIsRestored] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = getScenarioProgress(scenarioId);
    if (saved) {
      setCurrentStep(saved.currentStep || 0);
      setAnswers(saved.answers || {});
      setSelected(saved.selected || null);
      setIsRestored(true);
    }
    setHydrated(true);
  }, [scenarioId]);

  useEffect(() => {
    if (!hydrated) return;
    saveScenarioProgress(scenarioId, { currentStep, answers, selected });
  }, [scenarioId, currentStep, answers, selected, hydrated]);

  const totalSteps = scenario?.steps?.length || 0;
  const step = scenario?.steps?.[currentStep];
  const colors = scenarioFlowColorMap[scenarioId];
  const Icon = scenarioFlowIconMap[scenarioId];
  const isLast = totalSteps > 0 ? currentStep === totalSteps - 1 : false;
  const progress = totalSteps > 0 ? ((currentStep + Number(Boolean(selected))) / totalSteps) * 100 : 0;
  const answerPreview = getScenarioAnswerPreview({ scenario, currentStep, scenarioId, answers });

  const handleSelect = (optionId) => {
    if (animating) return;
    setSelected(optionId);
  };

  const handleNext = () => {
    if (!selected || animating) return;
    const newAnswers = { ...answers, [step.id]: selected };
    setAnswers(newAnswers);

    if (isLast) {
      clearScenarioProgress(scenarioId);
      saveScenarioResult(scenarioId, newAnswers);
      markScenarioComplete(scenarioId);
      router.push(`/result?mode=scenario&id=${scenarioId}`);
      return;
    }

    setAnimating(true);
    setTimeout(() => {
      const nextStepIndex = currentStep + 1;
      const nextStep = scenario.steps[nextStepIndex];
      setCurrentStep(nextStepIndex);
      setSelected(newAnswers[nextStep.id] || null);
      setAnimating(false);
    }, 260);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      router.push('/scenarios');
      return;
    }

    const previousStepIndex = currentStep - 1;
    const previousStep = scenario.steps[previousStepIndex];
    setCurrentStep(previousStepIndex);
    setSelected(answers[previousStep.id] || null);
  };

  if (!scenario || !step) {
    return null;
  }

  return (
    <main className="scenario-page min-h-screen bg-background">
      <div className="scenario-shell interactive-shell py-6 sm:py-8 lg:py-10 xl:py-12">
        <div className="scenario-layout grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-8 2xl:grid-cols-[380px_minmax(0,1fr)]">
          <ScenarioSidebarSection
            scenario={scenario}
            currentStep={currentStep}
            progress={progress}
            colors={colors}
            Icon={Icon}
            isRestored={isRestored}
            answerPreview={answerPreview}
            onBack={handleBack}
          />

          <ScenarioQuestionSection
            scenario={scenario}
            step={step}
            currentStep={currentStep}
            colors={colors}
            selected={selected}
            animating={animating}
            isLast={isLast}
            onSelect={handleSelect}
            onBack={handleBack}
            onNext={handleNext}
          />
        </div>
      </div>
    </main>
  );
}
