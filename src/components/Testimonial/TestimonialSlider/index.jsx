import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = () => {
    const stars = Array(5).fill(null);
    const settings = {
        dots: true,
        arrows: false,
    };
    return (
        <div className='mx-auto  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8 flex-col pb-10'>
            <div className=" m-0 ml-auto ">
                <Slider {...settings}>
                    <div>
                        <div className='rounded-lg w-full p-6 max-w-6xl shadow-sm h-40  bg-[#f7f7fe]'>
                            <div className='flex items-center mb-2'>
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        src="https://cdn.inito.com/inito_website/star.png"
                                        alt="Star"
                                        className='w-4 h-4 mr-2'
                                    />
                                ))}
                            </div>

                            I have PCOS and have been on letrozole and using LH tests to time intercourse.
                            I was hesitant to buy this because there are so many different things
                            but I liked the added hormones it tracks. I just used it with my last cycle and
                            it was so great! Showed me my estrogen rising so I knew I was in my fertile window
                            two days before my LH rise. I just got the “confirmed ovulation” because my
                            PdG increased. It’s so great to have a little more insight into what is going on!

                        </div>
                        <div className='p-6 text-gray-500'>
                            MJ
                        </div>
                    </div>

                    <div>
                        <div className='rounded-lg w-full p-6 max-w-6xl shadow-sm h-40  bg-[#f7f7fe]'>
                            <div className='flex items-center mb-2'>
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        src="https://cdn.inito.com/inito_website/star.png"
                                        alt="Star"
                                        className='w-4 h-4 mr-2'
                                    />
                                ))}
                            </div>

                            I have PCOS and have been on letrozole and using LH tests to time intercourse.
                            I was hesitant to buy this because there are so many different things
                            but I liked the added hormones it tracks. I just used it with my last cycle and
                            it was so great! Showed me my estrogen rising so I knew I was in my fertile window
                            two days before my LH rise. I just got the “confirmed ovulation” because my
                            PdG increased. It’s so great to have a little more insight into what is going on!

                        </div>
                        <div className='p-6 text-gray-500'>
                            MJ
                        </div>
                    </div>
                    <div>
                        <div className='rounded-lg w-full p-6 max-w-6xl shadow-sm h-40  bg-[#f7f7fe]'>
                            <div className='flex items-center mb-2'>
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        src="https://cdn.inito.com/inito_website/star.png"
                                        alt="Star"
                                        className='w-4 h-4 mr-2'
                                    />
                                ))}
                            </div>

                            I have PCOS and have been on letrozole and using LH tests to time intercourse.
                            I was hesitant to buy this because there are so many different things
                            but I liked the added hormones it tracks. I just used it with my last cycle and
                            it was so great! Showed me my estrogen rising so I knew I was in my fertile window
                            two days before my LH rise. I just got the “confirmed ovulation” because my
                            PdG increased. It’s so great to have a little more insight into what is going on!

                        </div>
                        <div className='p-6 text-gray-500'>
                            MJ
                        </div>
                    </div>
                    <div>
                        <div className='rounded-lg w-full p-6 max-w-6xl shadow-sm h-40  bg-[#f7f7fe]'>
                            <div className='flex items-center mb-2'>
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        src="https://cdn.inito.com/inito_website/star.png"
                                        alt="Star"
                                        className='w-4 h-4 mr-2'
                                    />
                                ))}
                            </div>

                            I have PCOS and have been on letrozole and using LH tests to time intercourse.
                            I was hesitant to buy this because there are so many different things
                            but I liked the added hormones it tracks. I just used it with my last cycle and
                            it was so great! Showed me my estrogen rising so I knew I was in my fertile window
                            two days before my LH rise. I just got the “confirmed ovulation” because my
                            PdG increased. It’s so great to have a little more insight into what is going on!

                        </div>
                        <div className='p-6 text-gray-500'>
                            MJ
                        </div>
                    </div>
                </Slider>
            </div>
        </div>

    );
}

export default index