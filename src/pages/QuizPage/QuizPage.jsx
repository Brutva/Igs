'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions } from '@/data/insuranceData';
import {
  clearQuizProgress,
  getBestQuizScore,
  getQuizProgress,
  saveBestQuizScore,
  saveLastQuizResult,
  saveQuizProgress,
} from '@/utils/appStorage';
import { QuizSidebarSection } from './sections/QuizSidebarSection';
import { QuizQuestionSection } from './sections/QuizQuestionSection';

export default function QuizPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [bestScore, setBestScore] = useState(null);
  const [restored, setRestored] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = getQuizProgress();
    if (saved) {
      setCurrentQ(saved.currentQ || 0);
      setSelected(saved.selected || null);
      setConfirmed(Boolean(saved.confirmed));
      setScore(saved.score || 0);
      setRestored(true);
    }

    setBestScore(getBestQuizScore());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveQuizProgress({ currentQ, selected, confirmed, score });
  }, [currentQ, selected, confirmed, score, hydrated]);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ + Number(Boolean(confirmed))) / quizQuestions.length) * 100;
  const isCorrect = selected === question.correctId;
  const isLast = currentQ === quizQuestions.length - 1;

  const handleSelect = (optionId) => {
    if (confirmed || animating) return;
    setSelected(optionId);
  };

  const handleConfirm = () => {
    if (!selected || confirmed) return;
    setConfirmed(true);
    if (selected === question.correctId) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!confirmed || animating) return;

    if (isLast) {
      clearQuizProgress();
      saveLastQuizResult(score);
      setBestScore(saveBestQuizScore(score));
      router.push('/result?mode=quiz');
      return;
    }

    setAnimating(true);
    setTimeout(() => {
      setCurrentQ((prev) => prev + 1);
      setSelected(null);
      setConfirmed(false);
      setAnimating(false);
    }, 260);
  };

  return (
    <main className="quiz-page min-h-screen bg-background">
      <div className="quiz-shell interactive-shell py-6 sm:py-8 lg:py-10 xl:py-12">
        <div className="quiz-layout grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[340px_minmax(0,1fr)] xl:gap-8 2xl:grid-cols-[380px_minmax(0,1fr)]">
          <QuizSidebarSection
            score={score}
            currentQ={currentQ}
            totalQuestions={quizQuestions.length}
            progress={progress}
            restored={restored}
            bestScore={bestScore}
          />

          <QuizQuestionSection
            question={question}
            currentQ={currentQ}
            totalQuestions={quizQuestions.length}
            selected={selected}
            confirmed={confirmed}
            isCorrect={isCorrect}
            isLast={isLast}
            animating={animating}
            onSelect={handleSelect}
            onConfirm={handleConfirm}
            onNext={handleNext}
          />
        </div>
      </div>
    </main>
  );
}
