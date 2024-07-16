import React from 'react'

const heroContent = () => {
    return (
        <div className='mx-auto flex  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8 flex-col pb-10'>
            <div className='text-2xl md:text-4xl font-bold max-w-sm md:max-w-xl text-center px-10 md:px-0 leading-relaxed'>
                The
                <span className='mx-1 md:mx-2 relative'>
                    only
                    <svg className='absolute ml-10  md:ml-24 ' width="82" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.018 7c9.513-.19 19.024-.378 28.537-.569 9.513-.19 18.928-.375 28.391-.566l16.016-.317c1.161-.022 2.312-.315 3.377-.778.972-.423 2.177-1.107 2.868-1.95.397-.482 1.055-1.305.683-1.975-.372-.671-1.197-.859-1.905-.845-9.513.19-19.024.378-28.537.569-9.464.187-18.928.375-28.391.565l-16.015.318c-1.162.022-2.313.315-3.378.778-.972.423-2.177 1.107-2.868 1.949C.399 4.662-.26 5.485.113 6.155c.372.671 1.197.862 1.905.848V7Z" fill="#29A2BA" /></svg>
                </span>
                fertility kit you will ever need
            </div>
            <div className='max-w-sm md:max-w-xl text-center md:text-base mt-5 px-10 md:px-0 '>
                Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy: <span className='font-semibold'>Progesterone.</span>
            </div>
            <div className='max-w-sm md:max-w-xl text-center font-semibold text-xl md:text-2xl mt-8 px-10 md:px-0'>
                What makes Inito different?
            </div>
            <div className='max-w-sm md:max-w-xl text-center md:text-base mt-4 px-10 md:px-0'>
                Inito is the only fertility monitor that measures all <span className='font-semibold'>4 hormones</span> on a <span className='font-semibold'>single test strip</span> , showing you a full picture of your cycles with results unique to your body.
            </div>
        </div>
    )
}

export default heroContent