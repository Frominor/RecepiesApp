import { combineReducers, createStore,applyMiddleware } from "redux";
import { PopUpreducer } from "./Reducers/PopUpReducer";
import { RecepiesReducer } from "./Reducers/RecepiesReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const rootReducer=combineReducers({
BoolState:PopUpreducer,
Recepies:RecepiesReducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))