const InitialState={
    OpenClosePopup:false,
    OpenCloseFindWindow:false,
    ChangeDispatch:false,
    isActive:false,
    isAdded:false
}
export const PopUpreducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'CHANGE_POPUP':return {...state,OpenClosePopup:action.payload}
        case 'OpenCloseFindWindow':return {...state,OpenCloseFindWindow:action.payload}
        case 'CHANGE_DISPATCH':return {...state,ChangeDispatch:action.payload}
        case 'CHANGE_ACTIVE':return {...state,isActive:action.payload}
        case 'ADD_RECEPT':return {...state,isAdded:action.payload}
    default:return {...state} 
    }

}