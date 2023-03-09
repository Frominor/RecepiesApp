import React from "react";
import {useSelector } from "react-redux";
import "./AboutDish.css";
export default function AboutDish() {
  const State = useSelector((state) => state.Recepies);
  if (!State.YourRecepies) {
    return null;
  }
  return (
    <div className="Recepies">
      <div className="Categories">
        <ul className="CategoriesButtons">
          <li>Main Page</li>
          {State.YourRecepies?.cuisines?.length > 0 ? (
            <li>{State.YourRecepies?.cuisines[0]}</li>
          ) : (
            <li>Any</li>
          )}
          {State.YourRecepies?.dishTypes?.length > 0 ? (
            <li>{State.YourRecepies?.dishTypes[0]}</li>
          ) : (
            <li>Any</li>
          )}
          <li>Step-By-Step Recipes</li>
        </ul>
      </div>
      <div className="Recepies_Title">
        <h1>{State.YourRecepies?.title}</h1>
      </div>
      <h2>Energy value per serving</h2>
      <div className="Recepies_NutrientsAndIngridients">
        <div className="Recepies_NutritionDescription">
          <div className="Recepies_Nutrient Calories">
            <h3>Calories</h3>
            <h3>{State.YourRecepies?.nutrition?.nutrients[0]?.amount}</h3>
          </div>
          <div className="Recepies_Nutrient Protein">
            <h3>Protein</h3>
            <h3>{State.YourRecepies?.nutrition?.nutrients[8]?.amount}</h3>
          </div>
          <div className="Recepies_Nutrient Carbs">
            <h3>Carbs</h3>
            <h3>{State.YourRecepies?.nutrition?.nutrients[3]?.amount}</h3>
          </div>
          <div className="Recepies_Nutrient Fat">
            <h3>Fat</h3>
            <h3>{State.YourRecepies?.nutrition?.nutrients[1]?.amount}</h3>
          </div>
        </div>
        <div className="Recepies_Nutrient Ingridients">
          <div>
            <h3>Ingridients</h3>
          </div>
          {State.YourRecepies?.nutrition?.ingredients?.map((item) => {
            return (
              <h5>
                {item.name} {item.amount} {item.unit}
              </h5>
            );
          })}
        </div>
      </div>
      <h3>Cooking instructions</h3>
      <div className="HowToCook">
        {State.YourRecepies?.analyzedInstructions?.map((item) => {
          let StepCount = 0;
          return item.steps.map((item) => {
            StepCount++;

            return (
              <div className="HowToCook_InstructionBox">
                <div className="HowToCook_InstructionSide">
                  <h2>Step {StepCount}:</h2>
                  <p>{item.step}</p>
                </div>

                <br></br>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
