import React from 'react'
import WebResumePic from '../Pics/WebResumePic.jpg'

function About() {
  return (
    <div id='About' className='py-16 bg-white'>
        <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={WebResumePic} alt="image" loading="lazy" width="" height=""/>
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">A motivated and Dedicated Full-Stack Developer based in USA</h2>
          <p class="mt-6 text-gray-600">Hi!, I'm Micheci Martinez a Full Stack Web Developer with 3+ experience in programming. I am always trying to improve programming wise and in real life to hopefully inspire my loved ones.</p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default About