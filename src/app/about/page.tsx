import career from '@/../public/career_chart.jpg';
import professor from '@/../public/professor-image.png';
import { DescriptionWithImage } from '@/features/about/components/description-with-image';

export default function SeminarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="ゼミの概要"
            content={
              <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>
                  佐藤整尚ゼミでは、データサイエンスと機械学習を専門分野とし、
                  プログラミングとデータ分析を基礎から応用まで学びます。
                </li>
                <li>
                  具体的には、Pythonを用いたプログラミングやKaggleでのデータ分析コンペ、
                  金融工学の応用など、理論と実践の両面を学ぶことで、ゼミ生のビジネスや学問への応用力を高めます。
                </li>
              </ul>
            }
          />
        </div>
      </section>

      {/* Professor Introduction Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="教授の紹介"
            content={
              <div>
                <h3 className="text-xl font-semibold text-gray-800">佐藤整尚 准教授</h3>
                <ul className="mt-4 space-y-4 text-lg text-gray-700">
                  <li>
                    <strong>経歴:</strong>
                    実証ファイナンスがご専門。東京大学経済学部卒、東京工業大学で修士・博士（工学）を取得後、統計数理研究所を経て、2013年より東京大学経済学研究科に着任。東京大学金融教育研究センター
                    副センター長。テニスサークルALLDCのOBです。
                  </li>
                  <li>
                    <strong>研究分野:</strong>{' '}
                    計量ファイナンス、時系列分析、モンテカルロフィルタを用いた金利モデルの推定、経済時系列予測など。
                  </li>
                </ul>
              </div>
            }
            imageProps={{
              src: professor,
              alt: '教授の写真',
              width: 200,
              height: 200,
            }}
            imagePosition="left"
          />
        </div>
      </section>

      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <DescriptionWithImage
            title="卒業生の進路や活躍例"
            content={
              <p className="text-lg text-gray-700">
                卒業生の進路はIT系企業や金融専門職が多く、
                <br />
                院進ではTMIや情報学環など、文理融合の分野に進学するゼミ生もいます。
              </p>
            }
            imageProps={{
              src: career,
              alt: '進路の分類',
              width: 500,
              height: 500,
            }}
            imagePosition="right"
          />
        </div>
      </section>
    </div>
  );
}
