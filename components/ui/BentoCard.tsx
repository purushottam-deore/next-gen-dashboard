'use client'

import { motion } from 'framer-motion'

export default function BentoCard({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className={`
        rounded-3xl
        border border-zinc-800
        hover:border-cyan-500/30
        transition-colors duration-300
        bg-gradient-to-br from-zinc-900 to-black
        p-6
        relative
        overflow-hidden
        shadow-2xl
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_40%)]" />
      <div className="relative z-10">{children}</div>
    </motion.article>
  )
}