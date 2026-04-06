import { Smartphone, Plane, Dumbbell } from 'lucide-react';

export const resultScenarioIconMap = {
  phone: Smartphone,
  travel: Plane,
  sport: Dumbbell,
};

export function getQuizResultMeta(score) {
  if (score <= 2) {
    return {
      title: 'Тему стоит повторить',
      text: 'Сначала пройди теорию или один из сценариев, потом возвращайся к квизу.',
      badge: 'border-red-100 bg-red-50 text-red-700',
      gradient: 'from-red-500 to-rose-500',
    };
  }

  if (score <= 4) {
    return {
      title: 'Ты уже понимаешь основы',
      text: 'База уже есть. Дальше полезно пройти сценарии и сравнить, как меняются результаты.',
      badge: 'border-sky-100 bg-sky-50 text-sky-700',
      gradient: 'from-sky-500 to-indigo-500',
    };
  }

  return {
    title: 'Отлично, ты разобрался',
    text: 'Сильный результат. Теперь сайт можно использовать как краткий практический гид.',
    badge: 'border-emerald-100 bg-emerald-50 text-emerald-700',
    gradient: 'from-emerald-500 to-teal-500',
  };
}

export function getRiskToneClass(riskEmoji) {
  if (riskEmoji === '🔴') {
    return 'border-red-100 bg-red-50 text-red-700';
  }
  if (riskEmoji === '🟡') {
    return 'border-amber-100 bg-amber-50 text-amber-700';
  }
  return 'border-emerald-100 bg-emerald-50 text-emerald-700';
}
