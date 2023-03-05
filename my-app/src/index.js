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
    TopDayProducts:['Beef','Pasta','Tomato'],
    Recepies:[],
    OpenClosePopup:false,
    OpenCloseFindWindow:false,
    YourRecepies:[],
    FilteredRecepies:[],
    FindedRecepies:[],
    ChangeDispatch:false,
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
     case 'CHANGE_ACTIVE':return {...state,isActive:action.payload}
      case 'ADD_ABOUT_RECEPT':return {...state,YourRecepies:action.payload}
     case 'ADD_RECEPT':return {...state,isAdded:action.payload}
     case 'SHOW_FIND_RECEPT':return {...state, FindedRecepies:[...state.FindedRecepies,action.payload]}
     case 'FILTER_RECEPIES':return{...state,FilteredRecepies:[...state.FilteredRecepies,action.payload]}
     case 'OpenCloseFindWindow':return {...state,OpenCloseFindWindow:action.payload}
     case 'CHANGE_DISPATCH':return {...state,ChangeDispatch:action.payload}
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
