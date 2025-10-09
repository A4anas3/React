import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "./post-list-provider";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title position-relative">
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

        {/* ✅ Safe tags mapping */}
        {post.tags && post.tags.length > 0 ? (
          post.tags.map((tag, index) => (
            <span
              key={index}
              className="badge rounded-pill text-bg-primary hashtag me-1"
            >
              {tag}
            </span>
          ))
        ) : (
          <span className="text-muted">No tags</span>
        )}

        {/* ✅ Safe reaction display */}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {post.reactions?.likes || 0} people
        </div>
      </div>
    </div>
  );
};

export default Post;
