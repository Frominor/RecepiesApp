import React from "react";
import { useDispatch } from "react-redux";
import './RecipeSearch.css'
import close from './close.png'
import lupa from './lupa.png'
import { FindWrittenRecepies } from "../asyncActions/FindWrittenRecepies";
export default function RecipeSearch({State}){
    const dispatch=useDispatch()
    const FindRecepies=(e)=>{
        FindWrittenRecepies(e) 
    }
    const CloseSearchWindow=()=>{
        dispatch({type:'OpenCloseFindWindow',payload:false})
    }
    return(
        <div className="RecipeSearch">
            <div className="SearchSide">
                <div className="Title">Еда</div>
                <div className="FindArea">
                    <img src={lupa}></img>
                    <input type={'text'} placeholder='Search By ingridients' value={State.RecipInpValue} onChange={
                        (e)=> dispatch(FindRecepies(e))}></input>
                    <img className="Close" src={close} onClick={CloseSearchWindow}></img>
                </div>
            </div>
            <div className="FindedRecipes"></div>
                  {State.FindedRecepies?.map((item)=>{
                      return 
                  })}
            <div className="SearchResults" onClick={CloseSearchWindow}>123</div>
        </div>
    )
}