import { combineReducers } from "redux";
import reducer from "./repositoryReducer";

const reducers = combineReducers({
  repositories: reducer,
});

export default reducers;

// repositories state is coming from reducer

export type RootState = ReturnType<typeof reducers>;
