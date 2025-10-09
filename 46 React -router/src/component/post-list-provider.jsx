import { useEffect } from "react";
import { useState } from "react";
import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  dataFetched: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
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

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };
  const addinitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({ type: "DELETE_POST", payload: { postId } });
    },
    [dispatchPostList]
  );
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,

        dataFetched: dataFetched,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
