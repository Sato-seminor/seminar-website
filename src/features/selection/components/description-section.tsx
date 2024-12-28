export interface DescriptionSectionProps {
  title: string;
  description: string;
}

export function DescriptionSection(props: DescriptionSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">{props.title}</h2>
      <p className="leading-relaxed text-gray-500">{props.description}</p>
    </section>
  );
}
