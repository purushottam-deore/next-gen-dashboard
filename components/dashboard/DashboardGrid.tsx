'use client'
import { motion,Variants } from 'framer-motion'
import HeroTile from './HeroTile'
import ActivityTile from './ActivityTile'
import CourseCard from './CourseCard'
import { Course } from '@/types/course'

const container:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const item:Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  }
}

export default function DashboardGrid({
  courses
}: {
  courses: Course[]
}) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
    >
      <motion.div
        variants={item}
        className="lg:col-span-2 h-full"
      >
        <HeroTile />
      </motion.div>

      <motion.div variants={item}>
        <ActivityTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
        >
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.section>
  )
}