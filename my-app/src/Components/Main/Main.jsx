import React from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
export default function Main({}) {
 const dispatch=useDispatch()
 let Recipes=useSelector((state)=>state.Recepies)
 const Diet=useSelector((state)=>state.Diet)
 const Category=useSelector((state)=>state.Category)
 const Cuisine=useSelector((state)=>state.cuisine)
   async  function  getRandomProducts (){
    let response= await fetch('https://api.spoonacular.com/recipes/random?apiKey=b31827e8574a44e0ae4737c8ebc42229&addRecipeNutrition=true&addRecipeInformation=true&number=10')
         let data=await response.json()
        dispatch({type:'ADD_RECEPIES',payload:data.recipes})
     }
  React.useEffect(()=>{
getRandomProducts()
  },[])
 
  return (
    <div className="Main">
      <div className="Row"></div>
      <div className="FilterRecepies">
        <div className="select">
          <select className="SelectFoodCategory" onChange={(e) => {
            dispatch({type:'ADD_CATEGORY',payload:e.target.value})
          }}>
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
          <select className="SelectKitchen" onChange={(e)=>{
                 dispatch({type:'ADD_CUISINE',payload:e.target.value})
          }}>
            <option value={"Любая кухня"} selected={true}>
              Любая кухня
            </option>
            <option value={"Italian"}>Italian  kitchen</option>
            <option value={"Russian"}>Russian kitchen</option>
            <option value={"French"}>French kitchen</option>
            <option value={"German"}>German kitchen</option>
            <option value={"American"}>American kitchen</option>
            <option value={"English"}>English kitchen</option>
          </select>
        </div>
        <div className="select">
          <select className="SelectDiet" onChange={(e)=>{
            dispatch({type:'ADD_DIET',payload:e.target.value})
          }}>
            <option value={" "} selected={true}>Any Diet</option>
            <option value={"Vegan"}>Vegan</option>
            <option value={"Vegetarian"}>Vegetarian</option>
            <option value={"Gluten Free"}>Gluten Free</option>
            <option value={"Paleo"}>Paleo</option>
          </select>
         
        </div>
        <button className="FindRecepies" onClick={async()=>{
          const respone=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&diet=${Diet}&cuisine=${Cuisine}&type=${Category}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
          const data=await respone.json()
          console.log(data)
          dispatch({type:'ADD_RECEPIES',payload:data.results})
        }}>Подобрать рецепты</button>
      </div>
      <h1>Рецепты</h1>
      <p>
        Ищите рецепты, выбирая категорию блюда, его подкатегорию, кухню или
        меню. А в дополнительных фильтрах можно искать по нужному (или
        ненужному) ингредиенту: просто начните писать его название и сайт
        подберет соответствующий.{" "}
      </p>
      
      <div className="ThreeRows">
        <div className="Rows">______________</div>
        <div className="Rows">______________</div>
        <div className="Rows">______________</div>
      </div>

      <div className="TopIngr">
        <p>
          Топ три продукта дня:{" "}
          
        </p>
        <br></br>
      </div>
      <div className="FindedRecepies">
        <p>Найдено {Recipes.length} рецептов</p>Сортировать по:                    
        <ul className="SortBy">
                   <li className=" SortButton Popular unactive" onClick={(e)=>{
                    let collection=document.getElementsByClassName('SortButton')
                  
                    for(let k of collection){
                      if(k.innerHTML==e.target.innerHTML){
                        k.classList.remove('unactive')
                        k.classList.add('active')
                      }else{
                        k.classList.remove('active')
                        k.classList.add('unactive')
                      }
                    }
                    for(let i=0;i<Recipes.length;i++){
                      for(let k =i+1;k<Recipes.length;k++){
                      
                        if(Math.floor(Recipes[i].pricePerServing)<Math.floor(Recipes[k].pricePerServing)){
                          let float=Recipes[k]
                          Recipes[k]=Recipes[i]
                          Recipes[i]=float
                        }
                      }
                    }
                    Recipes=[...Recipes]
                    dispatch({type:'ADD_RECEPIES',payload:Recipes})
                  }} >по цене</li>
                    <li className="SortButton Calorie unactive" onClick={(e)=>{
                      let collection=document.getElementsByClassName('SortButton')
                      for(let k of collection){
                        if(k.innerHTML==e.target.innerHTML){
                          k.classList.remove('unactive')
                          k.classList.add('active')
                        }else{
                          k.classList.remove('active')
                          k.classList.add('unactive')
                        }
                      }
                      for(let i=0;i<Recipes.length;i++){
                        for(let k =i+1;k<Recipes.length;k++){
                          console.log(Recipes)
                          if(Recipes[i].nutrition.nutrients[0].amount <Recipes[k].nutrition.nutrients[0].amount){
                            let float=Recipes[k]
                            Recipes[k]=Recipes[i]
                            Recipes[i]=float
                          }
                        }
                      }
                      Recipes=[...Recipes]
                      dispatch({type:'ADD_RECEPIES',payload:Recipes})
                    }}>по калорийности</li>
        </ul>
      </div>
      <div className="Recepies">
        {Recipes.map((item)=>{
          return <DishCard title={item.title} img={item.image} dishTypes={item.dishTypes} cuisines={item.cuisines} servings={item.servings} pricePerServing={item.pricePerServing} aggregateLikes={item.aggregateLikes}></DishCard>
        })}
      </div>
      <div className="Footer">
        
      </div>
    </div>
  );
}
