'use client'

import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Edit3, Trash2, Star, ImageIcon, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'

interface Attachment {
  name: string
  url: string
  type?: string
}

interface Work {
  id: string
  title: string
  description: string
  short_description?: string
  images: string[]
  attachments: Attachment[]
  featured: boolean
  created_at: string
}

interface Props {
  works: Work[]
  onEdit: (work: Work) => void
  onDelete: (id: string) => void
  onToggleFeatured: (id: string, featured: boolean) => void
}

export function WorksList({ works, onEdit, onDelete, onToggleFeatured }: Props) {
  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا العمل؟')) return
    const supabase = createClient()
    const { error } = await supabase.from('works').delete().eq('id', id)
    if (error) {
      toast.error('حدث خطأ أثناء الحذف')
      return
    }
    onDelete(id)
    toast.success('تم حذف العمل بنجاح')
  }

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    const supabase = createClient()
    const { error } = await supabase.from('works').update({ featured }).eq('id', id)
    if (error) {
      toast.error('حدث خطأ أثناء التحديث')
      return
    }
    onToggleFeatured(id, featured)
    toast.success(featured ? 'تم إضافة العمل للصفحة الرئيسية' : 'تم إزالة العمل من الصفحة الرئيسية')
  }

  if (works.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl border border-dashed border-border">
        <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold text-foreground mb-1">لا توجد أعمال</h2>
        <p className="text-sm text-muted-foreground">أضف أول عمل لك من خلال زر &ldquo;إضافة عمل جديد&rdquo;</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {works.map((work) => (
        <div key={work.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center">
          {/* Image */}
          <div className="relative h-24 w-32 shrink-0 rounded-xl overflow-hidden bg-muted">
            {work.images && work.images.length > 0 ? (
              <Image src={work.images[0]} alt={work.title} fill className="object-cover" sizes="128px" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-card-foreground truncate">{work.title}</h3>
              {work.featured && (
                <Star className="h-4 w-4 shrink-0 text-primary fill-primary" />
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-1">{work.short_description || work.description}</p>
            <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{work.images?.length || 0} صورة</span>
              <span>{(work.attachments as Attachment[])?.length || 0} مرفق</span>
              <span>{new Date(work.created_at).toLocaleDateString('ar-SA')}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">الرئيسية</span>
              <Switch
                checked={work.featured}
                onCheckedChange={(checked) => handleToggleFeatured(work.id, checked)}
                aria-label="عرض في الصفحة الرئيسية"
              />
            </div>
            <Button asChild variant="ghost" size="icon" className="rounded-xl">
              <Link href={`/works/${work.id}`} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => onEdit(work)}>
              <Edit3 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl text-destructive-foreground" onClick={() => handleDelete(work.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
