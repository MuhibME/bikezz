'use client'

import { CartProvider as Cprovider } from "use-shopping-cart"

import React from 'react'

const CartProvider = ({children}) => {
  return (
    <Cprovider
        mode='payment'
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
        successUrl="http://localhost:3000/stripe/success"
        cancelUrl="http://localhost:3000/stripe/error"
        language="en-US"
        currency="USD"
        billingAddressCollection={true}
        shouldPersist={true}
    >
        {children}
    </Cprovider>
  )
}

export default CartProvider;