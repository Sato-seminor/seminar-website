import Image from 'next/image';

export default function SeminarPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">ゼミの概要</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                ・佐藤整尚ゼミでは、データサイエンスと機械学習を専門分野とし、プログラミングとデータ分析を基礎から応用まで学びます。
                <br />
                <br />
                ・具体的には、Pythonを用いたプログラミングやKaggleでのデータ分析コンペ、金融工学の応用など、理論と実践の両面を学ぶことで、ゼミ生のビジネスや学問への応用力を高めます。
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/all_members.jpg"
                alt="教授の写真"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professor Introduction Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">教授の紹介</h2>
          <div className="flex flex-col items-center md:flex-row">
            {/* 画像セクション */}
            <div className="w-full md:w-1/3">
              <Image
                src="/professor-image.png"
                alt="教授の写真"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            {/* テキストセクション */}
            <div className="mt-8 w-full md:ml-8 md:mt-0 md:w-2/3">
              <h3 className="text-xl font-semibold text-gray-800">佐藤整尚 准教授</h3>
              <ul className="mt-4 space-y-4 text-lg text-gray-700">
                <li>
                  <strong>経歴:</strong>{' '}
                  駒場ファイナンスを専門とする准教授であり、テニスサークルALLDCのOBとしても親しまれています。
                </li>
                <li>
                  <strong>研究分野:</strong>{' '}
                  計量ファイナンス、時系列分析、モンテカルロフィルタを用いた金利モデルの推定、経済時系列予測など。
                </li>
                <li>
                  <strong>主な業績:</strong>{' '}
                  多変量自己回帰モデルやモンテカルロフィルタを応用した金融モデリングに関する論文を発表。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gradation Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">卒業生の進路や活躍例</h2>
          <div className="flex flex-col items-center md:flex-row">
            <div className="mt-8 w-full text-gray-700 md:mr-8 md:mt-0 md:w-2/3">
              <p className="text-lg">
                卒業生の進路はIT系企業や金融専門職が多く、
                <br />
                院進ではTMIや情報学環など、文理融合の分野に進学するゼミ生もいます。
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <Image
                src="/career_chart.jpg"
                alt="進路の分類"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
