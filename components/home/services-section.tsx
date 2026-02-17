import { BookOpen, FileText, Presentation, AlignCenter, Globe, Code2, GraduationCap, Stethoscope } from 'lucide-react'

const mainServices = [
  {
    icon: BookOpen,
    title: 'كتابة الأبحاث الأكاديمية',
    description: 'إعداد أبحاث أكاديمية متكاملة بمعايير علمية عالية وتوثيق دقيق وفق أحدث المراجع المعتمدة.',
  },
  {
    icon: FileText,
    title: 'المشاريع الجامعية',
    description: 'تنفيذ المشاريع الجامعية بكافة أنواعها مع الالتزام بالمعايير والمتطلبات الأكاديمية المحددة.',
  },
  {
    icon: Presentation,
    title: 'العروض التقديمية',
    description: 'تصميم عروض تقديمية احترافية وجذابة تتوافق مع المعايير الأكاديمية وتلفت انتباه الحضور.',
  },
  {
    icon: AlignCenter,
    title: 'التنسيق الأكاديمي',
    description: 'تنسيق الأبحاث والرسائل العلمية وفق المعايير المعتمدة في الجامعات السعودية بدقة عالية.',
  },
  {
    icon: Globe,
    title: 'تطوير المواقع الإلكترونية',
    description: 'إنشاء مواقع إلكترونية احترافية وحديثة تلبي احتياجات المشاريع الطلابية والأكاديمية.',
  },
  {
    icon: Code2,
    title: 'الخدمات البرمجية',
    description: 'تقديم حلول برمجية متكاملة ومشاريع تقنية تدعم المتطلبات الأكاديمية والعملية للطلاب.',
  },
]

const specializations = [
  {
    icon: Stethoscope,
    title: 'قسم الصحة العامة',
  },
  {
    icon: GraduationCap,
    title: 'ماجستير التنفيذي لجودة الرعاية الصحية وسلامة المرضى',
  },
  {
    icon: GraduationCap,
    title: 'برنامج الماجستير في إدارة الرعاية الصحية',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3">خدماتنا المتميزة</span>
          <h2 id="services-heading" className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            خدمات أكاديمية شاملة بمعايير احترافية
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            نقدم مجموعة متكاملة من الخدمات الأكاديمية والتقنية لدعم مسيرتك التعليمية في جميع الجامعات السعودية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </article>
            )
          })}
        </div>

        {/* Specializations */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            متخصصون في دعم طلاب الجامعة السعودية الإلكترونية
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {specializations.map((spec) => {
              const Icon = spec.icon
              return (
                <div key={spec.title} className="flex items-center gap-3 rounded-xl bg-card/80 border border-border p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{spec.title}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
