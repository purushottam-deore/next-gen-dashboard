'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function SidebarItem({
  icon: Icon,
  label,
  active,
  onClick
}: any) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        flex
        items-center
        justify-center
        lg:justify-start
        lg:gap-3
        gap-3
        px-5
        py-3
        rounded-xl
        text-zinc-300
        w-full
        overflow-hidden
      "
    >
      {active && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 bg-zinc-800 rounded-xl"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        />
      )}

      <Icon
        size={18}
        className="relative z-10 shrink-0"
      />

      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="
          relative
          z-10
          whitespace-nowrap
          hidden
          lg:block
         "
      >
        {label}
      </motion.span>
    </button>
  )
}