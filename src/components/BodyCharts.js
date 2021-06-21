import React from 'react'
import ChartSection1 from "./ChartSection1"
import ChartSection2 from "./ChartSection2"
import ChartSection3 from "./ChartSection3"

const BodyCharts = () => {
    return (
        <div className="flex flex-col w-3/4 h-full bg-gray-900 pr-6">
            <ChartSection1 />
            <ChartSection2 />
            <ChartSection3 />
        </div>
    )
}

export default BodyCharts
