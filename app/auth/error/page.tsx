import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, ArrowRight } from 'lucide-react'

export default function AuthErrorPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 bg-background">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-6">
          <AlertTriangle className="h-8 w-8" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">خطأ في المصادقة</h1>
        <p className="text-muted-foreground mb-6">
          حدث خطأ أثناء عملية تسجيل الدخول. يرجى المحاولة مرة أخرى.
        </p>
        <Button asChild className="rounded-xl">
          <Link href="/auth/login" className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            العودة لتسجيل الدخول
          </Link>
        </Button>
      </div>
    </div>
  )
}
