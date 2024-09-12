import React from 'react'
import about from "./../images/about1.svg"
import about2 from "./../images/about.svg"



function About() {
  return (
    <div id='about' className='px-10 md:px-0 p-4 max-w-5xl mx-auto space-y-10'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2'>
          <img src={about} alt="" />
        </div>


        {/* About content */}
        <div className='md:w-1/2'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>Our Brand is <span className='text-yellow-500'>In The Band. </span></h2>
          <p className='text-tertiary text-lg mb-7'>
            Join me on a journey of sound and exploration, where the rhythms of bass guitar and piano keyboard come together in perfect harmony. Discover the beauty and emotion of music with me.
          </p>
          <button className='btnPrimary'>more info</button>
        </div>
      </div>

      {/* Second Part */}
      {/* Second Part */}
      {/* Second Part */}
      <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
        <div className='md:w-1/2'>
          <img src={about2} alt="" />
        </div>


        {/* About content */}
        <div className='md:w-1/2'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can <span className='text-yellow-500'>Learn Music</span> now!!</h2>
          <p className='text-tertiary text-lg mb-7'>
            Join me on a journey of sound and exploration, where the rhythms of bass guitar and piano keyboard come together in perfect harmony. Discover the beauty and emotion of music with me.
          </p>
          <button className='btnPrimary'>more info</button>
        </div>
      </div>

    </div>
  )
}

export default About