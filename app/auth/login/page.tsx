'use client'

import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/logo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push('/admin')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'حدث خطأ أثناء تسجيل الدخول')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 bg-background">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <div className="flex justify-center mb-4">
            <Link href="/" aria-label="العودة للرئيسية">
              <Logo size="lg" showText={false} />
            </Link>
          </div>
          <Card className="rounded-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
              <CardDescription>
                أدخل بياناتك للوصول إلى لوحة التحكم
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-xl"
                      dir="ltr"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive-foreground">{error}</p>}
                  <Button type="submit" className="w-full rounded-xl font-semibold" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        جارٍ تسجيل الدخول...
                      </>
                    ) : 'تسجيل الدخول'}
                  </Button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ArrowRight className="h-4 w-4" />
                  العودة للموقع
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
