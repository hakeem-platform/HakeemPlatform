import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WorkDetailContent } from '@/components/work-detail-content'
import { createClient } from '@/lib/supabase/server'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const supabase = await createClient()
  const { data: work } = await supabase
    .from('works')
    .select('title, description, short_description')
    .eq('id', id)
    .single()

  if (!work) {
    return { title: 'عمل غير موجود' }
  }

  return {
    title: work.title,
    description: work.short_description || work.description?.substring(0, 160),
    alternates: { canonical: `https://hakeemplatform.com/works/${id}` },
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()
  const { data: work } = await supabase
    .from('works')
    .select('*')
    .eq('id', id)
    .single()

  if (!work) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        <WorkDetailContent work={work} />
      </main>
      <Footer />
    </>
  )
}
