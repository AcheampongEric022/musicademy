import React from 'react'
import featuresImg from "./../images/features.svg"



function Features() {
    return (
        <div id='feature' className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <div
                    className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold'>Explore Your Musical Side</h3>

                    <p className='text-base text-tertiary'>Explore your musical side with instrument tutorials, exclusive music tracks, and personal stories from my musical journey. Discover resources and tools to help you improve your skills, stay motivated, and unleash your full musical potential.</p>
                </div>

                {/* Featured Cards */}
                <div

                    className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>

                        {/* Items */}
                        {/* Items */}
                        {/* Items */}
                        <div className='bg-[rgb(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div className='items-center flex flex-col'>
                                <img className='w-60' src={featuresImg} alt="" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Piano Lessons</h5>
                            </div>
                        </div>
                        {/* Items */}
                        {/* Items */}
                        {/* Items */}
                        <div className='bg-[rgb(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
                            <div className='items-center flex flex-col'>
                                <img className='w-60' src={featuresImg} alt="" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Bass Guitar Lessons</h5>
                            </div>
                        </div>
                        {/* Items */}
                        {/* Items */}
                        {/* Items */}
                        <div className='bg-[rgb(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer'>
                            <div className='items-center flex flex-col'>
                                <img className='w-60' src={featuresImg} alt="" />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Basic Music Theory</h5>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features