import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addinitialPosts: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "p1",
    title: "First Post",
    body: "This is the body of the first post",
    reactions: 5,
    userId: "u1",
    tags: ["fun", "programming", "react"],
  },
  {
    id: "p2",
    title: "Second Post",
    body: "This is the body of the Second post",
    reactions: 51,
    userId: "u2",
    tags: ["fun", "programming", "react"],
  },
];

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

  const addPost = (userId, postTitle, postbody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postbody,
        reactions: reactions,
        userId: userId,
        tags: tags,
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
        addinitialPosts: addinitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
