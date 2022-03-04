import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/es/storage/session";

import user from "./user";
import post from "./post";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const rootReducer = combineReducers({
  user,
  post,
});

export default persistReducer(persistConfig, rootReducer);
