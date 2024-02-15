// import React from 'react';

// import type { Item } from './types';
// import { getItems } from './get-items';

// const Loading = () => (
//   <div className="h-5 w-5 animate-spin rounded-full border-[2px] border-gray-200 border-r-orange-400" />
// );

// const Error = ({ error }: { error: Error }) => <div className="italic text-red-800">{error.message}</div>;

// const Item = ({ name, age }: Omit<Item, 'id'>) => (
//   <li>
//     {name} - {age} years old
//   </li>
// );

export const Test1Page = () => {
  // need to implement getItems api

  return (
    <>
      <h1 className="text-lg font-bold">Show me how to call api and render related UI</h1>
      <div className="flex justify-center">
        {/* loading */}
        {/* error */}
        {/* data */}
      </div>
    </>
  );
};
