import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/home/cta-section'
import { WorkCard } from '@/components/work-card'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'أعمالنا',
  description: 'استعرض نماذج من أعمال منصة الحكيم للخدمات الطلابية - أبحاث أكاديمية ومشاريع جامعية وعروض تقديمية احترافية.',
  alternates: { canonical: 'https://hakeemplatform.com/works' },
}

export default async function WorksPage() {
  const supabase = await createClient()
  const { data: works } = await supabase
    .from('works')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30" aria-labelledby="works-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary mb-3">أعمالنا</span>
              <h1 id="works-heading" className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
                نماذج من أعمالنا المتميزة
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                نفتخر بتقديم أعمال أكاديمية بأعلى معايير الجودة والاحترافية. استعرض بعض نماذج أعمالنا السابقة.
              </p>
            </div>
          </div>
        </section>

        {/* Works Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            {works && works.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {works.map((work) => (
                  <WorkCard key={work.id} work={work} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
                  <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">لا توجد أعمال حالياً</h2>
                <p className="text-muted-foreground">سيتم إضافة أعمال جديدة قريباً</p>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
