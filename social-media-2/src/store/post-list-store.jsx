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

  const addPost = (post) => {
    dispatchPostList({ type: "ADD_POST", payload: { post } });
  };

  const getPosts = (posts) => {
    dispatchPostList({ type: "GET_POSTS", payload: { posts } });
  };

  const deletePost = useCallback((postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  }, []);

  // const arr = [1, 2, 3, 4, 5];
  // const sortedarr = useMemo(() => {
  //   return arr.sort();
  // }, [arr]);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, getPosts }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
