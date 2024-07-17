import React from 'react'
import { Carousel } from 'react-responsive-carousel'


const index = () => {


    const TestimonialData = [{ name: 'test1' }, { name: 'test2' }, { name: 'test3' }, { name: 'test4' }]
    return (
        <div className='w-full'>
            <Carousel showArrows={false} useKeyboardArrows={true} >
                {TestimonialData.map((data, index) => (
                    <div className="">
                        <div key={index} >
                            {data.name}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default index