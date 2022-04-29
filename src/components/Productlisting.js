import React,{useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import Productcomponents from './Productcomponents'
import { setproducts } from '../redux/actions/Productaction'
function Productlisting() {
  const products = useSelector((state) => state.allproducts.products)
const dispatch=useDispatch()
  const fetchproduct= async ()=>{
    const response=await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log(err);
    });
    dispatch(setproducts(response.data))
  }
useEffect(() => {
fetchproduct()
},[])


  return (
    <>
      <div className='ui grid container'>
        <Productcomponents />
      </div>
    </>
  )
}

export default Productlisting