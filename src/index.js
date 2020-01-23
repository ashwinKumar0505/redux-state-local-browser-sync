import lsChangeDetector from 'js-localstorage-change-detector'
import { REHYDRATE } from 'redux-persist'

function localTabReduxStateChanger(store, config) {
  lsChangeDetector.addChangeListener('onChange', null, (key, value) => {
    const checkKey = key && key.lastIndexOf(config.key) !== -1
    if (checkKey) {
      const storeState = JSON.parse(value)
      if (storeState) {
        const newState = Object.keys(storeState).reduce((state, reducerKey) => {
          state[reducerKey] = JSON.parse(storeState[reducerKey])

          return state
        }, {})
        store.dispatch({
          key: config.key,
          payload: newState,
          type: REHYDRATE
        })
      }
    }
  })
}

export default localTabReduxStateChanger
