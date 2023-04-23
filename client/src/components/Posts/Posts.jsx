import React from 'react';
import { getPosts } from '../../utils/http';
import Loader from '../UI/Loader';
import Post from './Post';

import { useQuery } from '@tanstack/react-query';

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    // retry: 5,
    // retryDelay: 2000,
  });

  if (isLoading) return <Loader />;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="posts">
      {[...posts].reverse().map((post) => {
        return (
          <Post
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        );
      })}
    </div>
  );
};

export default Posts;
