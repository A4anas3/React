import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./post-list-provider";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            onClick={() => deletePost(post.id)}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge rounded-pill text-bg-primary hashtag"
          >
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This Post has been Reacted by {post.reactions.likes} people
        </div>
      </div>
    </div>
  );
};
export default Post;
