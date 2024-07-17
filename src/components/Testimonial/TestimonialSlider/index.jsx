import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = () => {




    const settings = {
        dots: true,
        arrows: false,
    };
    return (
        <div className='mx-auto  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8 flex-col pb-10'>
            <div className=" m-0 ml-auto ">
                <Slider {...settings}>
                    <div className='rounded w-full max-w-6xl shadow-sm h-40'>

                    </div>
                    <div className='rounded w-full max-w-6xl shadow-sm h-40'>

                    </div>
                    <div className='rounded w-full max-w-6xl shadow-sm h-40'>

                    </div>
                    <div className='rounded w-full max-w-6xl shadow-sm h-40'>

                    </div>
                </Slider>
            </div>
        </div>

    );
}

export default index