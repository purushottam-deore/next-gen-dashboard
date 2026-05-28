import {
  Flame,
  BookOpen,
  Clock3
} from 'lucide-react'

import BentoCard from '../ui/BentoCard'

export default function HeroTile() {
  return (
    <BentoCard
      className="
        lg:col-span-2
        h-full
        relative
        overflow-hidden
        flex
        flex-col
        justify-between
        pt-8
      "
    >
      
      <div
        className="
          absolute
          -top-24
          -right-24
          h-64
          w-64
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-40
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      
      <div className="relative z-10">
        <p className="text-zinc-400 text-sm">
          Welcome back
        </p>

        <h1
          className="
            text-4xl
            lg:text-5xl
            font-bold
            mt-3
            tracking-tight
          "
        >
          Purushottam 👋
        </h1>

        <p
          className="
            text-zinc-400
            mt-4
            max-w-md
            leading-relaxed
          "
        >
          You're making incredible progress.
          Keep pushing forward and complete
          your learning goals today.
        </p>
      </div>

      
      <div
        className="
          relative
          z-10
          grid
          grid-cols-3
          gap-4
          mt-10
        "
      >
        <div
          className="
            rounded-2xl
            bg-zinc-900/70
            border
            border-zinc-800
            p-4
          "
        >
          <div className="flex items-center gap-2 text-orange-400">
            <Flame size={18} />
            <span className="text-sm">
              Streak
            </span>
          </div>

          <h2 className="text-2xl font-bold mt-3">
            18 Days
          </h2>
        </div>

        <div
          className="
            rounded-2xl
            bg-zinc-900/70
            border
            border-zinc-800
            p-4
          "
        >
          <div className="flex items-center gap-2 text-cyan-400">
            <BookOpen size={18} />
            <span className="text-sm">
              Courses
            </span>
          </div>

          <h2 className="text-2xl font-bold mt-3">
            4 Active
          </h2>
        </div>

        <div
          className="
            rounded-2xl
            bg-zinc-900/70
            border
            border-zinc-800
            p-4
          "
        >
          <div className="flex items-center gap-2 text-purple-400">
            <Clock3 size={18} />
            <span className="text-sm">
              Today
            </span>
          </div>

          <h2 className="text-2xl font-bold mt-3">
            3.2 hrs
          </h2>
        </div>
      </div>
    </BentoCard>
  )
}