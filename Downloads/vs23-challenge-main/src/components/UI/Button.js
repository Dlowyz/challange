import React, { useEffect, useState } from 'react'
import '../../index.css'
const Button = (props) =>{
    const [isTextOnly, setIsTextOnly] = useState('')
    const [StyleClass, setStyleClass] = useState('')
    useEffect(() => {

        if (props.textOnly === false){
            setIsTextOnly('Add to cart')
            setStyleClass('button')
        }
        else {
            setIsTextOnly('Cart(0)')
            setStyleClass('text-button')
        } 

    },[])
  return (
    <button className={StyleClass}>{isTextOnly}</button>
  )
}

export default Button