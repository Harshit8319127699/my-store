import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../components/Style.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectedproducts,removeselectedproducts } from '../redux/actions/Productaction';
function Productdetails() {
  const products = useSelector((state) => state.product)
  const { title, image, price, category, description } = products
  const {id} =useParams('/product/:id')
  const productid=id
  console.log(productid);
  const dispatch = useDispatch();
  const fetchdetails = async () => {
    const response = await axios.get(`http://fakestoreapi.com/products/${productid}`).
      catch(err => console.log(err))
    dispatch(selectedproducts(response.data))
  }
  // console.log(products);
  useEffect(() => {
    if (productid && productid!== "") {
      fetchdetails()
    return ()=>{
      dispatch(removeselectedproducts())
    }
    }
  }, [productid])

  return (
    <>
    <div className='hold'>
    <div className='ui grid container'>
        {Object.keys(products).length === 0 ? (
          <div>....loading</div>
        ) : (
          <div className='ui placeholder segment'>
            <div className='ui two column stackable center aligned grid'>
              <div className='ui vertical divider'>And</div>
              <div className='middle aligned row'>
                <div className='column lp'>
                  <img className='ui fluid image' src={image} />
                </div>
                <div className='column rp'>
                  <h1>{title}</h1>
                  <h2>
                    <a className='ui teal tag label'>${price}</a>
                  </h2>
                  <h3 className='ui brown block header'>{category}</h3>
                  <p>{description}</p>
                  <div className='ui vertical animated button' tabIndex="0">
                    <div className='hidden content'>
                      <i className='shop icon'></i>
                    </div>
                    <div className='visible content'>Add to cart</div>

                  </div>

                </div>
              </div>



            </div>



          </div>
        )




        }
      </div>

    </div>
      

    </>
  )
}

export default Productdetails