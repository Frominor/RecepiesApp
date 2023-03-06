const InitialState={
    Category:[],
    Diet:[],
    cuisine:[],
    Recepies:[],
    YourRecepies:[],
    FilteredRecepies:[],
    BookOfRecepies:[],
    FindedRecepies:[],
    TopDayProducts:['Beef','Pasta','Tomato']
}

export const RecepiesReducer=(state=InitialState,action)=>{
  switch(action.type){
    case 'ADD_CATEGORY':return {...state,Category:action.payload}
    case 'ADD_DIET':return{...state,Diet:action.payload}
    case  'ADD_CUISINE':return {...state,cuisine:action.payload}
    case 'ADD_RECEPIES':return {...state,Recepies:action.payload}
    case 'ADD_ABOUT_RECEPT':return {...state,YourRecepies:action.payload}
    case 'FILTER_RECEPIES':return{...state,FilteredRecepies:[...state.FilteredRecepies,action.payload]}
    case 'ADD_TO_RECEPIES_BOOK':return {...state,BookOfRecepies:[...state.BookOfRecepies,action.payload]}
    case 'SHOW_FIND_RECEPT':return {...state, FindedRecepies:action.payload}
    default:return{...state}
  }
}