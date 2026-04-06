import { Trophy, Clock3, BarChart3 } from 'lucide-react';

export const homeHeroSteps = [
  'Выбираешь ситуацию из реальной жизни',
  'Отвечаешь на 4 коротких вопроса',
  'Получаешь риск-скор, рекомендации и чеклист',
];

export function getHomeProgressCards(progress) {
  return [
    {
      label: 'Пройдено сценариев',
      value: `${progress.completedScenarios.length}/3`,
      icon: BarChart3,
    },
    {
      label: 'Лучший результат квиза',
      value: progress.bestQuizScore === null ? '— / 5' : `${progress.bestQuizScore} / 5`,
      icon: Trophy,
    },
    {
      label: 'Незавершённых шагов',
      value: String(progress.activeScenarioCount + (progress.hasQuizInProgress ? 1 : 0)),
      icon: Clock3,
    },
  ];
}
