import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
const expenses = [
  {
  date: new Date(2021, 2, 28),
  title: 'Car Insurance',
  price: 294.67
  },
  {
  date: new Date(2023, 5, 12),
  title: 'Home Insurance',
  price: 549.99
  }
]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
      
    </div>
  );
}

export default App;
