import "./ExpenseDate.css"

function ExpenseDate(props){
    const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = props.date.getMonth();
    const month = months[monthIndex];
    const _date = props.date.getDate();
    const year = props.date.getFullYear();

    return (
        <div className="calender">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="date">{_date}</div>
        </div>
    );
}

export default ExpenseDate;