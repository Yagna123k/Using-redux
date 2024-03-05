import React from 'react'
import './App.css'
import {legacy_createStore as createStore, combineReducers } from "redux"
import { Provider } from 'react-redux'
import { reducer } from "./utils/Reducer"
import LikeCounter from './utils/LikeCounter'

const rootReducer = combineReducers({
  reducer
})
const store = createStore(rootReducer)
function App() {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>

  )
}

export default App