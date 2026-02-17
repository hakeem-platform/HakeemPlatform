import type { Metadata, Viewport } from 'next'
import { Noto_Kufi_Arabic, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const _notoKufi = Noto_Kufi_Arabic({ subsets: ['arabic'], weight: ['300', '400', '500', '600', '700', '800'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hakeemplatform.com'),
  title: {
    default: 'منصة الحكيم للخدمات الطلابية | أبحاث ومشاريع جامعية احترافية',
    template: '%s | منصة الحكيم',
  },
  description: 'منصة الحكيم للخدمات الطلابية - متخصصون في إعداد الأبحاث الأكاديمية والمشاريع الجامعية والعروض التقديمية والتنسيق الأكاديمي لجميع الجامعات السعودية. نلتزم بالجودة والدقة والسرية التامة.',
  keywords: [
    'خدمات طلابية',
    'أبحاث جامعية',
    'مشاريع جامعية',
    'عروض تقديمية',
    'تنسيق أكاديمي',
    'الجامعة السعودية الإلكترونية',
    'ماجستير إدارة الرعاية الصحية',
    'جودة الرعاية الصحية وسلامة المرضى',
    'الصحة العامة',
    'خدمات أكاديمية',
    'كتابة أبحاث',
    'منصة الحكيم',
  ],
  authors: [{ name: 'منصة الحكيم للخدمات الطلابية' }],
  creator: 'منصة الحكيم',
  publisher: 'منصة الحكيم',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: 'https://hakeemplatform.com',
    siteName: 'منصة الحكيم للخدمات الطلابية',
    title: 'منصة الحكيم للخدمات الطلابية | أبحاث ومشاريع جامعية احترافية',
    description: 'متخصصون في إعداد الأبحاث الأكاديمية والمشاريع الجامعية والعروض التقديمية لجميع الجامعات السعودية. نلتزم بالجودة والدقة والسرية التامة.',
    images: [{ url: '/logo-light.jpg', width: 1024, height: 1024, alt: 'منصة الحكيم للخدمات الطلابية' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'منصة الحكيم للخدمات الطلابية',
    description: 'متخصصون في إعداد الأبحاث الأكاديمية والمشاريع الجامعية لجميع الجامعات السعودية',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hakeemplatform.com',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.jpg',
        media: '(prefers-color-scheme: light)',
        type: 'image/jpeg',
      },
      {
        url: '/icon-dark-32x32.jpg',
        media: '(prefers-color-scheme: dark)',
        type: 'image/jpeg',
      },
    ],
    apple: '/logo-light.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6B21A8' },
    { media: '(prefers-color-scheme: dark)', color: '#C8963E' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'منصة الحكيم للخدمات الطلابية',
              url: 'https://hakeemplatform.com',
              telephone: '+966541896297',
              description: 'منصة متخصصة في تقديم الخدمات الطلابية والأكاديمية لجميع الجامعات السعودية',
              areaServed: {
                '@type': 'Country',
                name: 'المملكة العربية السعودية',
              },
              serviceType: [
                'كتابة الأبحاث الأكاديمية',
                'المشاريع الجامعية',
                'العروض التقديمية',
                'التنسيق الأكاديمي',
                'تطوير المواقع',
                'الخدمات البرمجية',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
