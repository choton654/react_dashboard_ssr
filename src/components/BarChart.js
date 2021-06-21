import React from 'react'
import ChartistGraph from "react-chartist";
import Chartist from "chartist";


const dailySalesChart = {
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"],
        series: [[12, 17, 7, 17, 23, 18, 38, 30]],
    },
    options: {
        lineSmooth: Chartist.Interpolation.cardinal({
            tension: 0,
        }),
        low: 0,
        high: 40,
        reverseData: true,
        horizontalBars: true,

    },

};
const BarChart = () => {
    return (
        <ChartistGraph
            style={{
                width: "100%",
            }}
            className="h-full"
            data={dailySalesChart.data}
            type="Bar"
            options={dailySalesChart.options}
        />
    )
}

export default BarChart
