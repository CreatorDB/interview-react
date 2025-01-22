import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from './layout';
import { Test1Page } from './routes/test-1/page';
import { Test2Page } from './routes/test-2/page';
import { Test3Page } from './routes/test-3/page';
import { Test4Page } from './routes/test-4/page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    loader: ({ request }) => {
      const url = new URL(request.url);
      const pathname = url.pathname;
      return pathname === '/' ? redirect('/test-1') : null;
    },
    children: [
      { path: 'test-1', element: <Test1Page /> },
      { path: 'test-2', element: <Test2Page /> },
      { path: 'test-3', element: <Test3Page /> },
      { path: 'test-4', element: <Test4Page /> },
    ],
  },
]);
