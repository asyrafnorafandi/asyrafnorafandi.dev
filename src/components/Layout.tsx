
import { FixedSidebar } from '@/components/FixedSidebar'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Timeline } from '@/components/Timeline'
import { Intro } from '@/components/Intro';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FixedSidebar main={<Intro />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </>
  )
}
