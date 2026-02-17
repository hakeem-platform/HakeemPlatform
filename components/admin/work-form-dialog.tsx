'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Loader2, Upload, X, ImageIcon } from 'lucide-react'
import Image from 'next/image'

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
  isOpen: boolean
  onClose: () => void
  onSave: (work: Work) => void
  editingWork: Work | null
}

export function WorkFormDialog({ isOpen, onClose, onSave, editingWork }: Props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [featured, setFeatured] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    if (editingWork) {
      setTitle(editingWork.title)
      setDescription(editingWork.description)
      setShortDescription(editingWork.short_description || '')
      setFeatured(editingWork.featured)
      setImages(editingWork.images || [])
      setAttachments((editingWork.attachments as Attachment[]) || [])
    } else {
      setTitle('')
      setDescription('')
      setShortDescription('')
      setFeatured(false)
      setImages([])
      setAttachments([])
    }
  }, [editingWork, isOpen])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setIsUploading(true)
    const supabase = createClient()

    try {
      const newImages: string[] = []
      for (const file of Array.from(files)) {
        const ext = file.name.split('.').pop()
        const path = `images/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`
        const { error } = await supabase.storage.from('works').upload(path, file)
        if (error) throw error
        const { data: urlData } = supabase.storage.from('works').getPublicUrl(path)
        newImages.push(urlData.publicUrl)
      }
      setImages((prev) => [...prev, ...newImages])
      toast.success('تم رفع الصور بنجاح')
    } catch {
      toast.error('حدث خطأ أثناء رفع الصور')
    } finally {
      setIsUploading(false)
      e.target.value = ''
    }
  }

  const handleAttachmentUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    setIsUploading(true)
    const supabase = createClient()

    try {
      const newAttachments: Attachment[] = []
      for (const file of Array.from(files)) {
        const ext = file.name.split('.').pop()
        const path = `attachments/${Date.now()}-${Math.random().toString(36).substring(2)}.${ext}`
        const { error } = await supabase.storage.from('works').upload(path, file)
        if (error) throw error
        const { data: urlData } = supabase.storage.from('works').getPublicUrl(path)
        newAttachments.push({ name: file.name, url: urlData.publicUrl, type: ext?.toUpperCase() })
      }
      setAttachments((prev) => [...prev, ...newAttachments])
      toast.success('تم رفع المرفقات بنجاح')
    } catch {
      toast.error('حدث خطأ أثناء رفع المرفقات')
    } finally {
      setIsUploading(false)
      e.target.value = ''
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      toast.error('يرجى ملء الحقول المطلوبة')
      return
    }
    setIsLoading(true)
    const supabase = createClient()

    try {
      const workData = {
        title: title.trim(),
        description: description.trim(),
        short_description: shortDescription.trim() || null,
        images,
        attachments,
        featured,
        updated_at: new Date().toISOString(),
      }

      if (editingWork) {
        const { data, error } = await supabase
          .from('works')
          .update(workData)
          .eq('id', editingWork.id)
          .select()
          .single()
        if (error) throw error
        onSave(data)
        toast.success('تم تحديث العمل بنجاح')
      } else {
        const { data, error } = await supabase
          .from('works')
          .insert(workData)
          .select()
          .single()
        if (error) throw error
        onSave(data)
        toast.success('تم إضافة العمل بنجاح')
      }
    } catch {
      toast.error('حدث خطأ أثناء الحفظ')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {editingWork ? 'تعديل العمل' : 'إضافة عمل جديد'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="work-title">عنوان العمل *</Label>
            <Input
              id="work-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="أدخل عنوان العمل"
              className="rounded-xl"
            />
          </div>

          {/* Short Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="work-short-desc">وصف مختصر</Label>
            <Input
              id="work-short-desc"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="وصف مختصر يظهر في بطاقة العمل"
              className="rounded-xl"
            />
          </div>

          {/* Full Description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="work-desc">الوصف الكامل *</Label>
            <Textarea
              id="work-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={6}
              placeholder="أدخل وصفاً تفصيلياً للعمل"
              className="rounded-xl resize-none"
            />
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <p className="text-sm font-medium text-foreground">عرض في الصفحة الرئيسية</p>
              <p className="text-xs text-muted-foreground">سيظهر هذا العمل في قسم الأعمال المميزة بالصفحة الرئيسية</p>
            </div>
            <Switch checked={featured} onCheckedChange={setFeatured} aria-label="عرض في الصفحة الرئيسية" />
          </div>

          {/* Images Upload */}
          <div className="flex flex-col gap-3">
            <Label>صور العمل</Label>
            <div className="flex flex-wrap gap-3">
              {images.map((img, idx) => (
                <div key={idx} className="relative h-24 w-24 rounded-xl overflow-hidden group">
                  <Image src={img} alt="" fill className="object-cover" sizes="96px" />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 left-1 h-6 w-6 rounded-full bg-destructive flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="حذف الصورة"
                  >
                    <X className="h-3 w-3 text-destructive-foreground" />
                  </button>
                </div>
              ))}
              <label className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                {isUploading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                ) : (
                  <>
                    <ImageIcon className="h-6 w-6 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">إضافة</span>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>

          {/* Attachments Upload */}
          <div className="flex flex-col gap-3">
            <Label>المرفقات (اختياري)</Label>
            {attachments.length > 0 && (
              <div className="flex flex-col gap-2">
                {attachments.map((file, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl border border-border p-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <Upload className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-foreground truncate">{file.name}</span>
                      {file.type && <span className="text-xs text-muted-foreground shrink-0">{file.type}</span>}
                    </div>
                    <button type="button" onClick={() => removeAttachment(idx)} className="text-muted-foreground hover:text-destructive-foreground" aria-label="حذف المرفق">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <label className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-dashed border-border p-4 hover:border-primary/50 transition-colors">
              <Upload className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">رفع ملفات (PDF, Word, ...)</span>
              <input
                type="file"
                multiple
                onChange={handleAttachmentUpload}
                className="hidden"
                disabled={isUploading}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.rar"
              />
            </label>
          </div>

          {/* Submit */}
          <div className="flex gap-3 justify-end">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-xl">
              إلغاء
            </Button>
            <Button type="submit" className="rounded-xl font-semibold" disabled={isLoading || isUploading}>
              {isLoading ? (
                <>
                  <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                  جارٍ الحفظ...
                </>
              ) : editingWork ? 'تحديث العمل' : 'إضافة العمل'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
