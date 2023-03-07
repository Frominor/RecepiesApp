import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SortByPriceAndCalories({}) {
  const dispatch = useDispatch();
  const LoadFilteredRecepies = (filteredRecepies) => {
    dispatch({ type: "ADD_RECEPIES", payload: filteredRecepies });
  };
  const ChangeActiveSortButton = () => {
    dispatch({ type: "CHANGE_ACTIVE", payload: !State.BoolState.isActive });
  };
  const State = useSelector((state) => state);
  const Filter = () => {
    if (!State.BoolState.isAdded) {
      if (!State.BoolState.isActive) {
        for (let i = 0; i < State.Recepies.Recepies.length; i++) {
          for (let k = i + 1; k < State.Recepies.Recepies.length; k++) {
            if (
              Math.floor(State?.Recepies?.Recepies[i]?.pricePerServing) <
              Math.floor(State?.Recepies?.Recepies[k]?.pricePerServing)
            ) {
              let float = State.Recepies.Recepies[k];
              State.Recepies.Recepies[k] = State.Recepies.Recepies[i];
              State.Recepies.Recepies[i] = float;
            }
          }
        }
        let filteredRecepies = [...State.Recepies.Recepies];
        LoadFilteredRecepies(filteredRecepies);
      } else {
        for (let i = 0; i < State?.Recepies.Recepies.length; i++) {
          for (let k = i + 1; k < State?.Recepies.Recepies?.length; k++) {
            if (
              State?.Recepies.Recepies[i]?.nutrition?.nutrients[0]?.amount <
              State?.Recepies.Recepies[k]?.nutrition?.nutrients[0]?.amount
            ) {
              let float = State?.Recepies.Recepies[k];
              State.Recepies.Recepies[k] = State.Recepies.Recepies[i];
              State.Recepies.Recepies[i] = float;
            }
          }
        }

        let filteredRecepies = [...State.Recepies.Recepies];
        LoadFilteredRecepies(filteredRecepies);
      }
      ChangeActiveSortButton();
    } else {
      if (!State.BoolState.isActive) {
        for (let i = 0; i < State.Recepies.YourRecepies.length; i++) {
          for (let k = i + 1; k < State.Recepies.YourRecepies.length; k++) {
            if (
              Math.floor(State.Recepies.YourRecepies[i].pricePerServing) <
              Math.floor(State.Recepies.YourRecepies[k].pricePerServing)
            ) {
              let float = State.Recepies.YourRecepies[k];
              State.Recepies.YourRecepies[k] = State.Recepies.YourRecepies[i];
              State.Recepies.YourRecepies[i] = float;
            }
          }
        }
        let filteredRecepies = [...State.Recepies.YourRecepies];
        LoadFilteredRecepies(filteredRecepies);
      } else {
        for (let i = 0; i < State?.Recepies.YourRecepies.length; i++) {
          for (let k = i + 1; k < State?.Recepies.YourRecepies?.length; k++) {
            if (
              State?.Recepies.YourRecepies[i]?.nutrition?.nutrients[0]?.amount <
              State?.Recepies.YourRecepies[k]?.nutrition?.nutrients[0]?.amount
            ) {
              let float = State?.Recepies.YourRecepies[k];
              State.Recepies.YourRecepies[k] = State.Recepies.YourRecepies[i];
              State.Recepies.YourRecepies[i] = float;
            }
          }
        }

        let filteredRecepies = [...State.Recepies.YourRecepies];
        LoadFilteredRecepies(filteredRecepies);
      }
      ChangeActiveSortButton();
    }
  };

  return (
    <div className="FindedRecepies">
      <ul className="FindedRecepies_SortBy">
        <p>Сортировать:</p>
        <li
          className={
            "FindedRecepies_SortButton Popular " +
            (State.BoolState.isActive ? "unactive" : "active")
          }
          onClick={Filter}
        >
          по цене
        </li>
        <li
          className={
            "FindedRecepies_SortButton Calorie " +
            (State.BoolState.isActive ? "active" : "unactive")
          }
          onClick={Filter}
        >
          по калорийности
        </li>
      </ul>
    </div>
  );
}
