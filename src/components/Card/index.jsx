import React from 'react'

const index = ({ type, image, title, content, button }) => {
    const imageArray = [
        { step: 1, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232636/Group_981_sldwio.png" },
        { step: 2, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232638/Group_978_ztgnlj.png" },
        { step: 3, image: "https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721232640/Group_979_jzyzh2.png" }
    ]
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow w-full max-w-xs md:max-w-5xl mb-5 mx-auto">
            <div className="">
                {type === 'one' ? (
                    <div className='w-full flex flex-col md:flex-row '>
                        <div className='p-4 md:w-1/2 md:p-16'>
                            <div className='text-xl md:text-4xl font-semibold mt-3'>
                                {title}
                            </div>
                            <div className='mt-5'>
                                <div
                                    className='font-medium' dangerouslySetInnerHTML={{ __html: content }}
                                />

                            </div>
                        </div>

                        <div className='md:w-1/2 md:p-16'>
                            <img src={image} alt="image" className='w-full h-full' />
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex flex-col md:flex-row '>
                        <div className='w-full flex flex-col md:flex-row '>
                            <div className='md:w-1/2 md:p-16 flex justify-center'>
                                <img src={image} alt="image" className='  object-cover' />
                            </div>
                            <div className='p-4 md:w-1/2 md:p-16 '>
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