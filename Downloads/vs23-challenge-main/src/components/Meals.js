import { useEffect, useState } from "react"
import MealItem from "./MealItem"
import '../index.css'
import CartContext from "../store/CartContext"
const Meals = () => {
    const[meals, setMeals] = useState([])
    useEffect(() => {
        fetch("http://localhost:3001/meals")
            .then(res => res.json())
            .then(data => {
                setMeals(data)
            })
            .catch(err => console.error(err))
    }, []) 
    
    return (
        <ul id="meals">
            
            
                   { 
                    meals.map(meal => (
                    <MealItem
                        key={meal.id}
                        meal={meal}></MealItem>
                ))
            }
                
            
        </ul>
    )
}

export default Meals