import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lsChangeDetector from 'js-localstorage-change-detector'
export class ReduxStateChangeUpdater extends Component {
  componentDidMount() {
    const store = this.props.subscribedStore
    lsChangeDetector.addChangeListener('onChange', null, (key, value) => {
      if (value) {
        store.dispatch(this.props.updateState(key, JSON.parse(value)))
      }
    })
  }
  render() {
    return <div />
  }
}
ReduxStateChangeUpdater.propTypes = {
  subscribedStore: PropTypes.object,
  updateState: PropTypes.func
}

export const subscribeStore = (store) => {
  console.log(store.getState())
  store.subscribe(() => {
    const stateInStore = store.getState()
    Object.keys(stateInStore).map(key => {
      window.localStorage.setItem(key, JSON.stringify(stateInStore[key]))
    })
  })

  return store
}
//  export const subscribeCombinedReducersStore=(store)=>{

// }
