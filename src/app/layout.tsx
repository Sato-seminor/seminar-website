import '@/styles/globals.css';

import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Navigation } from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '佐藤整尚ゼミ',
  description: '東京大学経済学部 佐藤整尚ゼミ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          // ダークモードに対応していないため、一時的にライトモードに設定
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <div className="fixed top-0 z-50 w-full bg-background">
              <Navigation />
            </div>
            <main className="mt-16 flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
