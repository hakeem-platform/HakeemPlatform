import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Phone, Globe, MessageCircle, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'تواصل معنا',
  description: 'تواصل مع منصة الحكيم للخدمات الطلابية للحصول على خدمات أكاديمية احترافية. اتصل بنا الآن على 0541896297.',
  alternates: { canonical: 'https://hakeemplatform.com/contact' },
}

const contactInfo = [
  {
    icon: Phone,
    title: 'اتصل بنا',
    value: '0541896297',
    href: 'tel:0541896297',
    description: 'متاحون للرد على استفساراتكم',
  },
  {
    icon: MessageCircle,
    title: 'واتساب',
    value: '0541896297',
    href: 'https://wa.me/966541896297',
    description: 'تواصل معنا عبر الواتساب',
  },
  {
    icon: Globe,
    title: 'الموقع الإلكتروني',
    value: 'hakeemplatform.com',
    href: 'https://hakeemplatform.com',
    description: 'زر موقعنا الإلكتروني',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    value: 'على مدار الساعة',
    href: null,
    description: 'نعمل يوميا لخدمتكم',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30" aria-labelledby="contact-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary mb-3">تواصل معنا</span>
              <h1 id="contact-heading" className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
                نحن هنا لمساعدتك في تحقيق التميز
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                تواصل معنا الآن واحصل على استشارة مجانية حول خدماتنا الأكاديمية. فريقنا مستعد لمساعدتك في تحقيق أهدافك الأكاديمية.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">معلومات التواصل</h2>
                <div className="flex flex-col gap-6">
                  {contactInfo.map((item) => {
                    const Icon = item.icon
                    const content = (
                      <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-card-foreground">{item.title}</h3>
                          <p className="text-base font-medium text-foreground mt-1" dir={item.icon === Phone || item.icon === MessageCircle ? 'ltr' : 'rtl'}>{item.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    )
                    return item.href ? (
                      <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {content}
                      </a>
                    ) : (
                      <div key={item.title}>{content}</div>
                    )
                  })}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">أرسل لنا رسالة</h2>
                  <p className="text-muted-foreground mb-8">سنتواصل معك في أقرب وقت ممكن</p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
