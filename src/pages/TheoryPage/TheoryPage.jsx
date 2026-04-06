'use client';

import { useState } from 'react';
import { theoryItems } from '@/data/insuranceData';
import { TheoryHeroSection } from './sections/TheoryHeroSection';
import { TheoryAccordionSection } from './sections/TheoryAccordionSection';
import { TheoryQuizCard } from './components/TheoryQuizCard';

export default function TheoryPage() {
  const [openId, setOpenId] = useState(theoryItems[0].id);

  const handleToggle = (itemId) => {
    setOpenId((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <main className="theory-page min-h-screen bg-background">
      <div className="theory-shell reading-shell py-8 sm:py-10 lg:py-12 xl:py-14">
        <div className="theory-top-grid mb-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-8">
          <TheoryHeroSection />
          <TheoryQuizCard />
        </div>

        <TheoryAccordionSection items={theoryItems} openId={openId} onToggle={handleToggle} />
        <TheoryQuizCard mobile />
      </div>
    </main>
  );
}
