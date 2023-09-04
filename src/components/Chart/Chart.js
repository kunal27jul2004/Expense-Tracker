import "./Chart.css"
import ChartBar from "./ChartBar"

function Chart(props){
    let dataPointsValue = props.datapoints.map(datapoint => datapoint.value);
    let max = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.datapoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxValue={max} label={datapoint.label}/>)}
        </div>
    )
}

export default Chart;