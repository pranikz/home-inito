import React from 'react'
import HeroContent from './heroContent'


const index = () => {
    const stars = Array(5).fill(null);
    const publicationAssets = [{
        name: 'Bloomberg',
        href: 'https://cdn.inito.com/inito_website/press/Logo_Bloomberg@1x.png'
    }, {
        name: 'Forbes',
        href: 'https://cdn.inito.com/inito_website/press/Logo_Forbes_India@1x.png'
    },
    {
        name: 'The Week',
        href: 'https://cdn.inito.com/inito_website/press/Logo_The_Week@1x.png'
    }, {
        name: 'The Washington',
        href: 'https://cdn.inito.com/inito_website/press/Logo_Washington@1x.png'
    },
    {
        name: 'Enterpreneur',
        href: 'https://cdn.inito.com/inito_website/press/Logo_Enterpreneur@1x.png'
    }
    ]
    return (
        <>
            <div className='bg-inito-mobile md:bg-main-hero-bg md:bg-cover md:bg-center md:pl-4 lg:-mt-36 '>
                <div className='mx-auto flex  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8'>
                    <div className='flex-col lg:flex min-w-full md:h-screen relative'>
                        <div className=' mx-5 lg:mx-0'>
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
                        <div className='md:hidden block -mb-8'>
                            <img class="small-view" src="https://cdn.inito.com/inito_website/v2_main_hero_mobile.png" />
                        </div>
                        <div>
                            <div className='pt-14  w-full lg:hidden  flex justify-center relative  '>
                                <a href="#" class="-mt-8 absolute px-16 bg-inito-blue text-white py-3 rounded-full text-base text-bold hover:shadow-xl transition duration-200">How does inito work?</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='  mx-auto lg:max-w-6xl items-center  lg:p-6 lg:px-8'>
                    <span className='text-2xl text-gray-400 font-bold mx-auto md:flex justify-center hidden '>AS SEEN ON</span>
                    <div className='flex flex-row'>
                        {publicationAssets.map((item) => (
                            <div key={item.name} className='flex items-center mt-5 hidden md:block'>
                                <img src={item.href} alt={item.name} className='px-4 ' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' mt-10 mx-10  lg:hidden items-center  lg:p-6 lg:px-8 pb-10'>
                <span className='text-md text-gray-400 font-bold mx-auto flex justify-center mb-3  '>AS SEEN ON</span>
                <div className='flex-row justify-center'>
                    <div>
                        <div className='flex justify-center'>
                            {publicationAssets.slice(0, 1).map((item) => (
                                <div key={item.name} className='flex justify-center'>
                                    <img src={item.href} alt={item.name} className='w-[75%]' />
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center space-x-4 mt-4'>
                            {publicationAssets.slice(1, 3).map((item) => (
                                <div key={item.name} className='flex justify-center'>
                                    <img src={item.href} alt={item.name} className='w-[75%]' />
                                </div>
                            ))}
                        </div>

                        <div className='flex justify-center space-x-4 mt-4'>
                            {publicationAssets.slice(3, 5).map((item) => (
                                <div key={item.name} className='flex justify-center'>
                                    <img src={item.href} alt={item.name} className='w-[75%]' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <HeroContent />
        </>
    )
}

export default index