import dataScience from '@/../public/datascience.jpg';
import football from '@/../public/football.jpg';
import pc from '@/../public/pc.png';
import trip from '@/../public/trip.jpg';
import { DescriptionWithImage } from '@/features/activities/components/description-with-image';

export default function SeminarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* プロジェクトセクション */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="プロジェクト"
            content={
              <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>
                  Sセメスター：Pythonを使ったデータサイエンスの基礎の輪読、Kaggleコンペへの参加、金融工学の実践。
                </li>
                <li>
                  Aセメスター：ゼミ生の興味ごとに班を分けてプロジェクトを遂行。例として地価推移予測モデルやポケモンAI、楽曲分析モデルなど、自由度の高い内容が含まれます。
                </li>
                <li>
                  プロアクティブラーニングセミナー：ゼミ後には、有志で統計検定に向けての勉強や深層学習に関する本の輪読などについて学習しています。
                </li>
              </ul>
            }
            imageProps={{
              src: dataScience,
              alt: '教材の写真',
              width: 300,
              height: 300,
            }}
            imagePosition="right"
          />
        </div>
      </section>

      {/* 企業との共同研究セクション */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="企業との共同研究"
            content={
              <p className="text-lg text-gray-700">
                大手パソコン機器メーカーとの共同研究では、製品の需要予測や有価証券報告書を用いた株価推移予測のプロジェクトが進行中です。実務を通して、企業との調整力や説明能力も養います。
              </p>
            }
            imageProps={{
              src: pc,
              alt: '共同研究',
              width: 200,
              height: 200,
            }}
            imagePosition="left"
          />
        </div>
      </section>

      {/* ゼミ外での交流セクション */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="ゼミ外での交流"
            content={
              <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>セメスターに3〜4回、任意参加の飲み会を開催</li>
                <li>経済学部のゼミ対抗フットサル大会で2連覇！</li>
                <li>プライベートで麻雀に行ったりテニスをしたり</li>
              </ul>
            }
            imageProps={{
              src: football,
              alt: 'フットサル大会',
              width: 400,
              height: 400,
            }}
            imagePosition="right"
          />
        </div>
      </section>

      {/* ゼミ合宿セクション */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="ゼミ合宿"
            content={
              <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>東大山中寮1泊2日</li>
                <li>ソフトボールやサッカー</li>
                <li>BBQで交流</li>
                <li>白州の工場見学やボルダリング</li>
              </ul>
            }
            imageProps={{
              src: trip,
              alt: '宿泊場所',
              width: 300,
              height: 300,
            }}
            imagePosition="left"
          />
        </div>
      </section>
    </div>
  );
}
