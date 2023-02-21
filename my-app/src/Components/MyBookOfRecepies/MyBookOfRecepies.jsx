import React from "react";
import { useDispatch,useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
import './MyBookOfRecepies.css'
import pan from './pan.png'
export default function MyBookOfRecepies({}){
    const dispatch=useDispatch()
    const Diet=useSelector((state)=>state.Diet)
 const Category=useSelector((state)=>state.Category)
 const Recipes=useSelector((state)=>state.Recepies)
 const Cuisine=useSelector((state)=>state.cuisine)
    return(<div className="MyBookOfRecepies">
        <div className="Text">
            <h1>Моя книга рецептов</h1>
            <h5>то,что я люблю</h5>
            </div>
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
            <option value={" "} selected={true}>
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
          const respone=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&diet=${Diet}&cuisine=${Cuisine}&type=${Category}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
          const data=await respone.json()
          console.log(data)
          dispatch({type:'ADD_RECEPIES',payload:data.results})
        }}>Подобрать рецепты</button>
      </div>
      <div className="Row"></div>
      <div className="FindedRecepies">          
        <ul className="SortBy">
            <p>Сортировать:</p>
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
      <div>
        {Recipes.length>0?Recipes.map((item)=>{
           <DishCard title={item.title} img={item.image} dishTypes={item.dishTypes} cuisines={item.cuisines} servings={item.servings} pricePerServing={item.pricePerServing} extendedIngredients={item.extendedIngredients} ingridients={item.nutrition?.ingridients} aggregateLikes={item.aggregateLikes}></DishCard>
        }):<div className="Empty"><img src={pan}></img><h3>Мы не нашли ничего по вашему запросу, попробуйте изменить параметры фильтра.</h3></div>}
        
      </div>
    </div>)
}