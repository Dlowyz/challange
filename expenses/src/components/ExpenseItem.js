import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const ExpenseItem = (props) => {
    console.log(props)
    return(
    <div className='expense-item'>
        
        <div className='DateContainer'>
        <ExpenseDate date={props.data.date}/>
        </div>
        <div className='expense-item-description'>
            <h2>{props.data.title}</h2>
            <div className='expense-item-price'>{props.data.price}</div>
        </div>
    </div>
    )
}

export default ExpenseItem;