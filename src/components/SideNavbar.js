import React from 'react'
function SideNavbar() {
    return (

        <aside
            className="flex flex-col items-center
             bg-gray-900 text-gray-700 shadow h-full w-10
              rounded-l-xl border-r-2 border-gray-700">

            <div className="h-16 flex items-center w-full">
                <a className="h-6 w-6 mx-auto" href=".">
                    <img
                        className="h-6 w-6 mx-auto transform hover:-translate-x hover:scale-110"
                        src="https://res.cloudinary.com/toton007/image/upload/v1624290778/dashboard_iglfxa.png"
                        alt="svelte logo" />
                </a>
            </div>

            <ul className="mt-4">
                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-2 flex justify-center items-center w-full
                            focus:text-orange-500">

                        <svg xmlns='http://www.w3.org/2000/svg'
                            className='ionicon transform hover:-translate-x hover:scale-150' width="16px" height="16px" fill="#eeeeee" stroke="currentColor"
                            viewBox='0 0 512 512'><title>Home</title>
                            <path d='M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8
                           0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0
                            0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016
                             16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z' />
                            <path d='M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16
                              16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256
                               32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7
                                15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0
                                 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36
                                  5.63-16.86-.76-22.97z' />
                        </svg>
                    </a>
                </li>

                <li className="">
                    <a
                        href="."
                        className="h-6 px-2 my-2 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <polyline
                                points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path
                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                                    2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                                    0-1.79 1.11z"></path>
                        </svg>

                    </a>
                </li>

                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-4 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                                d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>

                    </a>
                </li>

                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-4 flex justify-center items-center w-full
                            focus:text-orange-500">

                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path
                                d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
                                    0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>

                    </a>
                </li>

                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-4 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path
                                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                                    2-1.61L23 6H6"></path>
                        </svg>

                    </a>
                </li>

                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-4 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
                                    0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
                                    0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
                                    2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                                    0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                                    0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                                    0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
                                    0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
                                    1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                                    1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
                                    0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                                    1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                                    2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
                                    0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
                                    1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-4 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a
                        href="."
                        className="h-6 px-2 my-2 flex justify-center items-center w-full
                            focus:text-orange-500">
                        <svg
                            className="transform hover:-translate-x hover:scale-150"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#eeeeee"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </a>
                </li>

            </ul>

            <div className="mt-auto h-16 flex items-center w-full">
                <button
                    className="h-16 mx-auto flex justify-center items-center
                        w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">

                    <svg xmlns='http://www.w3.org/2000/svg' className='ionicon text-red-700'
                        viewBox='0 0 512 512' width="16px" height="16px" >
                        <title>Settings</title>
                        <path d='M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13
                              0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21
                               35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81
                                0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48
                                 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73
                                  47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11
                                   0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3
                                    155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81
                                     10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05
                                      0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16
                                       0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81
                                        10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48
                                         164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08
                                          0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07
                                           0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81
                                            10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05
                                             0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z' fill='none' stroke='currentColor'
                            strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
                    </svg>

                </button>
            </div>

        </aside>
    )
}

export default SideNavbar
