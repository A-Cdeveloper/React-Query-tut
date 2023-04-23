import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSinglePost } from '../../utils/http';
import Loader from '../UI/Loader';

export const SinglePost = ({ postId }) => {
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts', postId],
    queryFn: () => getSinglePost(postId),
  });

  console.log(postId);
  if (isLoading) return <Loader />;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <p>{post.body}</p>
        {/* <button onClick={() => mutate(id)}>DELETE</button> */}
      </div>
    </>
  );
};

export default SinglePost;
