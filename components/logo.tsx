'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}

const sizes = {
  sm: { img: 32, text: 'text-base', sub: 'text-[10px]' },
  md: { img: 40, text: 'text-lg', sub: 'text-xs' },
  lg: { img: 56, text: 'text-2xl', sub: 'text-sm' },
  xl: { img: 72, text: 'text-3xl', sub: 'text-base' },
}

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const s = sizes[size]

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative shrink-0">
        {/* Light mode logo */}
        <Image
          src="/logo-light.jpg"
          alt="شعار منصة الحكيم"
          width={s.img}
          height={s.img}
          className={cn(
            'rounded-xl object-contain transition-opacity duration-300',
            mounted && resolvedTheme === 'dark' ? 'opacity-0 absolute inset-0' : 'opacity-100'
          )}
          priority
        />
        {/* Dark mode logo */}
        <Image
          src="/logo-dark.jpg"
          alt="شعار منصة الحكيم"
          width={s.img}
          height={s.img}
          className={cn(
            'rounded-xl object-contain transition-opacity duration-300',
            mounted && resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0 absolute inset-0'
          )}
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={cn(s.text, 'font-bold text-foreground leading-tight')}>منصة الحكيم</span>
          <span className={cn(s.sub, 'text-muted-foreground leading-tight')}>للخدمات الطلابية</span>
        </div>
      )}
    </div>
  )
}
