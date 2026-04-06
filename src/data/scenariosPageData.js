import { Smartphone, Plane, Dumbbell } from 'lucide-react';

export const scenariosIconMap = {
  phone: Smartphone,
  travel: Plane,
  sport: Dumbbell,
};

export const scenariosColorMap = {
  phone: {
    lightBg: 'bg-gradient-to-br from-sky-50 to-blue-50',
    accent: 'text-sky-600',
    tag: 'bg-sky-100/80 text-sky-700 border-sky-200/50',
    ring: 'group-hover:ring-sky-200',
  },
  travel: {
    lightBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    accent: 'text-emerald-600',
    tag: 'bg-emerald-100/80 text-emerald-700 border-emerald-200/50',
    ring: 'group-hover:ring-emerald-200',
  },
  sport: {
    lightBg: 'bg-gradient-to-br from-orange-50 to-rose-50',
    accent: 'text-orange-600',
    tag: 'bg-orange-100/80 text-orange-700 border-orange-200/50',
    ring: 'group-hover:ring-orange-200',
  },
};

export const scenariosHowItWorks = [
  '4 коротких вопроса без перегруза',
  'Персональный результат, а не общий текст',
  'Сохранение прогресса прямо в браузере',
];

export function getScenariosStats(completed, inProgress) {
  return {
    completedCount: completed.length,
    inProgressCount: Object.keys(inProgress).length,
  };
}
