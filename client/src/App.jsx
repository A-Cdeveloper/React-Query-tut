import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import PostsPage from './pages/PostsPage';
import SinglePostPage from './pages/SinglePostPage';
import AddNewPostPage from './pages/AddNewPostPage';
import EditPostPage from './pages/EditPostPage';
import UsersPage from './pages/UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'posts',
        children: [
          { index: true, element: <PostsPage /> },
          { path: ':post_id', element: <SinglePostPage /> },
          { path: 'edit/:post_id', element: <EditPostPage /> },
          { path: 'add-new', element: <AddNewPostPage /> },
        ],
      },
      { path: 'users', element: <UsersPage /> },
    ],
  },
]);

function WrraperApp() {
  return (
    <>
      <h1>REACT QUERY</h1>
      <AddNewPost />
      <Posts />
    </>
  );
}

const App = () => {
  return (
    <RouterProvider router={router}>
      <WrraperApp />
    </RouterProvider>
  );
};

export default App;
