import { Smartphone, Plane, Dumbbell } from 'lucide-react';
import { getAnswerLabel } from '@/data/insuranceData';

export const scenarioFlowIconMap = {
  phone: Smartphone,
  travel: Plane,
  sport: Dumbbell,
};

export const scenarioFlowColorMap = {
  phone: {
    primary: 'bg-gradient-to-r from-sky-500 to-blue-600',
    lightSurface: 'bg-sky-50',
    text: 'text-sky-700',
    border: 'border-sky-200',
    selected: 'bg-gradient-to-r from-sky-500 to-blue-600 border-transparent text-white shadow-lg shadow-sky-500/25',
    progress: 'from-sky-500 to-blue-600',
  },
  travel: {
    primary: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    lightSurface: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    selected: 'bg-gradient-to-r from-emerald-500 to-teal-600 border-transparent text-white shadow-lg shadow-emerald-500/25',
    progress: 'from-emerald-500 to-teal-600',
  },
  sport: {
    primary: 'bg-gradient-to-r from-orange-500 to-rose-500',
    lightSurface: 'bg-orange-50',
    text: 'text-orange-700',
    border: 'border-orange-200',
    selected: 'bg-gradient-to-r from-orange-500 to-rose-500 border-transparent text-white shadow-lg shadow-orange-500/25',
    progress: 'from-orange-500 to-rose-500',
  },
};

export function getScenarioAnswerPreview({ scenario, currentStep, scenarioId, answers }) {
  return (scenario?.steps || [])
    .slice(0, currentStep)
    .map((item) => ({
      label: item.question,
      value: getAnswerLabel(scenarioId, item.id, answers[item.id]),
    }))
    .filter((item) => item.value !== '—');
}
