import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as Data } from "./post-list-provider";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addinitialPosts } = useContext(Data);
  const [dataFetched, setDataFetched] = useState(false);
  const handleGetPostsClick = async (signal) => {
    try {
      setDataFetched(true);
      const response = await fetch("https://dummyjson.com/posts", { signal });
      const data = await response.json();
      addinitialPosts(data.posts);
      setDataFetched(false);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Failed to fetch posts:", error);
      }
    } finally {
      setDataFetched(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    handleGetPostsClick(signal);
    return () => {
      console.log("Cleanup function called");
      controller.abort();
    };
  }, []);

  return (
    <>
      {dataFetched && <LoadingSpinner />}
      {!dataFetched && postList.length === 0 && <WelcomeMessage />}
      {!dataFetched &&
        postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
