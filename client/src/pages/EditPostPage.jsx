import React from 'react';
import { useLocation } from 'react-router-dom';
import EditPost from '../components/Posts/EditPost';

export const EditPostPage = () => {
  const location = useLocation();
  const { id, title, body } = location.state;
  return (
    <>
      <h1>Edit Post</h1>
      <EditPost id={id} title={title} body={body} />
    </>
  );
};

export default EditPostPage;
