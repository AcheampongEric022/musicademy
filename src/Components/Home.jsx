import React from 'react'
import banner from "./../images/home.svg"
import Banner from './shared/Banner'

function Home() {
    return (
        <div id='home' className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24'>
        <Banner banner = {banner} heading="Harmony in Motion: Where Music Meets Passion" subheading="Join me on a journey of sound and exploration, where the rhythms of bass guitar and piano keyboard come together in perfect harmony. Discover the beauty and emotion of music with me." btn1={"Get Started"} btn2={"Join Our Community"}/>

        </div>
    )
}

export default Home