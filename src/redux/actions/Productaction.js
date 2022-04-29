import { Set_Products, Selected_Products, Remove_Selected_Product } from "./Actiontype";
export const setproducts = (products) => {
    return {
        type: Set_Products,
        payload: products
    }
}
export const selectedproducts = (products) => {
    return {
        type: Selected_Products,
        payload: products
    }
}
export const removeselectedproducts=(products)=>{
 return {
     type:Remove_Selected_Product,
 }   
}