export const TopIngridients=()=>{
    return async function(dispatch){
        let num=0
        while(num<3){
            let id=Math.floor(Math.random()*1000)
            console.log(id)
            let res=await fetch(` https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=b31827e8574a44e0ae4737c8ebc42229&amount=1`)
            let data=await res.json()
            console.log(data)
        }
    }
}