import Button from "./UI/Button"
import { CartContext } from "../store/CartContext"
import { useState } from "react";
const MealItem = (props) => {
    
    return (
        <li>
            <article className="meal-item article">
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3 className="meal-item h3">{props.meal.name}</h3>
                    <p className="meal-item-price">{new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    props.meal.price,
  )}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    
                    <Button data={props.meal}  textOnly={false}>Add to Cart</Button>
                    
                    
                </p>
            </article>
        </li>
        
    )
}

export default MealItem