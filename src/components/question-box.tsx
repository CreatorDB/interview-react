export function QuestionBox({ index, text }: { index: number; text: string[]|string }) {
  const paragraphs = Array.isArray(text) ? text.map((string, index) => <p key={index}>{string}</p>) : <p>{text}</p>;
  return (
    <div className="border border-stone-500 p-4 rounded-md my-2 bg-stone-50">
      <h3 className="font-bold">Question {index}</h3>
      {paragraphs}
    </div>
  );
}
