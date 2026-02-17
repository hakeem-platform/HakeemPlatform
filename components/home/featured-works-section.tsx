import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/server'
import { WorkCard } from '@/components/work-card'

export async function FeaturedWorksSection() {
  const supabase = await createClient()
  const { data: works } = await supabase
    .from('works')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })
    .limit(6)

  if (!works || works.length === 0) {
    return null
  }

  return (
    <section className="py-24 bg-muted/30" aria-labelledby="featured-works-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 mb-12 sm:flex-row">
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-3">أعمالنا المميزة</span>
            <h2 id="featured-works-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
              نماذج من أعمالنا
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/works" className="flex items-center gap-2">
              عرض جميع الأعمال
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}
