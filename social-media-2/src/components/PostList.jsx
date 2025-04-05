import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, getPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (postList.length > 0) return; // added: don't override new posts
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        getPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
      setFetching(false);
    };
  }, [postList.length]);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <div className="noposts d-grid justify-content-center">
          <div className="alert alert-warning" role="alert">
            No posts available. Please create a post first.
          </div>
        </div>
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
