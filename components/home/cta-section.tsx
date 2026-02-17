import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center md:p-16 lg:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-primary-foreground/5 blur-3xl" />

          <div className="relative">
            <h2 id="cta-heading" className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              هل تحتاج مساعدة أكاديمية؟
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80 text-lg leading-relaxed">
              تواصل معنا الآن واحصل على خدمة أكاديمية احترافية تساعدك في تحقيق التميز والنجاح
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-xl px-8 text-base font-semibold">
                <Link href="/contact" className="flex items-center gap-2">
                  تواصل معنا
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-8 text-base font-semibold border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="tel:0541896297" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span dir="ltr">0541896297</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
