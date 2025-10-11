import { useContext, useRef } from "react";
import { PostList } from "./post-list-provider";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const handleSubmit = (e) => {};

  return (
    <Form method="POST" className="create-form">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
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
          name="body"
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
          name="userId"
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
          name="reactions"
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
          name="tags"
          className="form-control"
          placeholder="Please enter tags with SPace"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return redirect("/");
};
export default CreatePost;
