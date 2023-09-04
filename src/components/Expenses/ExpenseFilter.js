import "./ExpenseFilter.css"

function ExpenseFilter(props){
    const yearChangeHandler = (event) => {
        props.onChangeYear(event.target.value);
    }
    return (
        <div className="expense-filter-container">
            <p>Filter By Year</p>
            <select name="expense-filter" id="expense-filter" onChange={yearChangeHandler}>
                <option value="all">All</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}

export default ExpenseFilter