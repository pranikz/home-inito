import React from 'react'

const index = () => {
    return (
        <div className='mt-10 overflow-hidden rounded-lg bg-white shadow w-full max-w-xs md:max-w-6xl mb-5 mx-auto '>
            <div className='w-full flex flex-col md:flex-row '>
                <div className='p-4 md:p-10 md:w-1/2 '>
                    <div className='text-xl md:text-4xl font-semibold mt-3 text-center md:text-left'>
                        A <span className='relative'>
                            fertility lab
                            <svg className='scale-50 md:scale-100 absolute -right-12 md:right-0 -mt-1' width="208" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.11 6.997c24.133-.19 48.258-.378 72.39-.569 24.133-.19 48.014-.375 72.02-.565l40.626-.317a53.525 53.525 0 0 0 8.568-.778c2.464-.422 5.523-1.107 7.276-1.948 1.005-.483 2.674-1.305 1.731-1.975-.942-.67-3.037-.858-4.832-.844l-72.39.568c-24.006.188-48.013.375-72.02.565l-40.625.318a53.508 53.508 0 0 0-8.568.778c-2.464.422-5.523 1.106-7.276 1.947C1.005 4.66-.664 5.482.28 6.152c.942.67 3.037.861 4.832.847v-.002Z" fill="#29A2BA" /></svg>
                            </span> at your fingertips
                    </div>
                    <div className='mt-5'>
                        <div>
                            Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.
                        </div>

                        <button href="#" className="px-8 mt-5 bg-inito-blue  text-white py-2 md:py-3 rounded-full  hover:shadow-xl transition duration-200">
                            Get the Inito Kit
                        </button>

                        <div className='text-gray-400 text-sm mt-5 hidden md:block'>
                            * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 m-10 '>
                    <div className=' grid  md:grid-cols-2 gap-5'>
                        <div>
                            <div className=' relative'>
                                <video className='rounded-xl' autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Dip test strip in urine" playsinline="true" src="https://cdn.inito.com/inito_website/step1.mp4"></video>
                                <div className='text-center mt-2 md:hidden'>
                                    Dip the test strip in urine for 15 seconds.
                                </div>
                                <span className="absolute -inset-3 object-right-top -mr-6 md:hidden">
                                    <div className="inline-flex text-xl items-center px-4 py-3 border-2 border-white rounded-full  font-semibold leading-4 bg-[#bde0e6] text-white">
                                        1
                                    </div>
                                </span>
                            </div>

                            <div className='md:flex gap-4 mt-3 hidden '>
                                <div className='rounded-full text-2xl bg-gray-300 font-bold text-black w-14 h-12 p-4 flex justify-center  '>
                                    <span className='-mt-2'>1</span>
                                </div>
                                <div>
                                    Dip the test strip in urine for 15 seconds.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=' relative'>
                                <video className='rounded-xl' autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Insert strip into the monitor" playsinline="true" src="https://cdn.inito.com/inito_website/step2.mp4"></video>
                                <div className='text-center mt-2 md:hidden'>
                                    Attach the Inito Fertility Monitor to your iPhone*.
                                </div>
                                <div className='text-gray-400 text-center text-xs mt-5 md:hidden block'>
                                    * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
                                </div>
                                <span className="absolute -inset-3 object-right-top -mr-6 md:hidden">
                                    <div className="inline-flex text-xl items-center px-4 py-3 border-2 border-white rounded-full  font-semibold leading-4 bg-[#bde0e6] text-white">
                                        2
                                    </div>
                                </span>
                            </div>
                            <div className='md:flex gap-4 mt-3 hidden'>
                                <div className='rounded-full text-2xl bg-gray-300 font-bold text-black w-14 h-12 p-4 flex justify-center  '>
                                    <span className='-mt-2'>2</span>
                                </div>
                                <div>
                                    Attach the Inito Fertility Monitor to your iPhone*.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='relative'>
                                <video className='rounded-xl' autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://cdn.inito.com/inito_website/step3.mp4"></video>
                                <div className='text-center mt-2 md:hidden'>
                                    Insert the test strip into the Inito Fertility Monitor.
                                </div>
                                <span className="absolute -inset-3 object-right-top -mr-6 md:hidden">
                                    <div className="inline-flex text-xl items-center px-4 py-3 border-2 border-white rounded-full  font-semibold leading-4 bg-[#bde0e6] text-white">
                                        3
                                    </div>
                                </span>
                            </div>

                            <div className='md:flex gap-4 mt-3 hidden'>
                                <div className='rounded-full text-2xl bg-gray-300 font-bold text-black w-14 h-12 p-4 flex justify-center  '>
                                    <span className='-mt-2'>3</span>
                                </div>
                                <div>
                                    Insert the test strip into the Inito Fertility Monitor.
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='relative'>
                                <video className='rounded-xl h-[160px]' autoplay="autoplay" loop="loop" muted="muted" oncontextmenu="return false" alt="Video: Identify up to 6 fertile days" playsinline="true" src="https://cdn.inito.com/inito_website/step4.mp4"></video>
                                <div className='text-center mt-2 md:hidden'>
                                    Get personalized results on our App in 10 minutes.
                                </div>
                                <span className="absolute -inset-3 object-right-top -mr-6 md:hidden">
                                    <div className="inline-flex text-xl items-center px-4 py-3 border-2 border-white rounded-full  font-semibold leading-4 bg-[#bde0e6] text-white">
                                        4
                                    </div>
                                </span>
                            </div>

                            <div className='md:flex gap-4 mt-3 hidden'>
                                <div className='rounded-full text-2xl bg-gray-300 font-bold text-black w-14 h-12 p-4 flex justify-center  '>
                                    <span className='-mt-2'>4</span>
                                </div>
                                <div>
                                    Get personalized results on our App in 10 minutes.
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* <img src={image} alt="image" className='w-full h-full' /> */}

                </div>

            </div>
        </div>
    )
}

export default index