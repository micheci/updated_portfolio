import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {FaGithub,FaTwitter,FaLinkedin} from 'react-icons/fa'

import newpic from '../src/newpic.png'
import Logo from '../src/Pics/Logo.png'
import SoccerBG from '../src/Pics/PortfolioSoccerBG.jpg'
import NewSoccerVid from '../src/Pics/newSoccerVid.jpg'
import profilePicTwiiter from '../src/Pics/profilePicTwiiter.png'
import './header.css'
import 'remixicon/fonts/remixicon.css'
import { RiTwitterXFill} from "react-icons/ri";


const navigation = [
    { name: 'Recent Work', href: '#Projects' },
    { name:'Prototypes', href:'#Prototypes'},
    { name: 'Contact Me', href: '#Contact' }, 
   
  ]

export default function Example() {

  return (
    <div id="Home" className='pb-14 text-white' style={{ backgroundImage: `url(${NewSoccerVid})`,backgroundSize: 'cover'  }}>
       
       <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
  <ul className="flex space-x-4">
    {navigation.map((item, index) => (
      <li key={index}>
        <a href={item.href} className="text-white fw-bold hover:text-yellow-400">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
  {/* This is item on the top right */}
  <div className="bg-yellow-400 px-4 py-2 rounded-md ">
    <a href="https://docs.google.com/document/d/1BUcE_V2-Eb87sUVA3dc-JvWFL3t5U6Qi/edit?usp=sharing&ouid=112587397841558175089&rtpof=true&sd=true" className="text-black fw-bold hover:text-blue-700">
      Resume
    </a>
  </div>
</nav>

       
    


  <div class="flex flex-col md:flex-row lg:flex-row mt-2">
    {/* <!-- Left side: Title and Paragraph (Takes up half of the page on medium screens and above) --> */}
    <div class="md:w-2/5 p-8 ml-36">
      <p className='helloText'>Hello there!</p>
<p className='summmaryText'>I'm <span className='text-3x1  bg-blue-200 p-1 text-black'>Micheci</span>, a seasoned full-stack software engineer with a strong foundation in MongoDB, Express, React, and Node. My expertise empowers me to craft robust and seamless web applications from the ground up, always with an eye for exceptional user experiences.<br></br>
<br></br>
<p>My passion for User Experience (UX) Design is what fuels my work. I strive to integrate innovative solutions into our projects, <span className='text-3x1  bg-blue-200 p-1 text-black'>ensuring that our software remains cutting-edge while delivering a user-centric experience.)</span> I thrive in collaborative environments, working harmoniously with cross-functional teams to achieve our goals.</p>
<br></br>
If you're in search of a reliable, dedicated professional who's committed to pushing the boundaries of technology and creating lasting impact through exceptional user experiences, I'd love to join your team.
<br></br>
Feel free to <span className='text-3x1  bg-blue-200 p-1 text-black'>explore my portfolio in the top right :)</span> I'm eager to explore the possibilities of working together to achieve great things. Let's build something remarkable!</p>

      <div className=' mt-5 flex flex-row justify-around' >
            <a className='socials'  href="https://www.linkedin.com/in/micheci-martinez-6736201a1/"><FaLinkedin  style={{ fontSize: '2em' }} /></a>
            <a className='socialsG'href="https://github.com/micheci"><FaGithub style={{ fontSize: '2em' }}/></a>
            <a className='socialsT' href="https://twitter.com/Micheci12"><RiTwitterXFill style={{ fontSize: '2em' }}/></a>
           </div>  
    </div>

    {/* <!-- Right side: Picture (Takes up half of the page on medium screens and above) --> */}
    <div class="md:w-1/2 p-4 flex flex-col justify-center items-center">
    <img className='w-48 h-48 md:w-64 md:h-64 rounded-full' src={profilePicTwiiter}></img>
    <h2 class="  text-4xl font-bold  mb-2 justify-center">Full-Stack Developer</h2>
    <p><span className='text-3x1  bg-blue-200  border rounded p-1 text-black'>Text Me: 806-252-6923</span></p>


      {/* <!-- Replace the above div with the actual image using 'bg-cover' and 'bg-center' classes --> */}
    </div>
  </div>

    </div>
  )
}
