import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
const initialState={
    Category:'',
    Diet:'',
    cuisine:'',
    TopDayProducts:[],
    Recepies:[],
    OpenClosePopup:false
}
const  reducer=(state=initialState,action)=>{
    switch(action.type){
     case 'ADD_CATEGORY':return {...state,Category:action.payload}
     case 'ADD_DIET':return{...state,Diet:action.payload}
     case  'ADD_CUISINE':return {...state,cuisine:action.payload}
     case 'ADD_RECEPIES':return {...state,Recepies:action.payload}
     case 'CHANGE_POPUP':return {...state,OpenClosePopup:action.payload}
     default:return state
    }
    }
const root = ReactDOM.createRoot(document.getElementById('root'));

const store=createStore(reducer)
root.render(
    <Provider store={store}>
<BrowserRouter>
    <App />
</BrowserRouter>
</Provider>
);

reportWebVitals();
