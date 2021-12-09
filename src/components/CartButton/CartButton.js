import React from 'react'
import { BsCart } from 'react-icons/bs'
import './CartButton.module.css'

export const CartButton = () => {
    return (
        <button style={{ minHeight: 10 }} >
            <BsCart />
        </button>
    ) 
}
