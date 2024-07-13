import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const postsData = (): any => {
  const postsData = useSelector((state: RootState) => state.post.postsData);
  return postsData;
};

const PostsSelector = { postsData };

export default PostsSelector;
