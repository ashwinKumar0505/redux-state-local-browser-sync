# redux-state-local-browser-sync

> 

[![NPM](https://img.shields.io/npm/v/reverse-redux-persist.svg)](https://www.npmjs.com/package/reverse-redux-persist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A plugin which persists your redux state across local browsers.


<p align="center"><img src="demo1.gif" alt="demo"></p>


## Install

```bash
npm install --save redux-state-local-browser-sync
```

## Basic Usage

* Configure <a href="https://github.com/rt2zz/redux-persist">redux-persist</a> in your project.

* Import redux-state-local-browser-sync.

* Pass in persistConfig and store as props to the imported name of the redux-state-local-browser-sync

### Configure redux-persist.

```jsx
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```

### Import redux-state-local-browser-sync and pass persistConfig and store as props

```jsx

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import rootReducer from './reducers'
import localTabReduxStateChanger from "redux-state-local-browser-sync"; //import redux-state-local-browser-sync


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)

  localTabReduxStateChanger(persistConfig,store)  //pass persistConfig and store
  
  return { store, persistor }
}
```

## License

MIT © [ashwinKumar0505](https://github.com/ashwinKumar0505)
