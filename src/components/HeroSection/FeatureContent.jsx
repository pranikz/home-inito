import React, { useEffect, useState } from 'react'

const FeatureContent = () => {
    const imageArray = [

        { step: 1, image: "https://cdn.inito.com/inito_website/ovulation_confirmed.png" },
        { step: 2, image: "https://cdn.inito.com/inito_website/hormone_chart.png" },
        { step: 3, image: "https://cdn.inito.com/inito_website/cycle_day_view.png" }
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [imageArray]);

    return (
        <div className='md:mt-5 mx-auto flex  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8 flex-col mb-32  md:mb-48 bg-[#f2f8fa]  md:bg-white'>
            <div className='md:bg-inito-light-blue rounded-xl mx-auto w-full max-w-xs md:max-w-5xl mb-10  md:mb-0 '>
                <div className='w-full flex flex-col md:flex-row '>
                    <div className='md:w-1/2  '>
                        <div className='flex justify-center bg-[#b4e4f2] m-10 rounded-lg'>
                            <img src={imageArray[currentImageIndex].image} alt="image" className=' max-w[445px] max-h-[445px] ' />
                        </div>
                    </div>
                    <div className='p-4 md:p-10 md:w-1/2 '>
                        <div className='text-xl md:text-4xl font-bold mt-3'>
                            Predict and confirm your ovulation with actual data
                        </div>
                        <div className='mt-5 font font-medium'>
                            <div>
                                Unlike most ovulation tests that only give you "yes/no" results, Inito provides <strong>real numerical values</strong>  of your fertility hormones.<br /><br />

                                If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.
                            </div>
                            <button href="#" className="px-8 mt-5 bg-inito-blue  text-white py-2 rounded-full  hover:shadow-xl transition duration-200">
                                Get the Inito Kit
                            </button>

                        </div>
                    </div>



                </div>
                <div className='w-full flex flex-col md:flex-row '>

                    <div className='p-4 md:p-10 md:w-1/2 '>
                        <div className='text-xl md:text-4xl font-bold mt-3'>
                            Never miss
                            <span className='relative mx-1 md:mx-2'>
                                a day
                                <img src='https://cdn.inito.com/inito_website/strike_through.png' alt="strike" className='absolute z-10 top-1 right-1 md:top-4 md:-right-1' />
                                <img src="https://cdn.inito.com/inito_website/an_egg.png" alt="egg" className='absolute z-10 -top-5 -right-5 md:-top-10 md:-right-10' />
                            </span> again with Inito
                        </div>
                        <div className='mt-5 font font-medium'>
                            <div>
                                Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones in just 10 minutes:
                            </div>
                            <ul class="list-disc ml-5 mt-3 ">
                                <li className='marker:text-green-600'>Estrogen, which rises 3-4 days before ovulation</li>
                                <li className='marker:text-purple-600'>LH, which surges 24-36 hours before ovulation</li>
                                <li className='marker:text-blue-600'>PdG, which rises after ovulation</li>
                                <li className='marker:text-orange-600'>FSH, to track follicle growth</li>
                            </ul>

                        </div>
                    </div>
                    <div className='md:w-1/2  '>
                        <div className='flex justify-center bg-[#b4e4f2] md:mt-10 md:mr-10 rounded-lg'>
                            <img src={'https://cdn.inito.com/inito_website/hormones_graph_desktop_v2.png'} alt="image" className=' max-w[445px] max-h-[445px] ' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default FeatureContent