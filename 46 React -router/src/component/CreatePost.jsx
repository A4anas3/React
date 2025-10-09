import { useContext, useRef } from "react";
import { PostList } from "./post-list-provider";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postbody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postbody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addPost(data);
      });
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          placeholder="How are you today"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="3"
          className="form-control"
          placeholder="Tell us About more"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          ENter Your User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          placeholder="your user id"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reaction" className="form-label">
          Reaction
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          placeholder="how many  people reacted"
          id="Reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          placeholder="Please enter tags with SPace"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
