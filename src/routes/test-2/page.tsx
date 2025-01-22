import React from 'react';
import shuffle from 'lodash/shuffle';

import { QuestionBox } from '../../components/question-box';

export const Test2Page = () => {
  const [showQuestion2, setShowQuestion2] = React.useState<boolean>(false);

  const [name, setName] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('change');
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(`Hello, ${name}!`);
  };

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
          <button type="submit" className="mt-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>

        {/* QUESTION 2 */}
        <button
          className="mt-12 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowQuestion2(state => !state)}
        >
          Toggle Question 2
        </button>
        {showQuestion2 && (
          <div className='mt-8'>
            <QuestionBox
              index={2}
              text="Typing in the input becomes laggy. Please explain why this happens and how to fix it."
            />
            <HeavyElement count={10000} />
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
