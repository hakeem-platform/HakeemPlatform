'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Send, Loader2 } from 'lucide-react'

const serviceOptions = [
  'كتابة الأبحاث الأكاديمية',
  'المشاريع الجامعية',
  'العروض التقديمية',
  'التنسيق الأكاديمي',
  'تطوير المواقع',
  'الخدمات البرمجية',
  'أخرى',
]

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setIsLoading(false)
    toast.success('تم إرسال رسالتك بنجاح! سنتواصل معك قريبا.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input id="name" name="name" required placeholder="أدخل اسمك الكامل" className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">رقم الجوال</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="05XXXXXXXX" className="rounded-xl" dir="ltr" />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input id="email" name="email" type="email" placeholder="example@email.com" className="rounded-xl" dir="ltr" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="service">الخدمة المطلوبة</Label>
          <Select name="service">
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="اختر الخدمة" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="university">الجامعة والتخصص</Label>
        <Input id="university" name="university" placeholder="مثال: الجامعة السعودية الإلكترونية - الصحة العامة" className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">تفاصيل الطلب</Label>
        <Textarea id="message" name="message" required rows={5} placeholder="اكتب تفاصيل طلبك هنا..." className="rounded-xl resize-none" />
      </div>
      <Button type="submit" size="lg" className="rounded-xl font-semibold" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="ml-2 h-5 w-5 animate-spin" />
            جارٍ الإرسال...
          </>
        ) : (
          <>
            <Send className="ml-2 h-5 w-5" />
            إرسال الطلب
          </>
        )}
      </Button>
    </form>
  )
}
