import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const fetchData = expense => {
        const expenseData = {
            ...expense,
            id: "e"+ (new Date()).getTime()
        }
        props.onDataSave(expenseData);
    }

    return(
        <div className="new-expense-container">
            <ExpenseForm onDataSave={fetchData}/>
        </div>
    )
}

export default NewExpense;