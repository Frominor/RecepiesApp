import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
const initialState={
    Category:[],
    Diet:[],
    cuisine:[],
    TopDayProducts:[],
    Recepies:[],
    OpenClosePopup:false,
    YourRecepies:[],
    FilteredRecepies:[],
    Ingredients:null,
    isActive:false,
    isAdded:false
}
const  reducer=(state=initialState,action)=>{
    switch(action.type){
     case 'ADD_CATEGORY':return {...state,Category:action.payload}
     case 'ADD_DIET':return{...state,Diet:action.payload}
     case  'ADD_CUISINE':return {...state,cuisine:action.payload}
     case 'ADD_RECEPIES':return {...state,Recepies:action.payload}
     case 'CHANGE_POPUP':return {...state,OpenClosePopup:action.payload}
     case 'ADD_YOURRECEPIES': return {...state,YourRecepies:action.payload}
     case 'ADD_INGREDIENTS': return {...state,Ingredients:action.payload}
     case 'CHANGE_ACTIVE':return {...state,isActive:action.payload}
     case 'ADD_RECEPT':return {...state,isAdded:action.payload}
     case 'FILTER_RECEPIES':return{...state,FilteredRecepies:[...state.FilteredRecepies,action.payload]}
     default:return state
    }
    }
    
const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
root.render(
    <Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>
);

reportWebVitals();
