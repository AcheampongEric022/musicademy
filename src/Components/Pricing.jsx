import React, { useState } from 'react'
import circle from "../images/circleYellow.png"

function Pricing() {

    const [isYearly, setIsYearly] = useState(false);

    const packages = [
        { name: "Online Lessons", monthlyPrice: 39, yearlyPrice: 399, description: "Learn from the comfort of your own home with our online lessons! Get personalized instruction via WhatsApp and YouTube, perfect for those with busy schedules or preferring remote learning. Includes:", green: circle },
        { name: "Onsite Lessons", monthlyPrice: 59, yearlyPrice: 599, description: "Experience the benefits of in-person learning at our music school! Get hands-on instruction and feedback in a dedicated music environment. Includes:", green: circle },
        { name: "Premium - Both", monthlyPrice: 79, yearlyPrice: 799, description: "Combine the best of both worlds with our hybrid package! Get the flexibility of online lessons and the benefits of in-person learning. Includes:", green: circle },

        { name: "Private Meeting", monthlyPrice: 99, yearlyPrice: 999, description: "Get personalized attention and tailored instruction with our private one-on-one lessons! Perfect for those seeking intensive learning, flexible scheduling, or specific goals. Includes:", green: circle }
    ]

    return (
        <div id='pricing' className='md:px-4 p-4 max-w-6xl mx-auto py-10'>
            <div className='text-center'>
                <h2 className="md:text-5xl text-3xl font-bold text-primary mb-2">
                    Our Lesson Plans</h2>
                <p className='text-tertiary md:1/3 mx-auto px-4'>Join me on a journey of sound and exploration, where the rhythms of bass guitar and piano keyboard come together in perfect harmony. Discover the beauty and emotion of music with me.</p>


                {/* toggle pricing */}
                {/* toggle pricing */}

                <div className="mt-16">
                    <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                        <div className={`flex items-center w-14 h-6 bg-gray-300 rounded-full ${isYearly ? "border-2 border-primary" : "border-2 border-gray-300"}`}>
                            <div className={` w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-7" : "bg-gray-500"}`}></div>
                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>


            </div>

            {/* pricing Cards */}
            {/* pricing Cards */}
            {/* pricing Cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
                {
                    packages.map((pkg, index) => <div key={index} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='text-tertiary text-center my-5'>{pkg.description}</p>

                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>{
                            isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`} <span className='text-base text-tertiary font-medium'>{`/${isYearly ? 'Year' : 'Month'}`}</span>
                        </p>

                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={pkg.green} alt="" /><span>Video Lessons</span></li>
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={pkg.green} alt="" /><span>Private Class</span></li>
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={pkg.green} alt="" /><span>Zoom Meetings</span></li>
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={pkg.green} alt="" /><span>Youtube Lessons</span></li>
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={pkg.green} alt="" /><span>Free Books</span></li>
                        </ul>
                        <div className='w-full mx-auto mt-8'>
                            <button className='btnPrimary'>Continue</button>

                        </div>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Pricing