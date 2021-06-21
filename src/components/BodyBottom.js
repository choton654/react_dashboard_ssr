import React from 'react'
import RightSidebar from "./RightSidebar"
import BodyCharts from "./BodyCharts"
const BodyBottom = () => {
    return (
        <div className="w-full h-full flex flex-row rounded-br-xl pl-6">
            <BodyCharts />
            <RightSidebar />
        </div>
    )
}

export default BodyBottom
