import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as Data } from "./post-list-provider";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, dataFetched } = useContext(Data);

  return (
    <>
      {dataFetched && <LoadingSpinner />}
      {!dataFetched && postList.length === 0 && <WelcomeMessage />}
      {!dataFetched &&
        postList.map((post, index) => (
          <Post key={post.id || index} post={post} />
        ))}
    </>
  );
};

export default PostList;
