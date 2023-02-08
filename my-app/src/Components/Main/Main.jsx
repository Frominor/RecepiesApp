import React from "react";
import "./Main.css";
import axios from "axios";
export default function Main({}) {
  const [Value, SetValue] = React.useState("Любая категория");
  const [TopDayProducts, SetTopDayProducts] = React.useState([]);
  const [Bool,SetBool]=React.useState(false)
   const [Recepies,SetRecepies]=React.useState([])
    
  React.useEffect(() => {
    axios
      .get("https://62f1591825d9e8a2e7cadc7b.mockapi.io/items")
      .then((res) => {
        TopDayProducts.push(...res.data);
        SetTopDayProducts(TopDayProducts);
        SetBool(true);
      });
  }, []);
    axios.get('https://api.spoonacular.com/recipes/findByIngredients?b31827e8574a44e0ae4737c8ebc42229&ingredients=apples,+flour,+sugar&number=2').then((res)=>{
      console.log(res)
      Recepies.push(...res.data.results)
      SetBool(true)
      alert(1)
      SetRecepies(Recepies)
      
    },[])
 
  return (
    <div className="Main">
      <div className="Row"></div>
      <div className="FilterRecepies">
        <div className="select">
          <select className="SelectFoodCategory" onChange={(e) => {}}>
            <option value={"Любая категория"} selected={true}>
              Любая категория
            </option>
            <option value={"Супы"}>Супы</option>
            <option value={"Каши"}>Каши</option>
            <option value={"Горячие блюда"}>Горячие блюда</option>
          </select>
        </div>
        <div className="select">
          <select className="SelectKitchen" onChange={(e) => {}}>
            <option value={"Любая кухня"} selected={true}>
              Любая кухня
             
            </option>
            <option value={"Итальянская кухня"}>Итальянская кухня</option>
            <option value={"Русская кухня"}>Русская кухня</option>
            <option value={"Французская кухня"}>Французская кухня</option>
          </select>
        </div>
        <div className="select">
          <select className="SelectDiet">
            <option value={"Безглютеновая диета"} selected={true}>
              Любая диета
            </option>
            <option value={"Веганская диета"}>Супы</option>
            <option value={"Вегетерианская диета"}>Каши</option>
            <option value={"Обычная диета"}>Горячие блюда</option>
          </select>
         
        </div>
        <button className="FindRecepies">Подобрать рецепты</button>
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
          {Bool
            ? TopDayProducts[Math.floor(Math.random() * 10)].Product +
              "  " +
              TopDayProducts[Math.floor(Math.random() * 10)].Product +
              " " +
              TopDayProducts[Math.floor(Math.random() * 10)].Product
            : ""}
        </p>
        <br></br>
      </div>
      <div className="FindedRecepies">
        <p>Найдено рецептов {Recepies.length}</p> Сортировать по:                    
        <ul className="SortBy">
                  <li>по релевантности</li> <li>по популярности</li>{" "}
                    <li>по дате добавления</li>
        </ul>
      </div>
      <div className="Recepies">
        {Bool?Recepies.map((item)=>{
          
          return <div className="Recepies_Recept">{item.title}
            <img src={item.image}></img>
          </div>
        }):''}
      </div>
    </div>
  );
}
