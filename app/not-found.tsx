import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-32 text-center">
        <div className="mb-6">
          <Logo size="xl" showText={false} />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-3">الصفحة غير موجودة</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Button asChild className="rounded-xl">
          <Link href="/" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            العودة للرئيسية
          </Link>
        </Button>
      </main>
      <Footer />
    </>
  )
}
