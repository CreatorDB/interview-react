import React from 'react';


export function Test2Page() {
  const [count, setCount] = React.useState(0);

  console.log('render');

  React.useEffect(() => {
    console.log('effect creation', count);
    return () => {
      console.log('effect cleanup', count);
    };
  }, [count]);

  // React.useEffect(() => {
  //   console.log('1') 

  //   setTimeout(() => { console.log('2') }, 0)

  //   const aaa = new Promise((resolve,) => {
  //     console.log('5')
  //     return resolve('')
  //   })

  //   aaa.then(() =>  console.log('3'))

  //   console.log('4')
  // }, []);

  return (
    <div>
      <h1 className="text-lg font-bold">Read the source code and explain what will be printed in the console.</h1>
      <button
        className="mt-12 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}
