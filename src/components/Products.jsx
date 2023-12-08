import React from 'react'

const Products = ({name,price,url}) => {
  const handleClick = ()=>{
    alert("Thank Your For Click")
  }
  return (
    <div className='products'>
        <div className='img'>
            <img src={url}/>
        </div>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button onClick={()=>handleClick()}>Click me</button>
    </div>
  )
}

export default Products
