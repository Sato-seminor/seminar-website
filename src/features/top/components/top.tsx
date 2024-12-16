import Image from 'next/image';

export function Top() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-primary/10 via-primary/5 to-background">
      <h1 className="pt-8 text-center text-4xl font-bold md:pt-12 md:text-6xl">佐藤整尚ゼミ</h1>
      <div className="flex justify-center px-4 py-6">
        <Image src="/seminar-logo.svg" alt="SATO Seminar Data Science" width={600} height={400} />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-8 text-center leading-relaxed text-gray-500">
        <p className="text-sm md:text-lg">
          佐藤整尚ゼミでは、データサイエンスと機械学習を専門分野とし、プログラミングとデータ分析を基礎から応用まで学びます。具体的には、Pythonを用いたプログラミングやKaggleでのデータ分析コンペ、金融工学の応用など、理論と実践の両面を学ぶことで、ゼミ生のビジネスや学問への応用力を高めます。
        </p>
      </div>
    </section>
  );
}
