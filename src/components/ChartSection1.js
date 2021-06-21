import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const ChartSection1 = () => {
    return (
        <div className="flex flex-row justify-between bg-gray-900 w-full h-1/4" >
            <div className="flex bg-gray-900 h-full hover:bg-purple-500 transform hover:-translate-x hover:scale-110 rounded-xl border-2 border-gray-700 px-4 py-2" style={{
                width: "31%"
            }}>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col h-full justify-between">
                        <p className="text-xs text-gray-300">Total Appilcations</p>
                        <h3 className="text-lg text-gray-300 font-semibold">7956</h3>
                        <p className="text-xs text-purple-300 hover:text-gray-100">+3.39%</p>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <svg focusable="false" className="svg-inline--fa fa-ellipsis-h fa-w-16 ml-auto" width="16px" height="16px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                        <div className="w-12 h-12 mb-3 mr-3">
                            <CircularProgressbar value={66} text="+60%" styles={buildStyles({
                                textSize: '20px',
                                pathColor: `#b39ddb`,
                                textColor: '#b39ddb',
                                trailColor: '#616161',
                            })} />
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex bg-gray-900 h-full hover:bg-blue-500 transform hover:-translate-x hover:scale-110 rounded-xl border-2 border-gray-700  px-4 py-2" style={{
                width: "31%"
            }}>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col h-full justify-between">
                        <p className="text-xs text-gray-300">Shortlisted Candidates</p>
                        <h3 className="text-lg text-gray-300 font-semibold">4658</h3>
                        <p className="text-xs text-blue-300">+06%</p>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <svg focusable="false" className="svg-inline--fa fa-ellipsis-h fa-w-16 ml-auto" width="16px" height="16px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                        <div className="w-12 h-12 mb-3 mr-3">
                            <CircularProgressbar value={66} text="+60%" styles={buildStyles({
                                textSize: '20px',
                                pathColor: `#29b6f6`,
                                textColor: '#90caf9',
                                trailColor: '#616161',
                            })} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex bg-gray-900 h-full hover:bg-red-500 transform hover:-translate-x hover:scale-110 rounded-xl border-2 border-gray-700  px-4 py-2" style={{
                width: "31%"
            }}>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col h-full justify-between">
                        <p className="text-xs text-gray-300">Total Appilcations</p>
                        <h3 className="text-lg text-gray-300 font-semibold">1501</h3>
                        <p className="text-xs text-red-300 hover:text-gray-100">-04%</p>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <svg focusable="false" className="svg-inline--fa fa-ellipsis-h fa-w-16 ml-auto" width="16px" height="16px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                        <div className="w-12 h-12 mb-3 mr-3">
                            <CircularProgressbar value={66} text="+40%" styles={buildStyles({
                                textSize: '20px',
                                pathColor: `#ef9a9a`,
                                textColor: '#ef9a9a',
                                trailColor: '#616161',
                            })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartSection1
