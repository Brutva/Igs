'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Shield, Trophy, X } from 'lucide-react';
import { getProgressSnapshot } from '@/utils/appStorage';

const navItems = [
  { href: '/', label: 'Главная' },
  { href: '/scenarios', label: 'Сценарии' },
  { href: '/theory', label: 'Теория' },
  { href: '/quiz', label: 'Квиз' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState({ completedScenarios: [], bestQuizScore: null });

  useEffect(() => {
    setProgress(getProgressSnapshot());
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-border/50 glass">
      <div className="site-header-shell app-shell flex h-[72px] items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="site-header-brand flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-sm">
            <Shield className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <div className="truncate font-semibold text-foreground">СтрахПросто</div>
            <div className="hidden truncate text-xs text-muted-foreground sm:block">Интерактивный гид по страхованию</div>
          </div>
        </Link>

        <nav className="site-header-nav hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'bg-primary/[0.08] text-primary' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header-progress hidden items-center gap-2 lg:flex">
          <div className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700">
            Сценарии: {progress.completedScenarios?.length || 0}/3
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
            <Trophy className="h-3.5 w-3.5" />
            Лучший квиз: {progress.bestQuizScore ?? '—'}/5
          </div>
        </div>

        <button
          type="button"
          className="site-header-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Открыть меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="site-header-mobile border-t border-border/60 bg-background/98 lg:hidden">
          <div className="site-header-mobile-shell app-shell flex flex-col gap-3 py-4">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    active ? 'bg-primary/[0.08] text-primary' : 'bg-card text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="site-header-mobile-progress grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                Сценарии: {progress.completedScenarios?.length || 0}/3
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                Лучший квиз: {progress.bestQuizScore ?? '—'}/5
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
