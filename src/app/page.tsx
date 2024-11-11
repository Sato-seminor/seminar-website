import { GraduationCap, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">未来を創る研究の場</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            私たちのゼミナールでは、理論と実践を融合させた学びを通じて、次世代のリーダーを育成します。
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/about/briefing">
              <Button size="lg">
                説明会に参加する
                <GraduationCap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold">実践的な研究活動</h2>
              <p className="mt-4 text-muted-foreground">
                最新の研究テーマに取り組み、実践的なスキルを身につけます。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold">充実した環境</h2>
              <p className="mt-4 text-muted-foreground">
                少人数制で密度の濃い議論と、手厚い指導を提供します。
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-xl font-semibold">キャリア支援</h2>
              <p className="mt-4 text-muted-foreground">
                研究成果を活かしたキャリアパスを支援します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
