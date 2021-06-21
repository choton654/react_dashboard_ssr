import React from 'react'
import ChartistGraph from "react-chartist";
import Chartist from "chartist";

const delays = 80
const durations = 500
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
        showArea: true
    },
    animation: {
        draw: function (data) {
            if (data.type === "line" || data.type === "area") {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint,
                    },
                });
            } else if (data.type === "point") {
                data.element.animate({
                    opacity: {
                        begin: (data.index + 1) * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: "ease",
                    },
                });
            }
        },
    },

};
const LineChart = () => {
    return (
        <ChartistGraph
            style={{
                height: "100%",
                width: "80%",
                margin: "auto"
            }}
            data={dailySalesChart.data}
            type="Line"
            options={dailySalesChart.options}
            listener={dailySalesChart.animation}
        />
    )
}

export default LineChart
