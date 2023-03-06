import React from "react";
import "./Register.css";
import user from "./user.png";
import email from "./email.png";
import lock from "./padlock.png";
import close from './close.png'
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
export default function Register({}) {
  const State=useSelector((state)=>state.BoolState)
  const dispatch=useDispatch()
  const {register,watch,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    dispatch({type:'CHANGE_POPUP',payload:!State.OpenClosePopup})
  }
  return (
    <div className="RegisterIcon">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img src={close} className='RegisterIcon_Close' onClick={onSubmit}></img>
          <h1>Окно регистрации</h1>
          <div className="RegisterIcon_Name">
            <img src={user}></img>
            <input className="RegisterIcon_Input_Name Input" {...register('name',{
              required:'Write correct name',       
            })}
             type={"text"} placeholder="Имя"></input>
           {errors?.name&&(
            <div className="Error name">{errors.name.message}</div>
           )}
          </div>
          <br></br>
          <div className="RegisterIcon_Email">
            <img src={email}></img>
            <input  className="Input email" {...register('email',{
              required:'Write correct email',
              
             pattern:{
              value:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message:'Write correct email'
             }
            })} 
            type={"text"} placeholder="Введите email"></input>
            {errors?.email&&(
              <div className="Error email">{errors.email.message}</div>
            )}
          </div>
          <br></br>
          <div className="RegisterIcon_Password">
            <img src={lock}></img>
            <input className="Input password" {...register('password',{
              required:'Write correct password',            
             pattern:{
              value:/[a-zA-Z0-9\-\_]$/,
              message:'Write correct password'
            
             }
            })} type="password" placeholder="Введите пароль"></input>
            {errors.password&&(
              <div className="Error password">{errors.password.message}</div>
            )}
          </div>
          <br></br>
          <br></br>
          <div className="btnLogReg">
           
            <button onClick={()=>{
            }} className="btn_Log">Войти</button>
          </div>
        </form>
      
    </div>
  );
}
