import React from "react";
import { useDispatch } from "react-redux";
import "./RecipeSearch.css";
import close from "./close.png";
import lupa from "./lupa.png";
import {debounce} from 'lodash-es'
import { FindWrittenRecepies } from "../asyncActions/FindWrittenRecepies";
import SearchButton from "../ReUseComponents/SearchButton";
export default function RecipeSearch({ State }) {
  const dispatch = useDispatch();
  const FindRecepies = (e) => {
    const value=e.target.value
    dispatch(FindWrittenRecepies(value));
  };
  const CloseSearchWindow = () => {
    dispatch({ type: "OpenCloseFindWindow", payload: false });
  };
  const ShowFindRecept = () => {
    dispatch({ type: "SHOW_FIND_RECEPT", payload: [] });
  };
  React.useEffect(() => {
    let focusInput = document.querySelector("input");
    focusInput.focus();
    ShowFindRecept();
  },[]);
  const makeRequest=React.useCallback(
    debounce((e)=>{
    return FindRecepies(e)
  },300),
  [])
 
  return (
    <div className="RecipeSearch">
      <div className="RecipeSearch_SearchSide SearchSide">
        <div className="RecipeSearch_Title">Еда</div>
        <div className="RecipeSearch_FindArea">
          <img src={lupa}></img>
          <input
            type={"text"}
            placeholder="Search By ingridients"
            onChange={(e) => {
              return makeRequest(e)
            }}
          ></input>
          <img
            className="RecipeSearch_Close"
            src={close}
            onClick={CloseSearchWindow}
          ></img>
        </div>
      </div>
      {console.log(State.Recepies?.FindedRecepies)}
      <div
        className={
          State.Recepies?.FindedRecepies?.length > 0
            ? "RecipeSearch_FindedRecipes_overflowed FindedRecipes"
            : "RecipeSearch_FindedRecipes FindedRecipes"
        }
      >
        {State.Recepies.FindedRecepies.map((item) => {
          return (
            <div className="RecipeSearch_FindedRecept">
              <div className="RecipeSearch_FindedRecept_Img">
                <img src={item?.image}></img>
              </div>
              <div className="RecipeSearchTitle">
                <p>{item?.title}</p>
              </div>
              <SearchButton id={item?.id}></SearchButton>
            </div>
          );
        })}
      </div>

      <div
        className={
          State.Recepies.Recepies.length > 0 ? "Changed" : "SearchResults"
        }
        onClick={CloseSearchWindow}
      >
       
      </div>
    </div>
  );
}
