import React from 'react';
import { useParams } from 'react-router-dom';
import SinglePost from '../components/Posts/SinglePost';

export const SinglePostPage = () => {
  const { post_id } = useParams();
  return (
    <>
      <SinglePost postId={Number(post_id)} />
    </>
  );
};

export default SinglePostPage;
