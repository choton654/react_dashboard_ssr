import React from 'react'
const RightSidebar = () => {
    const applicants_name = ["Rosie Metts", "James Scoot", "James Laurenson", "Elizabeth Hurton", "Danny Watson", "Reha Scarlett"]

    return (
        <div className="flex w-1/4 bg-gray-900 h-full flex-col relative items-center rounded-br-xl">
            <div className="flex flex-col w-full h-9 justify-center items-center">
                <p className="text-center text-xs text-gray-200">Hello Jhon Bayer</p>
                <p className="text-center text-xs text-gray-200">You have 8 New Applicants Today !</p>
            </div>
            <div className="flex h-2/6 w-full">
                <img src="https://res.cloudinary.com/toton007/image/upload/v1624290779/business_bwpfkg.jpg" className="h-full w-3/4 mt-3 mx-auto" alt="pic" />
            </div>
            <div className="absolute bottom-0 w-full bg-gray-800 rounded-t-3xl rounded-br-xl" style={{
                height: "70%"
            }}>
                <div className="flex flex-col w-full h-full p-4">
                    <div className="flex flex-row w-full justify-between">
                        <p className="text-xs text-gray-100">New Applicants</p>
                        <svg xmlns='http://www.w3.org/2000/svg' className='ionicon'
                            viewBox='0 0 512 512' width="20px" height="20px">
                            <title>Chevron Forward</title>
                            <path fill='#eeeeee' stroke='currentColor'
                                strokeWidth='48'
                                d='M184 112l144 144-144 144' />
                        </svg>
                    </div>
                    {applicants_name.map((item, idx) =>
                        <div key={idx} className="flex flex-row justify-between w-full mt-4">
                            <div className="flex">
                                <svg focusable="false"
                                    className="svg-inline--fa fa-user-circle fa-w-16 mt-1" role="img" width="20px" height="20px"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#eeeeee"
                                        d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path></svg>
                                <div className="ml-2">
                                    <p className="text-xs text-gray-300">{item}</p>
                                    <p className="text-blue-500" style={{
                                        fontSize: "8px"
                                    }}>Applied for IOS deeloper</p>

                                </div>
                            </div>
                            <div className="flex">
                                <svg width="16px" height="16px" focusable="false" className="svg-inline--fa fa-envelope fa-w-16 mr-6 mt-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#eeeeee" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                                <svg xmlns='http://www.w3.org/2000/svg' width="16px" height="16px" className='ionicon mt-1' viewBox='0 0 512 512'><title>Call</title><path d='M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z' fill='#eeeeee' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32' /></svg>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default RightSidebar
