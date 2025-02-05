import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface Question {
  id: string;
  question: string;
  answer: string;
}

interface QuestionsProps {
  questions: Question[];
}

export function Questions(props: QuestionsProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold">よくある質問</h2>
      <Accordion type="multiple" className="w-full">
        {props.questions.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
            <AccordionContent>
              <div className="whitespace-pre-line">{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
