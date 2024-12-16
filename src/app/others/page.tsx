import Image from 'next/image';

export default function SeminarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">プロジェクト</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                ・Sセメスター：Pythonを使ったデータサイエンスの基礎の輪読、Kaggleコンペへの参加、金融工学の実践。
                <br />
                <br />
                ・Aセメスター：ゼミ生の興味ごとに班を分けてプロジェクトを遂行。例として地価推移予測モデルやポケモンAI、楽曲分析モデルなど、自由度の高い内容が含まれます。
                <br />
                <br />
                ・プロアクティブラーニングセミナー：ゼミ後には、有志で統計検定に向けての勉強や深層学習に関する本の輪読などについて学習しています。
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/datascience.jpg"
                alt="教授の写真"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professor Introduction Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">企業との共同研究</h2>
          <div className="flex flex-col items-center md:flex-row">
            {/* 画像セクション */}
            <div className="w-full md:w-1/3">
              <Image
                src="/pc.png"
                alt="教授の写真"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* テキストセクション */}
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                大手パソコン機器メーカーとの共同研究では、製品の需要予測や有価証券報告書を用いた株価推移予測のプロジェクトが進行中です。実務を通して、企業との調整力や説明能力も養います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">ゼミ外での交流</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                ・セメスターに3〜4回、任意参加の飲み会を開催
                <br />
                <br />
                ・経済学部のゼミ対抗フットサル大会で2連覇！
                <br />
                <br />
                ・プライベートで麻雀に行ったりテニスをしたり
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/football.jpg"
                alt="教授の写真"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professor Introduction Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">ゼミ合宿</h2>
          <div className="flex flex-col items-center md:flex-row">
            {/* 画像セクション */}
            <div className="w-full md:w-1/3">
              <Image
                src="/trip.jpg"
                alt="教授の写真"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* テキストセクション */}
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                ・東大山中寮1泊2日
                <br />
                ・ソフトボールやサッカー
                <br />
                ・BBQで交流
                <br />
                ・白州の工場見学やボルダリング
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
