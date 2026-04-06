import { AlertTriangle, Shield, Banknote } from "lucide-react"

export const conceptCards = [
  {
    icon: AlertTriangle,
    title: 'Риск',
    description: 'Вероятность того, что что-то может пойти не так и привести к потерям.',
    gradient: 'from-amber-500/10 to-orange-500/5',
    iconBg: 'bg-gradient-to-br from-amber-100 to-orange-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: Shield,
    title: 'Страховой случай',
    description: 'Конкретное событие из договора, при котором страховка начинает работать.',
    gradient: 'from-blue-500/10 to-indigo-500/5',
    iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Banknote,
    title: 'Страховая выплата',
    description: 'Деньги, которые страховая компания выплачивает по условиям полиса.',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    iconBg: 'bg-gradient-to-br from-emerald-100 to-teal-100',
    iconColor: 'text-emerald-600',
  },
];