import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import inputReducer from "../featureSlices/inputSlice"

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  input: inputReducer,
})
const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
