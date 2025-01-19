import Image from 'next/image';

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
          src="/sphere.png"
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
        </div>
      </div>
    </div>
  );
}
