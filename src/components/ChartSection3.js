import React from 'react'
import { Doughnut } from 'react-chartjs-2';
const ChartSection3 = () => {
    const data = [{
        topic: "User's Reached",
        percentage: "+3.59%",
        value: 7956
    },
    {
        topic: "Referals",
        percentage: "+9.01",
        value: 662
    },
    {
        topic: "Shares",
        percentage: "+39.18%",
        value: 1498
    },
    {
        topic: "Applications",
        percentage: "+12.00%",
        value: 564
    }]

    return (
        <div className="flex flex-row justify-between bg-gray-900 w-full h-1/3">
            <div className="flex flex-col justify-between px-6 py-2 bg-gray-900 h-full w-2/3 rounded-xl border-2 border-gray-700">
                <div className="flex flex-row justify-between">
                    <p className="text-gray-200" style={{
                        fontSize: "10px"
                    }}>Referals and Campaign Status</p>
                    <div className="flex flex-row">
                        <svg focusable="false" className="svg-inline--fa fa-telegram-plane fa-w-14 w-5 h-5 text-red-500 mt-1 mr-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                        <div className="flex flex-col">
                            <p className="text-red-400" style={{
                                fontSize: "10px"
                            }}>40 Campaigns sent in total</p>
                            <p className="text-gray-200" style={{
                                fontSize: "10px"
                            }}>4 Campaigns sent in last month</p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-row justify-between w-full">
                    {data.map((item, idx) =>
                        <div key={idx} className="flex flex-col text-center">
                            <p className="text-gray-200" style={{
                                fontSize: '10px'
                            }}>
                                {item.topic}
                            </p>
                            <p className="text-blue-400 mt-2" style={{
                                fontSize: '8px',
                            }}>
                                {item.percentage}
                            </p>
                            <p className="text-gray-200 text-sm font-semibold">
                                {item.value}
                            </p>
                        </div>
                    )}
                </div>
                <div className="flex flex-row justify-between">
                    <button className=" bg-blue-500 h-7 text-center text-gray-200 rounded-sm" style={{
                        width: "48%",
                        fontSize: '10px'
                    }}>Start a new campaign</button>
                    <button style={{
                        width: "48%",
                        fontSize: '10px'
                    }} className=" bg-red-400 h-7 text-center text-gray-200 rounded-sm">Pause all running campaign</button>

                </div>

            </div>
            <div className="flex flex-col justify-between bg-gray-900 h-full rounded-xl px-4 py-2 border-2 border-gray-700" style={{
                width: "30%"
            }}>
                <div className="flex flex-row justify-between">
                    <p className="text-xs text-gray-300" style={{
                        fontSize: "8px"
                    }}>Open Positions By Department</p>
                    <svg focusable="false" className="svg-inline--fa fa-ellipsis-h fa-w-16" width="16px" height="16px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </div>
                <Doughnut style={{
                    width: "120%",
                    height: "100%",
                    // border: "1px solid red"
                }} data={{
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: [40, 25, 30],
                            backgroundColor: ['#e91e63',
                                '#2196f3',
                                '#5e35b1',
                            ],
                        }
                    ]

                }}
                    options={{
                        responsive: false,
                        hoverOffset: 30,
                        hoverBorderWidth: 10,
                        rotation: 60,
                        weight: 10,
                    }}
                />
            </div>
        </div>
    )
}

export default ChartSection3
