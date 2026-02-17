import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Shield, Award, Clock, Users, Target, Eye, GraduationCap, Stethoscope, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تعرف على منصة الحكيم للخدمات الطلابية - منصة أكاديمية متخصصة تقدم خدمات طلابية احترافية لجميع الجامعات السعودية بجودة عالية وسرية تامة.',
  alternates: { canonical: 'https://hakeemplatform.com/about' },
}

const values = [
  { icon: Shield, title: 'السرية التامة', description: 'نحافظ على خصوصية بياناتك وأعمالك الأكاديمية بالكامل.' },
  { icon: Award, title: 'الجودة العالية', description: 'نلتزم بأعلى معايير الجودة الأكاديمية في كل عمل نقدمه.' },
  { icon: Clock, title: 'الالتزام بالمواعيد', description: 'نسلم الأعمال في الوقت المحدد دون أي تأخير.' },
  { icon: Users, title: 'فريق متخصص', description: 'فريقنا يضم متخصصين أكاديميين ذوي خبرة واسعة.' },
]

const specializations = [
  { icon: Stethoscope, title: 'قسم الصحة العامة', description: 'دعم شامل لطلاب قسم الصحة العامة في جميع المتطلبات الأكاديمية.' },
  { icon: GraduationCap, title: 'ماجستير جودة الرعاية الصحية', description: 'ماجستير التنفيذي لجودة الرعاية الصحية وسلامة المرضى.' },
  { icon: GraduationCap, title: 'ماجستير إدارة الرعاية الصحية', description: 'برنامج الماجستير في إدارة الرعاية الصحية بالجامعة السعودية الإلكترونية.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-muted/30" aria-labelledby="about-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-sm font-semibold text-primary mb-3">من نحن</span>
              <h1 id="about-heading" className="text-4xl font-bold text-foreground sm:text-5xl text-balance">
                منصة الحكيم للخدمات الطلابية
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                منصة أكاديمية متخصصة في تقديم الخدمات الطلابية لجميع الجامعات السعودية وكل التخصصات والأقسام. نساعد الطلاب في إعداد الأبحاث الأكاديمية والمشاريع الجامعية والعروض التقديمية والتنسيق الأكاديمي بأعلى معايير الجودة والاحترافية.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">رسالتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم خدمات أكاديمية وطلابية متميزة تساعد الطلاب في المملكة العربية السعودية على تحقيق التميز الأكاديمي والنجاح في مسيرتهم التعليمية. نسعى لأن نكون الشريك الأكاديمي الأول والأكثر موثوقية من خلال التزامنا بالجودة والدقة والسرية التامة.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">رؤيتنا</h2>
                <p className="text-muted-foreground leading-relaxed">
                  أن نصبح المنصة الرائدة في تقديم الخدمات الطلابية والأكاديمية في المملكة العربية السعودية والوطن العربي. نطمح لبناء جسر بين الطلاب والتميز الأكاديمي من خلال تقديم حلول مبتكرة وخدمات احترافية تلبي جميع احتياجاتهم.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30" aria-labelledby="values-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="values-heading" className="text-3xl font-bold text-foreground sm:text-4xl">قيمنا الأساسية</h2>
              <p className="mt-4 text-muted-foreground">المبادئ التي نلتزم بها في تقديم خدماتنا</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="rounded-2xl border border-border bg-card p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-base font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-24" aria-labelledby="specializations-heading">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 id="specializations-heading" className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                تخصصاتنا في الجامعة السعودية الإلكترونية
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                نتميز بخبرة عميقة في دعم طلاب الجامعة السعودية الإلكترونية في التخصصات التالية
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {specializations.map((spec) => {
                const Icon = spec.icon
                return (
                  <div key={spec.title} className="rounded-2xl border border-primary/20 bg-primary/5 p-8 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{spec.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>متخصصون ومعتمدون</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
