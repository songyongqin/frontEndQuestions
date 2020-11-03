// import {reducer} from './reducer'

const createStore = (reducer) => {
  let currentState = {}
  let observers = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState,action)
    observers.forEach(fn => fn())
  }
  function subscribe(fn) {
    observers.push(fn)
  }

  dispatch({type:'@@INIT'})
  return {getState, dispatch, subscribe}
}

module.exports = createStore


