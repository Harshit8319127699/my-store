import React from 'react'
import { useSelector } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import '../components/Style.css'

function Productcomponents() {
  const product = useSelector(state => state.allproducts.products)
  const navigate=useNavigate()
    const renderList = product.map((products) => {
      const {id,title,image,price,category}=products 
const handle=(id)=>{
navigate(`/product/${id}`)
}

      return (
        <div className='four wide column' key={id}  onClick={(e)=>handle(id)}>
          <Link to={`/product/${id}`}/>
          <div className='ui link cards'>
            <div className='card'>
              <div className='image'>
                <img src={image} alt={title} />
              </div>
              <div className='content'>
                <div className='header'>{title}</div>
                <div className='meta price'>${price}</div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>


        </div>
      )
    })
  

  // const{id,title}=product[0]
  return (
    <>
    <div className='holder'>
    {renderList};

    </div>
    </>
  )
}

export default Productcomponents