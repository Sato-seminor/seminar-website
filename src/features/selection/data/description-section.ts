import { DescriptionSectionProps } from '@/features/selection/components/description-section';

export const descriptionSections: (DescriptionSectionProps & { id: string })[] = [
  {
    id: 'd1',
    title: 'ゼミへの応募方法',
    description:
      '2026年度のゼミ選抜では簡単な志望理由書や履歴に関するフォームの提出とゼミ生との簡単な面談を行います。',
  },
  {
    id: 'd2',
    title: '募集要項',
    description:
      '学年や専攻、事前スキルに特別な制限はありません。プログラミング初心者も安心して参加でき、学部・学科を問わず広く応募を歓迎しています。',
  },
  {
    id: 'd3',
    title: '説明会の案内',
    description:
      '春学期にゼミ説明会を開催予定です。詳細な日時や場所については、Twitterでお知らせしますのでご確認ください。',
  },
];
