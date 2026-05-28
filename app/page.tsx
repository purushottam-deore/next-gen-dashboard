import Sidebar from '@/components/sidebar/sidebar'
import DashboardGrid from '@/components/dashboard/DashboardGrid'
import { supabase } from '@/lib/supabase'

export default async function HomePage() {
  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error('Failed to fetch courses')
  }

  return (
    <main className="min-h-screen bg-black flex">
      
      <Sidebar />

      <section className="flex-1 p-6 lg:p-8">
        <DashboardGrid courses={courses || []} />
      </section>
    </main>
  )
}