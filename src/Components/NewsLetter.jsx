import React from 'react'
import Banner from './shared/Banner'
import newsImg from "../images/news.png"

function NewsLetter() {
  return (
    <div className='md:px-14 p-4 max-w-screen-2xl mx-auto my-12'>

      <Banner banner={newsImg} heading="EriDalene: Your Monthly Dose of Music Inspiration" subheading="Stay in tune with the latest news, tips, and updates from [Your Music School Name]! Our monthly newsletter, Harmony Hub, brings you:

- Exclusive music tips and tutorials
- News and updates from our music school
- Student success stories and testimonials
- Special promotions and discounts
- Upcoming events and workshops" btn1={"I have a code"} btn2={"Get Started"} />
    </div>
  )
}

export default NewsLetter