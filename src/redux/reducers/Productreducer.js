

const initialState={
    products:[]
}


export const Productreducer=(state=initialState,{type,payload})=>{
switch (type) {
    case Set_Products:
        return {
            ...state,products:payload
        }
        

    default:{
        return state;

    }
}

}
export const selectedProductreducer=(state={},{type,payload})=>{
switch (type) {
    case Selected_Products:
        return{
            ...state,...payload
        }
    case Remove_Selected_Product:
        return {}    

    default:
        return state;
}
}
