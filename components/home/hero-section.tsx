'use client'

import Link from 'next/link'
import { ArrowLeft, Sparkles, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: 'جامعة سعودية', value: '+50' },
  { label: 'مشروع منجز', value: '+1000' },
  { label: 'عميل راضٍ', value: '+800' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            <span>منصة أكاديمية متخصصة وموثوقة</span>
          </div>

          {/* Main heading */}
          <h1 id="hero-heading" className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance max-w-5xl">
            <span className="block">شريكك الأكاديمي نحو</span>
            <span className="block mt-2 dark:gradient-text-gold gradient-text-light">
              التميز والنجاح
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            منصة الحكيم للخدمات الطلابية - متخصصون في إعداد الأبحاث الأكاديمية والمشاريع الجامعية والعروض التقديمية لجميع الجامعات السعودية بأعلى معايير الجودة والسرية التامة
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
              <Link href="/contact">
                اطلب خدمتك الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl px-8 text-base font-semibold">
              <Link href="/works">
                استعرض أعمالنا
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>سرية تامة</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span>جودة احترافية</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>دعم جميع التخصصات</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-extrabold text-foreground sm:text-4xl dark:gradient-text-gold gradient-text-light">{stat.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
