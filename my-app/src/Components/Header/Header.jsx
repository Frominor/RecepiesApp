import React from "react";
import './Header.css'
import lupa from './lupa.png'
import book from './book.png'
import hat from './hat.png'
import {Route,Routes,NavLink} from 'react-router-dom'
import MyBookOfRecepies from "../MyBookOfRecepies/MyBookOfRecepies";
export default function Header({}){
return (<div className="Header">
   
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
                    <button>Поиск по сайту</button></div>
             <div>
                <img src={book}></img>
                <button>Моя книга рецептов</button></div>
              <div className="SignIn"> 
                <img src={hat}></img>
                <button>Войти</button></div>
             
          
            
        </div>
</div>)
}