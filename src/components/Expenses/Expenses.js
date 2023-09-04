import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "./ExpenseFilter"
import {useState} from "react"
import ExpenseChart from "./ExpenseChart";

function Expenses(props){
    const [filteredExpenses, setFilteredExpenses] = useState(props.expenses)
    const filterYearChangeHandler = (yearSelected) => {
        console.log(`yearSelected: ${yearSelected}`);
        if(yearSelected === "all"){
            setFilteredExpenses(props.expenses);
        }
        else{
            yearSelected = Number(yearSelected);
            setFilteredExpenses(props.expenses.filter(expense => expense.date.getFullYear() === yearSelected));
        }
        console.log("filteredExpenses for year" + yearSelected + " : ");
        console.log(filteredExpenses);
    }

    let expenseContent = <p id="no-expenses">No expenses in the selected year.</p>;

    if(filteredExpenses.length > 0){
        console.log("Hello");
        expenseContent = <>{filteredExpenses.map(expense => <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} key={expense.id}/>)}</>
    }

    return (
        <>
        <ExpenseFilter onChangeYear={filterYearChangeHandler}/>
        <ExpenseChart expenses = {filteredExpenses}/>
        {expenseContent}
        </>
    )
}

export default Expenses;