'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { GraduationCap, Plus, LogOut, Moon, Sun, LayoutDashboard } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { WorksList } from './works-list'
import { WorkFormDialog } from './work-form-dialog'

interface Work {
  id: string
  title: string
  description: string
  short_description?: string
  images: string[]
  attachments: { name: string; url: string; type?: string }[]
  featured: boolean
  created_at: string
}

export function AdminDashboard({ initialWorks }: { initialWorks: Work[] }) {
  const [works, setWorks] = useState<Work[]>(initialWorks)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingWork, setEditingWork] = useState<Work | null>(null)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const handleWorkSaved = (work: Work) => {
    if (editingWork) {
      setWorks((prev) => prev.map((w) => (w.id === work.id ? work : w)))
    } else {
      setWorks((prev) => [work, ...prev])
    }
    setIsFormOpen(false)
    setEditingWork(null)
  }

  const handleEdit = (work: Work) => {
    setEditingWork(work)
    setIsFormOpen(true)
  }

  const handleDelete = (id: string) => {
    setWorks((prev) => prev.filter((w) => w.id !== id))
  }

  const handleToggleFeatured = (id: string, featured: boolean) => {
    setWorks((prev) => prev.map((w) => (w.id === id ? { ...w, featured } : w)))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 glass-card">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LayoutDashboard className="h-4 w-4" />
              <span className="font-medium text-foreground">لوحة التحكم</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-xl"
              aria-label="تبديل الوضع"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="rounded-xl text-muted-foreground">
              <LogOut className="h-4 w-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">إجمالي الأعمال</p>
            <p className="text-3xl font-bold text-card-foreground mt-1">{works.length}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">أعمال مميزة (الرئيسية)</p>
            <p className="text-3xl font-bold text-card-foreground mt-1">{works.filter((w) => w.featured).length}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground">أعمال عادية</p>
            <p className="text-3xl font-bold text-card-foreground mt-1">{works.filter((w) => !w.featured).length}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">إدارة الأعمال</h1>
          <Button
            onClick={() => { setEditingWork(null); setIsFormOpen(true) }}
            className="rounded-xl font-semibold"
          >
            <Plus className="ml-2 h-4 w-4" />
            إضافة عمل جديد
          </Button>
        </div>

        {/* Works List */}
        <WorksList
          works={works}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleFeatured={handleToggleFeatured}
        />
      </main>

      {/* Form Dialog */}
      <WorkFormDialog
        isOpen={isFormOpen}
        onClose={() => { setIsFormOpen(false); setEditingWork(null) }}
        onSave={handleWorkSaved}
        editingWork={editingWork}
      />
    </div>
  )
}
