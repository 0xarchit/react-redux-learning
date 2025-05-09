import { createContext, useCallback, useMemo, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  getPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "GET_POSTS") {
    return action.payload.posts;
  } else if (action.type === "ADD_POST") {
    const updatedPostList = [action.payload.post, ...currPostList];
    return updatedPostList;
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = useCallback((post) => {
    dispatchPostList({ type: "ADD_POST", payload: { post } });
  }, []);

  const getPosts = useCallback((posts) => {
    dispatchPostList({ type: "GET_POSTS", payload: { posts } });
  }, []);

  const deletePost = useCallback((postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  }, []);

  const contextValue = useMemo(() => {
    return { postList, addPost, deletePost, getPosts };
  }, [postList, addPost, deletePost, getPosts]);

  return <PostList.Provider value={contextValue}>{children}</PostList.Provider>;
};

export default PostListProvider;
