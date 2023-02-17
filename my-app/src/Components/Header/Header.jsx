import React from "react";
import './Header.css'
import lupa from './lupa.png'
import book from './book.png'
import hat from './hat.png'
import {Route,Routes,NavLink, Link} from 'react-router-dom'
import MyBookOfRecepies from "../MyBookOfRecepies/MyBookOfRecepies";
import {CSSTransition} from 'react-transition-group'
import Register from "../Register/Register";
import { useDispatch, useSelector } from "react-redux";
export default function Header({}){
  const dispatch=useDispatch()
  const OpenClosePopup=useSelector((state)=>state.OpenClosePopup)
  const noderef=React.useRef(null)
return (<div className="Header">
   <CSSTransition ref={noderef} in={OpenClosePopup} timeout={600} classNames={'my-node'} mountOnEnter unmountOnExit>
         <Register></Register>
   </CSSTransition>
     <div className='Header_Left_Side'>
          <h1>Еда</h1>
          <ul className='Header_menu'>
            <li>Рецепты</li>
            <li>Журнал "Еда"</li>
            <li>Любимые блюда автора сайта</li>
          </ul>
        </div>
            <div className='Header_Right_Side'>
                <div> 
                <img src={lupa}></img>
                    <button><Link to={'Register'}>Поиск по сайту</Link></button></div>
             <div>
                <img src={book}></img>
                <button>Моя книга рецептов</button></div>
              <div className="SignIn"> 
                <img src={hat}></img>
                <button onClick={()=>{
                 dispatch({type:'CHANGE_POPUP',payload:!OpenClosePopup})
                }}>Войти</button></div>
             
          
            
        </div>
</div>)
}