import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const postsData = (): any => {
  const postsData = useSelector((state: RootState) => state.post.postsData);
  return postsData;
};

const storiesData = (): any => {
  const storiesData = useSelector((state: RootState) => state.post.storiesData);
  return storiesData;
};

const PostsSelector = { postsData, storiesData };

export default PostsSelector;
