'use client'
import { motion } from 'framer-motion'
import BentoCard from '../ui/BentoCard'
import { useMemo } from 'react'

export default function ActivityTile() {
  const activityData = [
  0,1,2,3,2,1,0,
  1,2,3,2,1,0,1,
  2,3,1,0,2,3,1,
  0,1,2,3,2,1,0,
  1,2,3,1,0,1,2,
]

  const colors = [
    'bg-zinc-800',
    'bg-cyan-900',
    'bg-cyan-700',
    'bg-cyan-500'
  ]

  return (
    <BentoCard className="min-h-[200px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-zinc-400 text-sm">
            Weekly Progress
          </p>

          <h2 className="text-2xl font-bold mt-1">
            Activity
          </h2>
        </div>

        <div className="text-right">
          <p className="text-3xl font-bold">
            84%
          </p>

          <p className="text-zinc-500 text-sm">
            consistency
          </p>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-5">
        {activityData.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.02,
              type: 'spring',
              stiffness: 200
            }}
            whileHover={{
              scale: 1.15
            }}
            className={`
              h-8
              rounded-md
              ${colors[level]}
            `}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 text-xs text-zinc-500">
        <span>Low</span>

        <div className="w-3 h-3 rounded bg-zinc-800" />
        <div className="w-3 h-3 rounded bg-cyan-900" />
        <div className="w-3 h-3 rounded bg-cyan-700" />
        <div className="w-3 h-3 rounded bg-cyan-500" />

        <span>High</span>
      </div>
    </BentoCard>
  )
}