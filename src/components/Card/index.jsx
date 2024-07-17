import React, { useEffect, useState } from 'react'

const index = ({ type, image, title, content, button, scrollimage }) => {
    const imageArray = [
        { step: 0, image: 'https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721235175/Group_980_rtetlj.png' },
        { step: 1, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232636/Group_981_sldwio.png" },
        { step: 2, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232638/Group_978_ztgnlj.png" },
        { step: 3, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232640/Group_979_jzyzh2.png" }
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 2000);
        return () => clearInterval(timer);
    }, [imageArray]);

    return (
        <div className="overflow-hidden rounded-lg bg-white shadow w-full max-w-xs md:max-w-5xl mb-5 mx-auto">
            <div className="">
                {type === 'one' ? (
                    <div className='w-full flex flex-col md:flex-row '>
                        <div className='p-4 md:w-1/2 '>
                            <div className='text-xl md:text-4xl font-semibold mt-3'>
                                {title}
                            </div>
                            <div className='mt-5'>
                                <div
                                    className='font-medium' dangerouslySetInnerHTML={{ __html: content }}
                                />

                            </div>
                        </div>

                        <div className='md:w-1/2 '>
                            <img src={image} alt="image" className='w-full h-full' />

                        </div>

                    </div>
                ) : (
                    <div className='w-full flex flex-col md:flex-row '>
                        <div className='w-full flex flex-col md:flex-row '>
                            <div className='md:w-1/2  flex justify-center'>
                                {scrollimage ? (<div className='relative'>

                                    <img src={image} alt="image" className='w-full h-full relative object-cover scale-105 ' >
                                    </img>
                                    <img src={imageArray[currentImageIndex].image} alt="image" className=' transition ease-in-out absolute z-10 top-10 md:top-[90px] left-9 md:left-[120px] md:scale-150' />
                                </div>) : (<img src={image} alt="image" className='  object-cover ' />)}
                            </div>
                            <div className='p-4 md:w-1/2  '>
                                <div className='text-4xl font-semibold mt-3'>
                                    {title}
                                </div>
                                <div className='mt-5'>
                                    <div
                                        className='font-medium' dangerouslySetInnerHTML={{ __html: content }}
                                    />
                                    {button && <button href="#" className="px-8 mt-5 bg-inito-blue  text-white py-2 rounded-full  hover:shadow-xl transition duration-200">
                                        Get the Inito Kit
                                    </button>}

                                </div>
                            </div>


                        </div>
                    </div>)}

            </div>
        </div>
    )
}

export default index