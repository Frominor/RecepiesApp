import React from "react";
import { useDispatch } from "react-redux";
import { FindFullInfoRecepies } from "../asyncActions/FindFullInfoRecepies";
export default function FindBySettings() {
  const dispatch = useDispatch();
  const SelectFoodCategory = (e) => {
    dispatch({ type: "ADD_CATEGORY", payload: e.target.value });
  };
  const SelectKitchen = (e) => {
    dispatch({ type: "ADD_CUISINE", payload: e.target.value });
  };
  const SelectDiet = (e) => {
    dispatch({ type: "ADD_DIET", payload: e.target.value });
  };
  return (
    <div className="FilterRecepies">
      <div className="select">
        <select className="SelectFoodCategory" onChange={SelectFoodCategory}>
          <option value={" "} selected={true}>
            Любая категория
          </option>
          <option value={"dessert"}>Desserts</option>
          <option value={"dinner"}>Dinners</option>
          <option value={"breakfast"}>Breakfast</option>
          <option value={"snack"}>Snack</option>
          <option value={"main course"}>Main course</option>
        </select>
      </div>
      <div className="select">
        <select className="SelectKitchen" onChange={SelectKitchen}>
          <option value={"Любая кухня"} selected={true}>
            Любая кухня
          </option>
          <option value={"Italian"}>Italian kitchen</option>
          <option value={"Russian"}>Russian kitchen</option>
          <option value={"French"}>French kitchen</option>
          <option value={"German"}>German kitchen</option>
          <option value={"American"}>American kitchen</option>
          <option value={"English"}>English kitchen</option>
        </select>
      </div>
      <div className="select">
        <select className="SelectDiet" onChange={SelectDiet}>
          <option value={" "} selected={true}>
            Any Diet
          </option>
          <option value={"Vegan"}>Vegan</option>
          <option value={"Vegetarian"}>Vegetarian</option>
          <option value={"Gluten Free"}>Gluten Free</option>
          <option value={"Paleo"}>Paleo</option>
        </select>
      </div>
      <button className="FindRecepies" onClick={dispatch(FindFullInfoRecepies)}>
        Подобрать рецепты
      </button>
    </div>
  );
}
