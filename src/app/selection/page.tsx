import { DescriptionSection } from '../../features/selection/components/description-section';
import { Questions } from '../../features/selection/components/questions';
import { descriptionSections } from '../../features/selection/data/description-section';
import { questions } from '../../features/selection/data/questions';

export default function Selection() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="mb-12 text-4xl font-bold">選考について</h1>
        {descriptionSections.map((section) => (
          <DescriptionSection key={section.id} {...section} />
        ))}
        <Questions questions={questions} />
      </main>
    </div>
  );
}
