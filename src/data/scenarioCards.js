import { Smartphone, Plane, Dumbbell } from "lucide-react";

export const scenarioCards = [
  {
    id: 'phone',
    icon: Smartphone,
    title: 'Телефон / техника',
    description: 'Разбился экран, потеря или кража устройства',
    lightBg: 'bg-gradient-to-br from-sky-50 to-blue-50',
    accent: 'text-sky-600',
    border: 'border-sky-100',
  },
  {
    id: 'travel',
    icon: Plane,
    title: 'Поездка / путешествие',
    description: 'Риски в дороге и когда страховка реально нужна',
    lightBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    id: 'sport',
    icon: Dumbbell,
    title: 'Спорт / активность',
    description: 'Когда травма становится реальным риском',
    lightBg: 'bg-gradient-to-br from-orange-50 to-rose-50',
    accent: 'text-orange-600',
    border: 'border-orange-100',
  },
];