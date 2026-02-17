'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Work {
  id: string
  title: string
  description: string
  short_description?: string
  images: string[]
  created_at: string
}

export function WorkCard({ work }: { work: Work }) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = work.images || []

  const nextImage = useCallback(() => {
    if (images.length > 1) {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [images.length, nextImage])

  const displayDescription = work.short_description || work.description
  const truncated = displayDescription.length > 120
    ? displayDescription.substring(0, 120) + '...'
    : displayDescription

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      {/* Image Slider */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {images.length > 0 ? (
          <>
            <Image
              src={images[currentImage]}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {images.length > 1 && (
              <div className="absolute bottom-3 right-1/2 translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImage ? 'w-6 bg-primary-foreground' : 'w-1.5 bg-primary-foreground/50'
                    }`}
                    aria-label={`عرض الصورة ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-2 line-clamp-1">{work.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{truncated}</p>
        <Button asChild variant="outline" className="w-full rounded-xl group/btn">
          <Link href={`/works/${work.id}`} className="flex items-center justify-center gap-2">
            عرض التفاصيل
            <ArrowLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
          </Link>
        </Button>
      </div>
    </article>
  )
}
