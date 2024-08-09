'use client'
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from './ui/use-toast';



const AddToCart = ({btnStyles, text , icon ,id, currency,name,description,images,price,price_id}) => {
  const {addItem} = useShoppingCart();
  const  {toast}=useToast();
  const bike ={
    price_id: price_id,
    id:id,
    currency:currency,
    name:name,
    description:description,
    images:images,
    price:price,
  }
  
  return (
    <button className={`${btnStyles}`} onClick={()=> {addItem(bike); toast({title: `${name} has been added to cart`}) }}>
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  )
}

export default AddToCart;