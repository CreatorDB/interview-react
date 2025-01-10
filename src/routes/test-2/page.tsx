import React from 'react';
import shuffle from 'lodash/shuffle';

import { QuestionBox } from '../../components/question-box';

const showQuestion2 = true;

export const Test2Page = () => {
  const renderCountRef = React.useRef<number>(0);
  console.log(`Render count: ${++renderCountRef.current}`);

  const [name, setName] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(`Hello, ${name}!`);
  };

  // reset render count on unmount
  React.useEffect(() => {
    return () => {
      renderCountRef.current = 0;
    };
  }, []);

  return (
    <>
      <div className="mx-auto w-[480px]">
        <QuestionBox index={1} text="Please explain what happened when user typing in the input." />
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          {/* input */}
          <div>
            <input
              type="text"
              value={name}
              className="w-full border border-gray-300 px-2 outline-none"
              onChange={handleChange}
            />
          </div>
          {/* submit button */}
          <button type="submit" className="rounded-full border-blue-700 bg-blue-400 px-2 text-white">
            Submit
          </button>
        </form>

        {showQuestion2 && (
          <div className='mt-8'>
            <QuestionBox
              index={2}
              text="If there's lot's of element on this page, how would you improve the performance for user typing."
            />
            <HeavyElement count={12000} />
          </div>
        )}
      </div>
    </>
  );
};

function HeavyElement({ count }: { count: number }) {
  return (
    <div className="my-2 flex flex-wrap gap-2">
      {shuffle(
        Array.from({ length: count }, (_, i) => (
          <span key={i} className="border border-gray-300 p-2">
            <span>{i}</span>
          </span>
        )),
      )}
    </div>
  );
}
