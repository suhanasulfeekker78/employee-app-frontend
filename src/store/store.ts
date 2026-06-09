import { legacy_createStore as createStore} from "redux";
// import {composeWithDevTools} from "@redux-devtools/extension";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    undefined,
    // composeWithDevTools(applyMiddleware(logger))
);

export default store;