import React from "react";
import "./Header.css";
import lupa from "./lupa.png";
import book from "./book.png";
import hat from "./hat.png";
import { Route, Routes, NavLink, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Register from "../Register/Register";
import { GetRandomProducts } from "../asyncActions/GetRandomProducts";
import { useDispatch, useSelector } from "react-redux";
import RecipeSearch from "../RecipeSearch/RecipeSearch";
export default function Header({}) {
  const State = useSelector((state) => state);
  const OpenLogWindow = () => {
    dispatch({
      type: "CHANGE_POPUP",
      payload: !State.BoolState.OpenClosePopup,
    });
  };
  const fetchRandomRecepies = () => {
    dispatch(GetRandomProducts());
  };
  const dispatch = useDispatch();
  const noderef = React.useRef(null);
  const OpenFindWindow = () => {
    dispatch({ type: "OpenCloseFindWindow", payload: true });
  };
  return (
    <div className="Header">
      <CSSTransition
        ref={noderef}
        in={State.BoolState.OpenClosePopup}
        timeout={600}
        classNames={"my-node"}
        mountOnEnter
        unmountOnExit
      >
        <Register></Register>
      </CSSTransition>

      <CSSTransition
        ref={noderef}
        in={State.BoolState.OpenCloseFindWindow}
        timeout={100}
        className={"my-node2"}
        mountOnEnter
        unmountOnExit
      >
        <RecipeSearch State={State}></RecipeSearch>
      </CSSTransition>
      <div className="Header_Left_Side">
        <h1>
          <Link to={"/"} onClick={fetchRandomRecepies}>
            Еда
          </Link>
        </h1>
        <ul className="Header_menu">
          <li>Рецепты</li>
          <li>
            <a href="https://eda.ru/journal" target={"_blank"}>
              Журнал "Еда"
            </a>
          </li>
          <li>Любимые блюда автора сайта</li>
        </ul>
      </div>
      <div className="Header_Right_Side">
        <div className>
          <img src={lupa}></img>
          <button className="Header_Button" onClick={OpenFindWindow}>Поиск по сайту</button>
        </div>
        <div className="SearchRec">
          <img src={book}></img>
          <button className="Header_Button">
            <Link to={"mybookofrecepies"}>Моя книга рецептов</Link>
          </button>
        </div>
        <div className="SignIn">
          <img src={hat}></img>
          <button onClick={OpenLogWindow} className="Header_Button">Войти</button>
        </div>
      </div>
    </div>
  );
}
