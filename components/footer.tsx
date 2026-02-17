import Link from 'next/link'
import { Phone, Globe, ArrowUp } from 'lucide-react'
import { Logo } from '@/components/logo'

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/works', label: 'أعمالنا' },
  { href: '/contact', label: 'تواصل معنا' },
]

const services = [
  'كتابة الأبحاث الأكاديمية',
  'المشاريع الجامعية',
  'العروض التقديمية',
  'التنسيق الأكاديمي',
  'تطوير المواقع',
  'الخدمات البرمجية',
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">الحكيم</span>
                <span className="text-xs text-muted-foreground leading-tight">للخدمات الطلابية</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              منصة متخصصة في تقديم الخدمات الطلابية والأكاديمية لجميع الجامعات السعودية بجودة عالية وسرية تامة.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:0541896297" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span dir="ltr">0541896297</span>
              </a>
              <a href="https://hakeemplatform.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                <span>hakeemplatform.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">روابط سريعة</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">خدماتنا</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">تواصل معنا</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              هل تحتاج مساعدة أكاديمية؟ تواصل معنا الآن وسنساعدك في تحقيق التميز الأكاديمي.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              تواصل الآن
              <ArrowUp className="h-4 w-4 rotate-[225deg]" />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            {'جميع الحقوق محفوظة'} &copy; {new Date().getFullYear()} {'منصة الحكيم للخدمات الطلابية'}
          </p>
          <p className="text-xs text-muted-foreground">
            {'صُنع بإتقان لخدمة طلاب المملكة العربية السعودية'}
          </p>
        </div>
      </div>
    </footer>
  )
}
