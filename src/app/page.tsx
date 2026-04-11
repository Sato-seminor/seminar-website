import Image from 'next/image';

import sphereImage from '@/../public/sphere.png';

export default function Home() {
  return (
    <div>
      {/* 
        - absolute inset-0: 画面いっぱいに背景を広げるための配置指定
        - mt-16: ナビゲーションバーの高さ分(4rem)上部にマージンを設定
        - md:items-center: 中サイズ以上の画面で球体の画像を垂直方向にも中央揃え
      */}
      <div className="absolute inset-0 mt-16 flex justify-center bg-gradient-to-r from-primary/10 via-primary/5 to-background md:items-center">
        <Image
          src={sphereImage}
          alt="球体"
          width={600}
          height={600}
          priority
          className="mt-32 h-[300px] w-[300px] object-contain md:mt-0 md:h-[600px] md:w-[600px]"
        />
        <div className="absolute bottom-20 left-6 md:bottom-28 md:left-12">
          <div className="mb-6 text-2xl font-semibold text-muted-foreground">
            データから
            <br />
            経済を読み解く
          </div>
          <div className="mb-6 text-5xl font-bold">佐藤整尚ゼミ</div>
          <div className="text-md font-medium text-muted-foreground">東京大学 経済学部</div>
          <div className="mt-8 space-y-6">
            <div className="max-w-md rounded-lg border border-primary/25 bg-background/85 p-4 text-sm shadow-sm backdrop-blur-sm">
              <p className="font-bold text-foreground">【選考のお知らせ】</p>
              <p className="mt-2 text-muted-foreground">
                佐藤整尚ゼミでは、一次選考のエントリー受付を開始いたしました！
                少しでも興味のある方は、ぜひお気軽にご応募ください！
              </p>
              <p className="mt-3 font-medium text-foreground">▼応募フォーム・詳細はこちら</p>
              <a
                href="https://forms.gle/ra4h9SoVyoNddCUq8"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block break-all text-primary hover:underline"
              >
                https://forms.gle/ra4h9SoVyoNddCUq8
              </a>
              <p className="mt-2 text-muted-foreground">
                一次選考のESの締め切り：4/13（月）11:00
              </p>
              <p className="mt-2 text-muted-foreground">皆さんのご応募をお待ちしております！</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">
                以下のSNSで情報を発信しています
              </p>
              <div className="flex flex-col gap-1 text-sm">
                <a
                  href="https://x.com/s_sato_seminar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  X (Twitter) → https://x.com/s_sato_seminar
                </a>
                <a
                  href="https://www.instagram.com/s_sato_seminar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Instagram → https://www.instagram.com/s_sato_seminar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
