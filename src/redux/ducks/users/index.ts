import slice from "./users-slice";
import thunks from "./users-thunk";
import selectors from "./users-selector";

export default {
  reducer: slice.reducer,
  ...selectors,
  ...slice.actions,
  ...thunks,
};
