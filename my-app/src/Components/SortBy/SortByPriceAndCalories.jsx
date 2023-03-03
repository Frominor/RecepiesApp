import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SortByPriceAndCalories({}){
    const dispatch=useDispatch()
    const State=useSelector((state)=>state)
    const Filter=()=>{
      if(!State.isAdded){
        if(!State.isActive){
          for(let i=0;i<State.Recepies.length;i++){
            for(let k =i+1;k<State.Recepies.length;k++){
              if(Math.floor(State.Recepies[i].pricePerServing)<Math.floor(State.Recepies[k].pricePerServing)){
                let float=State.Recepies[k]
                State.Recepies[k]=State.Recepies[i]
                State.Recepies[i]=float
              }
            }
          }
          let filteredRecepies=[...State.Recepies]
          dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
        }else{
          for(let i=0;i<State?.Recepies.length;i++){
            for(let k =i+1;k<State?.Recepies?.length;k++){
              if(State?.Recepies[i]?.nutrition?.nutrients[0]?.amount <State?.Recepies[k]?.nutrition?.nutrients[0]?.amount){
                let float=State?.Recepies[k]
                State.Recepies[k]=State.Recepies[i]
                State.Recepies[i]=float
              }
            }
          }
         
          let filteredRecepies=[...State.Recepies]
          dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
        }
        dispatch({type:'CHANGE_ACTIVE',payload:!State.isActive})
       }else{
        if(!State.isActive){
          for(let i=0;i<State.YourRecepies.length;i++){
            for(let k =i+1;k<State.YourRecepies.length;k++){
              if(Math.floor(State.YourRecepies[i].pricePerServing)<Math.floor(State.YourRecepies[k].pricePerServing)){
                let float=State.YourRecepies[k]
                State.YourRecepies[k]=State.YourRecepies[i]
                State.YourRecepies[i]=float
              }
            }
          }
          let filteredRecepies=[...State.YourRecepies]
          dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
        }else{
          for(let i=0;i<State?.YourRecepies.length;i++){
            for(let k =i+1;k<State?.YourRecepies?.length;k++){
              if(State?.YourRecepies[i]?.nutrition?.nutrients[0]?.amount <State?.YourRecepies[k]?.nutrition?.nutrients[0]?.amount){
                let float=State?.YourRecepies[k]
                State.YourRecepies[k]=State.YourRecepies[i]
                State.YourRecepies[i]=float
              }
            }
          }
         
          let filteredRecepies=[...State.YourRecepies]
          dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
        }
        dispatch({type:'CHANGE_ACTIVE',payload:!State.isActive})
       }
       }
      
      
    return<div className="FindedRecepies">          
    <ul className="SortBy">
        <p>Сортировать:</p>
        <li className={"SortButton Popular " +  (State.isActive? 'unactive':'active')} onClick={Filter}>по цене</li>
                  <li className={"SortButton Calorie " +  (State.isActive? 'active':'unactive')} onClick={Filter}>по калорийности</li>
    </ul>
  </div>
}