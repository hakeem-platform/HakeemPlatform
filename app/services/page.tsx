import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/home/cta-section'
import { BookOpen, FileText, Presentation, AlignCenter, Globe, Code2, ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'خدماتنا',
  description: 'خدمات منصة الحكيم الأكاديمية والطلابية - كتابة الأبحاث، المشاريع الجامعية، العروض التقديمية، التنسيق الأكاديمي، تطوير المواقع والخدمات البرمجية.',
  alternates: { canonical: 'https://hakeemplatform.com/services' },
}

const services = [
  {
    icon: BookOpen,
    title: 'كتابة الأبحاث الأكاديمية',
    description: 'نقدم خدمة إعداد الأبحاث الأكاديمية بمعايير علمية عالية تشمل التوثيق الدقيق والمراجع المعتمدة.',
    features: ['بحوث علمية متكاملة', 'توثيق بنظام APA و Harvard', 'مراجع حديثة ومعتمدة', 'مراجعة لغوية شاملة', 'تقرير فحص الاقتباس'],
  },
  {
    icon: FileText,
    title: 'المشاريع الجامعية',
    description: 'تنفيذ المشاريع الجامعية بكافة أنواعها مع الالتزام بالمعايير والمتطلبات الأكاديمية.',
    features: ['مشاريع التخرج', 'الواجبات والتكليفات', 'دراسات الحالة', 'التقارير الأكاديمية', 'مشاريع المجموعات'],
  },
  {
    icon: Presentation,
    title: 'العروض التقديمية',
    description: 'تصميم عروض تقديمية احترافية وجذابة تتوافق مع المعايير الأكاديمية.',
    features: ['تصميم احترافي', 'رسوم بيانية وإنفوجرافيك', 'انتقالات سلسة', 'متوافقة مع المعايير الأكاديمية', 'تنسيق المحتوى'],
  },
  {
    icon: AlignCenter,
    title: 'التنسيق الأكاديمي',
    description: 'تنسيق الأبحاث والرسائل العلمية وفق المعايير المعتمدة في الجامعات السعودية.',
    features: ['تنسيق حسب دليل الجامعة', 'جدول المحتويات', 'قائمة المراجع', 'الهوامش والتذييلات', 'تنسيق الجداول والأشكال'],
  },
  {
    icon: Globe,
    title: 'تطوير المواقع الإلكترونية',
    description: 'إنشاء مواقع إلكترونية احترافية وحديثة تلبي احتياجات المشاريع الطلابية.',
    features: ['تصميم متجاوب', 'واجهة مستخدم حديثة', 'تحسين محركات البحث', 'أداء عالي', 'دعم فني مستمر'],
  },
  {
    icon: Code2,
    title: 'الخدمات البرمجية',
    description: 'تقديم حلول برمجية متكاملة ومشاريع تقنية تدعم المتطلبات الأكاديمية.',
    features: ['تطبيقات ويب', 'مشاريع برمجية', 'قواعد بيانات', 'تحليل البيانات', 'حلول تقنية متكاملة'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30" aria-labelledby="services-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary mb-3">خدماتنا</span>
              <h1 id="services-heading" className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
                خدمات أكاديمية شاملة بمعايير عالمية
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                نقدم مجموعة متكاملة من الخدمات الأكاديمية والتقنية المصممة لدعم مسيرتك التعليمية في جميع الجامعات السعودية وكافة التخصصات.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-12">
              {services.map((service, index) => {
                const Icon = service.icon
                const isEven = index % 2 === 0
                return (
                  <article
                    key={service.title}
                    className={`flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 lg:flex-row lg:p-10 ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                      <Button asChild className="rounded-xl">
                        <Link href="/contact" className="flex items-center gap-2">
                          اطلب هذه الخدمة
                          <ArrowLeft className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="rounded-xl bg-muted/50 p-6">
                        <h3 className="text-sm font-semibold text-foreground mb-4">ما يشمله هذا الخدمة:</h3>
                        <ul className="flex flex-col gap-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
