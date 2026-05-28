import SkeletonCard from '@/components/ui/SkeletonCard'

export default function Loading() {
  return (
    <main className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}