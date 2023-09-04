import "./ExpenseForm.css"
import { useState } from "react";

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] =
    useState("");
    const [enteredAmount, setEnteredAmount] =
    useState("");
    const [enteredDate, setEnteredDate] =
    useState("");

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        console.log()
    }
    function dataCollectionHandler(event){
        event.preventDefault();
        const data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onDataSave(data);
 
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <div>
            <form className="new-expense-form" onSubmit={dataCollectionHandler}>
                <div className="new-expense-inputs-container">
                    <div className="new-expense-inputs">
                        <label>
                            Title
                            <input type="text" id="new-expense-inputs__title" onChange={titleChangeHandler} value={enteredTitle}/>
                        </label>
                    </div>
                    <div className="new-expense-inputs">
                        <label>
                            Amount
                            <input type="number" min="1" step="1" id="new-expense-inputs__amount" onChange={amountChangeHandler} value={enteredAmount}/>
                        </label>
                    </div>
                    <div className="new-expense-inputs" id="new-expense-inputs__date">
                        <label>
                            Date
                            <input type="date" id="new-expense-inputs__date" onChange={dateChangeHandler} value={enteredDate}/>
                        </label>
                    </div>
                </div>
                <div id="new-expense-form-submit-btn-container">
                    <input type="submit" value="Add Expense" id="new-expense-form-submit-btn"/>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;