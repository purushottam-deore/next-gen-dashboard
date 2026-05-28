'use client'

import { motion } from 'framer-motion'
import BentoCard from '../ui/BentoCard'
import { icons } from '@/utils/icons'
import { Course } from '@/types/course'

export default function CourseCard({ course }: { course: Course }) {
  const Icon = icons[course.icon_name as keyof typeof icons]

  return (
    <BentoCard className="min-h-[220px]">
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-2xl bg-zinc-800">
          {Icon && <Icon size={24} />}
        </div>

        <p className="text-zinc-400 text-sm">
          {course.progress}%
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold leading-snug">
          {course.title}
        </h2>
      </div>

      <div className="mt-8 h-3 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20
          }}
          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
        />
      </div>
    </BentoCard>
  )
}