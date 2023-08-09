import React from 'react'
import NightSky from '../Pics/NightSky.jpg'
import DosStreams from '../Pics/DosStreams.jpg'
import Freedom from '../Pics/Freedom1.jpg'
import NFT from '../Pics/NFT.jpg'
import Weather from '../Pics/Weather.jpg'
import Finance from '../Pics/Finance.jpg'
import MMGG from '../Pics/MMGG.jpg'
import munkyLogo from '../Pics/default.png'

import NightSkyVid from '../Videos/NightSky.mp4'
import DosStreamVid from '../Videos/dosStream.mp4'
import FreedomApp from '../Videos/FreedomApp.mp4'
import MunkyNFT from '../Videos/MunkyNFT.mp4'
import FT from '../Videos/F&T.mp4'
import GymChewVid from '../Videos/Gym.mp4'
import MMGGVid from '../Videos/MMGG.mp4'
import JarvisVid from '../Videos/Jarvisv2.mp4'


function Projects() {
  return (
   
<section id="Projects" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Recent Work</h1>




        <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

        <div class="lg:flex">
            
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={JarvisVid} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <h1 class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                       Jarvis(In Progress,check out the video!)
                    </h1>
                    <span class="text-sm text-gray-500 dark:text-gray-300">Introducing J.A.R.V.I.S. (Just A Responsive Virtual Interactive System), inspired by Iron Man's AI. Built with the MERN stack and advanced AI like ChatGPT, J.A.R.V.I.S. understands your spoken questions and responds both textually and audibly. Its React interface ensures user-friendliness while the MERN stack handles data efficiently. J.A.R.V.I.S. aims to redefine AI interaction, bridging technology and conversation seamlessly.
</span>
                </div>
            </div>

        <div class="lg:flex">
            
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={MunkyNFT} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://cryptosite-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        MunkyNFT
                    </a>
                    <span class="text-sm text-gray-500 dark:text-gray-300">Immerse yourself in the vivid and imaginative world of MunkyNFT as you explore a diverse range of art styles, themes, and techniques. From breathtaking illustrations and mesmerizing animations to thought-provoking conceptual art, each MunkyNFT is a unique and exclusive creation, waiting to be discovered and appreciated by collectors like you.</span>
                </div>
            </div>

            <div class="lg:flex">
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={FT} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://financetracker-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                       F and T block
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">FinTrack offers a seamless and user-friendly experience that simplifies the process of creating and maintaining a budget. Take charge of your expenses by setting personalized spending limits for different categories, such as groceries, entertainment, bills, and more. Easily track your income and expenses, and receive real-time insights into your financial health.</span>
                </div>
            </div>
            
            <div class="lg:flex">
                <video class="object-cover w-full h-56 rounded-lg lg:w-64"src={NightSkyVid} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://spacesky-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        A Peek into Space
                    </a>
                    
                    <span class="text-sm text-gray-500 dark:text-gray-300">Introducing StellarView, an extraordinary website that allows users to embark on a mesmerizing journey through space and time. By simply entering the desired date, StellarView transports users to a virtual cosmic realm, providing a captivating glimpse of the universe as it appeared on that specific day.</span>
                </div>
            </div>

            <div class="lg:flex">
                <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={DosStreamVid} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://dos-streams-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Dos Streams
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">StreamSync brings together the captivating content of Ibai, the renowned Spanish streamer, and the thrilling updates from Riot Games, the creators of popular games like League of Legends and Valorant. Whether you're a fan of Ibai's entertaining streams, hilarious commentary, and engaging community interactions, or you're eager to stay updated on Riot Games' esports tournaments, game releases, and exclusive content, StreamSync has got you covered.</span>
                </div>
            </div>

            <div class="lg:flex">
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={FreedomApp} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://binary-upload-boom-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Freedom Social Media
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Freedom App is designed to liberate your creativity and provide a safe space for sharing your unique perspective with the world. Gone are the days of lengthy text posts and mundane updates. With Freedom App, your pictures become the canvas for self-expression, allowing you to tell your story in a visually stunning and captivating way.</span>
                </div>
            </div>

            

        

            

            <div class="lg:flex">
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={MMGGVid} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://mmgg-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        MMGG
                    </a>

                    <span class="text-sm text-gray-500 dark:text-gray-300">Simply enter the player's name, and PlayerInfo will provide you with an extensive profile, showcasing their gaming history, performance metrics, rankings, and more. Dive deep into their statistics, such as win rate, KDA (Kill/Death/Assist ratio), and other game-specific metrics, giving you a comprehensive understanding of their gameplay style and skill level.</span>
                </div>
            </div>

            <div class="lg:flex">
            <video class="object-cover w-full h-56 rounded-lg lg:w-64" src={GymChewVid} controls="controls"></video>

                <div class="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://hushed-clover-production.up.railway.app/" class="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        GYM-n-CHEW
                    </a>
                    <span class="text-sm text-gray-500 dark:text-gray-300">Welcome to Gym-n-Chew, the premier social media app designed specifically for fitness enthusiasts who love to share their workout experiences and culinary creations. Gym-n-Chew provides a unique platform where you can showcase your fitness journey through captivating workout pictures and delicious food posts, all in one vibrant community.</span>

                  
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Projects