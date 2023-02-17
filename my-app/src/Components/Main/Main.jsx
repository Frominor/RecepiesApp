import React from "react";
import "./Main.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
export default function Main({}) {
 const dispatch=useDispatch()
 const Recipes=useSelector((state)=>state.Recepies)
 const Diet=useSelector((state)=>state.Diet)
 const Category=useSelector((state)=>state.Category)
 const Cuisine=useSelector((state)=>state.cuisine)
   async  function  getRandomProducts (){
    let response= await fetch('https://api.spoonacular.com/recipes/random?apiKey=b31827e8574a44e0ae4737c8ebc42229&number=10')
         let data=await response.json()
        dispatch({type:'ADD_RECEPIES',payload:data.recipes})
     }
  React.useEffect(()=>{

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
            <option value={"lunch"}>Lunch</option>
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
          </select>
        </div>
        <div className="select">
          <select className="SelectDiet" onChange={(e)=>{
            dispatch({type:'ADD_DIET',payload:e.target.value})
          }}>
            <option value={" "} selected={true}>
              Any Diet
            </option>
            <option value={"Vegan"}>Vegan</option>
            <option value={"Vegetarian"}>Vegetarian</option>
            <option value={"Обычная диета"}>Gluten Free</option>
          </select>
         
        </div>
        <button className="FindRecepies" onClick={async()=>{
          const respone=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&diet=${Diet}&cuisine=${Cuisine}&type=${Category}&addRecipeInformation=true&number=10`)
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
        <p>Найдено рецептов </p> Сортировать по:                    
        <ul className="SortBy">
                  <li className="SortButton Relevantnost unactive">по релевантности</li> <li className=" SortButton Popular" onClick={(e)=>{
                    let collection=document.getElementsByClassName('SortButton')
                    for(let k of collection){
                      if(k.innerHTML==e.target.value){
                        k.classList.remove('unactive')
                        k.classList.add('active')
                      }else{
                        k.classList.remove('active')
                        k.classList.add('unactive')
                      }
                    }
                    for(let i=0;i<Recipes.length;i++){
                      for(let k =i+1;k<Recipes.length;k++){
                        if(Recipes[i].aggregateLikes<Recipes[k].aggregateLikes){
                          let float=Recipes[k]
                          Recipes[k]=Recipes[i]
                          Recipes[i]=float
                        }
                      }
                    }
                    
                    dispatch({type:'ADD_RECEPIES',payload:Recipes})
                  }} >по популярности</li>
                    <li className="SortButton Calorie" onClick={(e)=>{
                      let collection=document.getElementsByClassName('SortButton')
                      for(let k of collection){
                        if(k.innerHTML==e.target.value){
                          k.classList.remove('unactive')
                          k.classList.add('active')
                        }else{
                          k.classList.remove('active')
                          k.classList.add('unactive')
                        }
                      }
                      for(let i=0;i<Recipes.length;i++){
                        for(let k =i+1;k<Recipes.length;k++){
                          if(Recipes[i].aggregateLikes<Recipes[k].aggregateLikes){
                            let float=Recipes[k]
                            Recipes[k]=Recipes[i]
                            Recipes[i]=float
                          }
                        }
                      }
                      
                      dispatch({type:'ADD_RECEPIES',payload:Recipes})
                    }}>по калорийности</li>
        </ul>
      </div>
      <div className="Recepies">
        {Recipes.map((item)=>{
          return <div className="Recepies_Recept">{item.title}
            <img src={item.image}></img>
          </div>
        })}
      </div>
    </div>
  );
}
