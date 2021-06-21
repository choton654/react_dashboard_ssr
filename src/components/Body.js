import React from 'react'
import BodyTop from "./BodyTop"
import BodyBottom from "./BodyBottom"

const Body = () => {
    return (
        <div className="flex flex-col w-full h-full bg-gray-900 rounded-r-xl">
            <BodyTop />
            <BodyBottom />
        </div>
    )
}

export default Body
