import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const tagsElement = useRef();
  const likesElement = useRef();
  const dislikesElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = postTitleElement.current.value;
    const body = postBodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const likes = likesElement.current.value;
    const dislikes = dislikesElement.current.value;

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        tags,
        reactions: {
          likes: +likes,
          dislikes: +dislikes,
        },
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    likesElement.current.value = "";
    dislikesElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="user123"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...?"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Body
        </label>
        <textarea
          className="form-control"
          id="body"
          rows="4"
          placeholder="Write your post here..."
          ref={postBodyElement}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="tag1 tag2 tag3 (space separated)"
          ref={tagsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Likes
        </label>
        <input
          type="number"
          className="form-control"
          id="likes"
          placeholder="0"
          ref={likesElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          dislikes
        </label>
        <input
          type="number"
          className="form-control"
          id="dislikes"
          placeholder="0"
          ref={dislikesElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
