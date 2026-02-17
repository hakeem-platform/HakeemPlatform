import { Shield, Award, Clock, Lock, CheckCircle2, Users } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'سرية تامة ومضمونة',
    description: 'نلتزم بالحفاظ التام على خصوصية وسرية جميع بيانات العملاء وأعمالهم الأكاديمية دون أي استثناء.',
  },
  {
    icon: Award,
    title: 'جودة احترافية عالية',
    description: 'نضمن تقديم أعمال بأعلى معايير الجودة الأكاديمية من خلال فريق متخصص وذو خبرة واسعة.',
  },
  {
    icon: Clock,
    title: 'التزام بالمواعيد',
    description: 'نحرص على تسليم جميع الأعمال في الوقت المحدد مع إمكانية التعديل والمراجعة لضمان رضاكم.',
  },
  {
    icon: Lock,
    title: 'دقة في التنفيذ',
    description: 'نعمل بدقة متناهية في كل تفاصيل العمل الأكاديمي من البحث والتوثيق إلى التنسيق النهائي.',
  },
  {
    icon: Users,
    title: 'فريق متخصص',
    description: 'فريقنا يضم متخصصين أكاديميين في مختلف التخصصات لضمان تقديم أفضل خدمة ممكنة.',
  },
  {
    icon: CheckCircle2,
    title: 'دعم جميع الجامعات',
    description: 'نقدم خدماتنا لطلاب جميع الجامعات السعودية وبكافة التخصصات والأقسام الأكاديمية.',
  },
]

export function TrustSection() {
  return (
    <section className="py-24" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3">لماذا تختارنا</span>
          <h2 id="trust-heading" className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            نلتزم بالجودة والدقة والسرية التامة
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            نعمل بشغف لمساعدتك على التميز والنجاح الأكاديمي من خلال معايير عمل صارمة وفريق محترف
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
