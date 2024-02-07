import React from 'react';

let renderCount = 0;

export const Test2Page = () => {
  // increment render count on mount
  console.log(`Render count: ${++renderCount}`);

  // name state
  const [name, setName] = React.useState<string>('');

  // handle name change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(`Hello, ${name}!`);
  };

  // reset render count on unmount
  React.useEffect(() => {
    return () => {
      renderCount = 0;
    };
  }, []);

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* input */}
      <div>
        <input type="text" value={name} className="border border-gray-300 px-2 outline-none" onChange={handleChange} />
      </div>
      {/* submit button */}
      <button type="submit" className="rounded-full border-blue-700 bg-blue-400 px-2 text-white">
        Submit
      </button>
    </form>
  );
};
