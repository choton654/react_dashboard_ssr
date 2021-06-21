import React from 'react'
import LineChart from "./LineChart"
import BarChart from "./BarChart"
const ChartSection2 = () => {
    return (
        <div className="flex flex-row justify-between bg-gray-900 w-full h-1/3 my-3" >
            <div className="flex flex-col bg-gray-900 h-full w-2/3 rounded-xl border-2 border-gray-700 px-6 py-2">
                <div className="flex flex-row justify-between w-full">
                    <p className="text-gray-200" style={{
                        fontSize: "10px"
                    }}>Applications Recieved</p>
                    <div className="flex flex-row justify-between w-2/3">
                        <p className="text-gray-200" style={{
                            fontSize: "10px"
                        }}>This year</p>
                        <p className="text-gray-200" style={{
                            fontSize: "10px"
                        }}>This week</p>
                        <p className="text-gray-200" style={{
                            fontSize: "10px"
                        }}>Today</p>
                        <div className="flex flex-row justify-center">
                            <svg focusable="false" className="svg-inline--fa fa-folder-plus fa-w-16 w-3 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path></svg>
                            <p className="text-gray-200" style={{
                                fontSize: "10px",
                                marginTop: "1px"
                            }}>Downloaded report</p>
                            <svg focusable="false" className="svg-inline--fa fa-ellipsis-v fa-w-6 w-3 h-3 ml-2" style={{
                                marginTop: "2px"
                            }} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="#eeeeee" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"></path></svg>
                        </div>
                    </div>
                </div>
                <LineChart />
            </div>
            <div className="flex bg-gray-900 h-full rounded-xl border-2 border-gray-700 px-4 py-2" style={{
                width: "30%"
            }}>
                <div className="flex flex-col justify-between">
                    <p className="text-gray-200" style={{
                        fontSize: "10px"
                    }}>Total Applications</p>
                    <BarChart />
                </div>
            </div>

        </div>
    )
}

export default ChartSection2
