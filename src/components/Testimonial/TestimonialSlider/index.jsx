import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const index = () => {


    const settings = {
        dots: true,
    };
    return (
        <div className=" m-0 ml-auto">
            <Slider {...settings}>
                <div>
                    <img src="http://placehold.co/600x400" />
                </div>
                <div>
                    <img src="http://placehold.co/600x400" />
                </div>
                <div>
                    <img src="http://placehold.co/600x400" />
                </div>
                <div>
                    <img src="http://placehold.co/600x400" />
                </div>
            </Slider>
        </div>
    );
}

export default index