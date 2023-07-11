import React from 'react'
import Barca from '../Pics/FCBarca.jpg'
import afa from '../Pics/afa.jpg'

function Teams() {
  return (
    <div id='teams' class=" bg-white dark:bg-gray-900 pt-10 pb-32 ">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Favorite Teams</h1>
            <div className='flex justify-around'>
              <div>
                <img class="rounded-full h-28 max-w-xs" src={Barca}></img>
                <p className=' font-semibold text-gray-800  dark:text-white 'text-slate-50>The Barcelona team is absolutely incredible, showcasing a level of skill and talent that leaves fans in awe. With players like Lionel Messi, they have consistently pushed the boundaries of what is possible on the football field, mesmerizing spectators with their agility, creativity, and extraordinary teamwork. Barcelona's style of play is both exhilarating and elegant, making them not only successful but also undeniably cool in the eyes of football enthusiasts around the world.</p>
              </div>
              <div>
                <img class="rounded-full h-28 max-w-xs" src={afa}></img>
                <p className=' font-semibold text-gray-800  dark:text-white '>The Argentinian national team is an absolute powerhouse, radiating with passion, flair, and an unwavering fighting spirit. Led by superstars like Lionel Messi, they possess an incredible combination of individual brilliance and cohesive teamwork that leaves fans captivated. Argentina's rich football history, coupled with their thrilling style of play, makes them an electrifying force to be reckoned with on the international stage. The team's ability to ignite the emotions of an entire nation and their unwavering commitment to success make them undeniably cool and an inspiration to aspiring footballers worldwide.</p>
              </div>
            </div>
    </div>
  )
}

export default Teams