import React from 'react'
import Card from '../../Card'


const index = () => {

    return (
        <div className='bg-inito-light-blue  pt-10'>
            <div className='mx-auto flex  lg:max-w-6xl items-center justify-between lg:p-6 lg:px-8 flex-col pb-10 '>
                {/* Doctorcard */}

                <div className=' max-w-xs md:max-w-4xl w-full border-gray-600 rounded-md bg-white shadow-xl -mt-20 md:-mt-40 '>
                    <div className='relative flex justify-end'> <img src='https://cdn.inito.com/inito_website/blue_calendar.png' className='absolute w-24 h-24 -top-12 -right-10 ' />

                    </div>
                    <div className='font-semibold text-lg text-inito-blue mt-5 mx-10 max-w-xs'>
                        WHY MEASURE PROGESTERONE?
                    </div>
                    <div className='text-base mt-5 mx-10 max-w-3xl'>
                        <strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*. <br /> <br />
                        A sure way to confirm ovulation is a <strong>rise in Progesterone level</strong> after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.
                    </div>
                    <div className='text-gray-500 text-sm mt-5 mx-10'> * Source: National Institutes of Health</div>
                    <div className='text-lg mt-5 mx-10'>
                        <q>
                            <strong>
                                Inito is all that you need to give you the best chance of conception.
                            </strong>
                        </q>
                    </div>
                    <div className='mx-10 my-5'>
                        <div className='flex'>
                            <img src="https://cdn.inito.com/inito_website/doc_testimonial_wagner.jpg" alt="DR. Wagner" className='w-20 h-20' />
                            <div className='ml-5'>
                                <div className='font-semibold text-lg '>Dr. Rachel Wagner
                                </div>
                                <div className='text-sm text-gray-400'>MD</div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-full mt-10 mb-20'>
                    <div className='text-4xl font-semibold text-center mb-10'>
                        Why Inito is the smarter <br /> way to get <span className='relative'>pregnant
                            <svg className='absolute left-1' width="170" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.333 9.365a2015.836 2015.836 0 0 1 79.416-2.736c.888-.014 1.775-.028 2.662-.035 2.005-.028-5.612.077-4.396.056.272 0 .543-.007.822-.014.477 0 .953-.014 1.438-.02l5.735-.064c8.538-.076 17.075-.097 25.613-.07 2.514.057 5.02-.013 7.526-.201a25.114 25.114 0 0 0 4.84-.57c1.134-.265 1.323-.592.559-.968-.781-.724-1.808-1.1-3.081-1.114-5.136-1.162-10.559-1.664-15.826-2.088-6.829-.557-13.69-.94-20.551-.96-16.902-.063-33.804.097-50.698.417-15.226.285-30.444.745-45.662 1.371-8.595.355-17.19.766-25.776 1.232-1.89-.02-3.747.14-5.571.48-.937-.013-1.734.258-2.375.829.542.64 1.282 1.002 2.219 1.1 1.758.55 3.574.925 5.44 1.127 6.195.94 12.497 1.504 18.775 1.845 6.278.34 12.63.724 18.899.383h-.008Z" fill="#29A2BA" /></svg>
                          
                        </span>
                    </div>
                    <Card type={'one'}
                        title={"Adapts to your irregular cycle"}
                        content={`Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.<br /> <br />
Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.`}
                        image={"https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721230913/lady-inito_1_iihiqh.jpg"}
                    />
                    <Card type={'two'}
                        button={true}
                        image={"https://res.cloudinary.com/dg6y2dtpl/image/upload/v1721230635/Mask_group_amcvqx.jpg"}
                        title={"Inito tracks everything so you don’t have to"}
                        content={`
                            The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate. <br/> <br/>Our App notifies you for everything:
                            <ul class="list-disc ml-5 marker:text-inito-blue"><li>Your fertility levels</li><li>When to test on the right days</li><li>When you’ve successfully ovulated</li><li>And when to roll into bed!</li></ul>`}
                    />
                    <Card type={'one'}
                        title={"Get charts and actual values of your hormones"}
                        content={`Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range. <br /> <br />Inito measures real values of your hormones to personalize results to the unique you`}
                        image={"https://cdn.inito.com/inito_website/why_inito_is_smarter_way/get_charts_and_actual_values@2x.png"}
                    />

                </div>

            </div>
        </div>

    )
}

export default index