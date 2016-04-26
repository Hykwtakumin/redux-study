import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer/";

import {m1, m2, logger, saveLocalStorage, loadLocalStorage} from "./middleware/";

export const store = createStore(
  reducer,
  (loadLocalStorage() || {
    editor: {
      text: ""
    }
  }),
  applyMiddleware(logger, m1, m2, saveLocalStorage)
);
