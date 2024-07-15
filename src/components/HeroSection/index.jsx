import React from 'react'

const index = () => {
    const stars = Array(5).fill(null);
    return (
        <div className='bg-inito-mobile lg:bg-main-hero-bg md:bg-cover md:bg-center md:pl-4 lg:-mt-32 '>
            <div className='mx-auto flex  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8'>
                <div className='flex-col lg:flex min-w-full md:h-screen relative'>
                    <div className=' mx-5'>
                        <div className='flex items-center mt-10 md:mt-52 '>
                            <div className='flex items-center'>
                                {stars.map((_, index) => (
                                    <img
                                        key={index}
                                        src="https://cdn.inito.com/inito_website/star.png"
                                        alt="Star"
                                        className='w-4 h-4 mr-2'
                                    />
                                ))}
                            </div>
                            <div className='text-sm font-semibold text-inito-text'>TRUSTED BY 20,000+ COUPLES</div>
                        </div>
                        <div className='text-3xl lg:text-4xl font-bold text-inito-text mt-4 lg:w-[410px]'>Track your fertility hormones at home, in 10 minutes</div>
                        <div className='lg:text-lg  text-inito-text mt-4 lg:w-[410px]'>Get accurate results of <span className='font-semibold'>Estrogen, LH, PdG (urine metabolite of progesterone) and FSH</span> with Inito, the all-in-one fertility monitor.</div>
                        <div className='mt-10 hidden md:block'>
                            <a href="#" class=" px-8 bg-inito-blue text-white py-4 rounded-full text-base text-bold hover:shadow-xl transition duration-200">How does inito work?</a>
                        </div>

                    </div>
                    <div className='absolute w-[817px] h-[921px] left-1/3 hidden md:block '>
                        <img className='h-full' src="https://cdn.inito.com/inito_website/v2_main_hero_desktop.png" />
                    </div>
                    <div className='md:hidden block -mb-14'>
                        <img class="small-view" src="https://cdn.inito.com/inito_website/v2_main_hero_mobile.png" />
                    </div>
                   <div>
                        <div className='mt-14 -mb-6 w-full lg:hidden block  flex justify-center  '>
                            <a href="#" class=" px-16 bg-inito-blue text-white py-3 rounded-full text-base text-bold hover:shadow-xl transition duration-200">How does inito work?</a>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default index