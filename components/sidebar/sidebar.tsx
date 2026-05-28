'use client'

import { useState } from 'react'

import {
  Home,
  BookOpen,
  BarChart3,
  Settings
} from 'lucide-react'

import { motion } from 'framer-motion'

import SidebarItem from './SidebarItem'

export default function Sidebar() {

  const [activeItem, setActiveItem] =
    useState('Home')

  return (
    <>
      <motion.nav
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
        className="
        hidden
        md:flex
        w-[90px]
        lg:w-[260px]
        bg-zinc-950
        border-r
        border-zinc-900
        p-8
        flex-col
        gap-3
        min-h-screen
        overflow-hidden
      "
      >
        <SidebarItem
          icon={Home}
          label="Home"
          active={activeItem === 'Home'}
          onClick={() => setActiveItem('Home')}
        />

        <SidebarItem
          icon={BookOpen}
          label="Courses"
          active={activeItem === 'Courses'}
          onClick={() => setActiveItem('Courses')}
        />

        <SidebarItem
          icon={BarChart3}
          label="Analytics"
          active={activeItem === 'Analytics'}
          onClick={() => setActiveItem('Analytics')}
        />

        <SidebarItem
          icon={Settings}
          label="Settings"
          active={activeItem === 'Settings'}
          onClick={() => setActiveItem('Settings')}
        />
      </motion.nav>

      <nav
        className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        md:hidden
        flex
        items-center
        justify-around
        py-4
        bg-zinc-950/90
        backdrop-blur-xl
        border-t
        border-zinc-800
        pointer-event-none
      "
      >
        <div className="w-16">
          <SidebarItem
            icon={Home}
            label="Home1"
            active={activeItem === 'Home1'}
            onClick={() => setActiveItem('Home1')}
          />
        </div>

        <div className="w-16">
          <SidebarItem
            icon={BookOpen}
            label="Courses1"
            active={activeItem === 'Courses1'}
            onClick={() => setActiveItem('Courses1')}
          />
        </div>

        <div className="w-16">
          <SidebarItem
            icon={BarChart3}
            label="Analytics1"
            active={activeItem === 'Analytics1'}
            onClick={() => setActiveItem('Analytics1')}
          />
        </div>

        <div className="w-16">
          <SidebarItem
            icon={Settings}
            label="Settings1"
            active={activeItem === 'Settings1'}
            onClick={() => setActiveItem('Settings1')}
          />
        </div>
      </nav>
    </>
  )
}