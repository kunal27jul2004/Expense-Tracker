import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

function ExpenseItem(props){
    return (
        <Card className="flex purchase-details">
            <ExpenseDate date={props.date}/>
            <div className="product">{props.title}</div>
            <div className="btn-container">
                <div className="btn">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;