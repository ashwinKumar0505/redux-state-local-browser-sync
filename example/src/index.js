import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import NoteReducer from "./store/reducers/reducer";
import PostReducer from "./store/reducers/reducer1";
import localTabReduxStateChanger from "reverse-redux-persist";
import App from "./App";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const RootReducer = combineReducers({
  NoteReducer: NoteReducer,
  PostReducer: PostReducer
});

const persistConfig = {
  key: "root",
  storage
};

const persistreducer = persistReducer(persistConfig, RootReducer);
const store = createStore(
  persistreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

localTabReduxStateChanger(store, persistConfig);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
