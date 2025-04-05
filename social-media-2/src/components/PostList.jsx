import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, getPosts } = useContext(PostListData);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => getPosts(data.posts));
  }, []);

  return (
    <>
      {postList.length === 0 && (
        <div className="noposts d-grid justify-content-center">
          <div className="alert alert-warning" role="alert">
            No posts available. Please create a post first.
          </div>
        </div>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
