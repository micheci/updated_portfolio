import React from 'react'
import NightSky from '../Pics/NightSky.jpg'
import DosStreams from '../Pics/DosStreams.jpg'
import Freedom from '../Pics/Freedom1.jpg'
import NFT from '../Pics/NFT.jpg'
import Weather from '../Pics/Weather.jpg'
import Finance from '../Pics/Finance.jpg'

function Projects() {
  return (
   
<section id="Projects" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Recent Work</h1>

        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={NightSky} alt="Night sky Website"/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://spacesky-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        A Peek into Space
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={DosStreams} alt="2 Stream site"/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://dos-streams-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Dos Streams
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={Freedom} alt="Freedome blog site"/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://binary-upload-boom-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Freedom Social Media
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={NFT} alt="MunkyNFT site"/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://cryptosite-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        MunkyNFT
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={Weather} alt="Weather Full Stack App"/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://weatherappejs.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Mr.atmospheric 
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
                </div>
            </div>

            <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" src={Finance} alt=""/>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://financetracker-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                       F and T block
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Projects