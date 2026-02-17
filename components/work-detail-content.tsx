'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Calendar, Download, FileText, ImageIcon, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Attachment {
  name: string
  url: string
  type?: string
}

interface Work {
  id: string
  title: string
  description: string
  short_description?: string
  images: string[]
  attachments: Attachment[]
  featured: boolean
  created_at: string
}

export function WorkDetailContent({ work }: { work: Work }) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = work.images || []
  const attachments: Attachment[] = work.attachments || []

  const goNext = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const goPrev = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link href="/works" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowRight className="h-4 w-4" />
            العودة إلى الأعمال
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">{work.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={work.created_at}>
                  {new Date(work.created_at).toLocaleDateString('ar-SA', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {images.length > 0 && (
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[16/9] max-h-[500px]">
              <Image
                src={images[currentImage]}
                alt={`${work.title} - صورة ${currentImage + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background transition-colors glass-card"
                    aria-label="الصورة السابقة"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground hover:bg-background transition-colors glass-card"
                    aria-label="الصورة التالية"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 right-1/2 translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentImage ? 'w-8 bg-primary' : 'w-2 bg-foreground/30'
                        }`}
                        aria-label={`عرض الصورة ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail gallery */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`relative h-20 w-28 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentImage ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`عرض الصورة ${idx + 1}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" sizes="112px" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Description */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-8">
                <h2 className="text-xl font-bold text-card-foreground mb-6">وصف العمل</h2>
                <div className="prose prose-sm max-w-none text-muted-foreground leading-loose whitespace-pre-line">
                  {work.description}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Attachments */}
              {attachments.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6 mb-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    المرفقات
                  </h3>
                  <div className="flex flex-col gap-3">
                    {attachments.map((file, idx) => (
                      <a
                        key={idx}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-border p-3 hover:border-primary/30 hover:bg-muted/50 transition-all"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Download className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                          {file.type && <p className="text-xs text-muted-foreground">{file.type}</p>}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Images count */}
              {images.length > 0 && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2 flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    معرض الصور
                  </h3>
                  <p className="text-sm text-muted-foreground">{images.length} صورة</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
