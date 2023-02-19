import React from "react";
import "./Register.css";
import user from "./user.png";
import email from "./email.png";
import lock from "./padlock.png";
import {useForm} from 'react-hook-form'
export default function Register({}) {
  const {register,watch,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    alert(data.name)
  }
  return (
    <div className="RegisterIcon">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Окно регистрации</h1>
          <div className="Name">
            <img src={user}></img>
            <input {...register('name',{
              required:'Name is failed',       
            })}
             type={"text"} placeholder="Имя"></input>
           {errors?.name&&(
            <div className="Errors">{errors.name.message}</div>
           )}
          </div>
          <br></br>
          <div className="Email">
            <img src={email}></img>
            <input {...register('email',{
              required:'Your email uncorrect',
              
             pattern:{
              value:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message:'Write correct email'
             }
            })} 
            type={"text"} placeholder="Введите email"></input>
            {errors?.email&&(
              <div className="Error">{errors.email.message}</div>
            )}
          </div>
          <br></br>
          <div className="Password">
            <img src={lock}></img>
            <input type="password" placeholder="Введите пароль"></input>
          </div>
          <br></br>
          <br></br>
          <div className="btnLogReg">
            <button className="btn_Log">Войти</button>
            <button className="btn_Reg">Зарегистрироваться</button>
          </div>
        </form>
      
    </div>
  );
}
