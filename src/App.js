import "./App.css"
import Card from "./components/UI/Card"
import NewExpense from "./components/NewExpense/NewExpense"
import {useState} from "react"
import Expenses from "./components/Expenses/Expenses"

const DUMMY_EXPENSES =
    [
      {
        date: new Date(2022, 5, 2),
        amount: 444,
        title: "Car Insurance",
        id: "e1"
      },
      {
        date: new Date(2021, 4, 18),
        amount: 23,
        title: "Snack",
        id: "e2"
      },
      {
        date: new Date(2021, 7, 12),
        amount: 133,
        title: "Bike",
        id: "e3"
      },
      {
        date: new Date(2019, 9, 29),
        amount: 12,
        title: "Speaker",
        id: "e4"
      }
    ];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const fetchData = expense => {
      setExpenses(preExpenses => [expense, ...preExpenses]);
      console.log(expenses)
    }

  return (
    <div>
      <NewExpense onDataSave={fetchData}/>
      <Card className="expenses">
        <Expenses expenses={expenses}/>
        {/* {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id}/>)} */}
        {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} /> */}
      </Card>
    </div>
  );
}

export default App;
