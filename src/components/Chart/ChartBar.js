import "./ChartBar.css"

function ChartBar(props){
    let heightValue = "0%"
    if(props.maxValue > 0){
        heightValue = (props.value / props.maxValue)*100 + "%";
    }

    return (
        <div>
            <div className="chart-bar" id="test">
                <div className="chart-bar__inner" style={{height: heightValue}}></div>
            </div>
            <div className="label">{props.label}</div>
        </div>
    )
}

export default ChartBar;