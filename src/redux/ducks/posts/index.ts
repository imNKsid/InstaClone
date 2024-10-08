import slice from "./posts-slice";
import thunks from "./posts-thunk";
import selectors from "./posts-selector";

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
