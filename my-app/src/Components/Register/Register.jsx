import React from "react";
import "./Register.css";
import user from "./user.png";
import email from "./email.png";
import lock from "./padlock.png";
export default function Register({}) {
  return (
    <div className="RegisterIcon">
      <div className="RegOrLog">
        <form>
          <h1>Окно регистрации</h1>
          <div className="Name">
            <img src={user}></img>
            <input type={"text"} placeholder="Имя"></input>
          </div>
          <br></br>
          <div className="Email">
            <img src={email}></img>
            <input type={"email"} placeholder="Введите email"></input>
          </div>
          <br></br>
          <div className="Password">
            <img src={lock}></img>
            <input type="password" placeholder="Введите пароль"></input>
          </div>
          <br></br>
          <div className="Confirm_password">
            <img src={lock}></img>
            <input type={"password"} placeholder="Подтвердите пароль"></input>
          </div>
          <br></br>
          <div className="btnLogReg">
            <button className="btn_Log">Войти</button>
            <button className="btn_Reg">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  );
}
