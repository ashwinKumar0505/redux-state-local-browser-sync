import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import BookReducer from "./store/reducers/reducer";
import PostReducer from "./store/reducers/reducer1";
import {
  subscribeStore,
  ReduxStateChangeUpdater
} from "reverse-redux-persist";
import { updateState } from "./store/actions/actionCreators";
import App from "./App";

const RootReducer = combineReducers({
  BookReducer: BookReducer,
  PostReducer: PostReducer
});
const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const subscribedStore = subscribeStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ReduxStateChangeUpdater
      subscribedStore={subscribedStore}
      updateState={updateState}
    />
    <App />
  </Provider>,
  document.getElementById("root")
);
