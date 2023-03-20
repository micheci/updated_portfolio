import React from 'react'
import Barca from '../Pics/FCBarca.jpg'
import afa from '../Pics/afa.jpg'

function Teams() {
  return (
    <div id='teams' class=" bg-white dark:bg-gray-900 ">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Favorite Teams</h1>
            <div className='flex justify-around'>
            <img class="rounded-full h-28 max-w-xs" src={Barca}></img>
            <img class="rounded-full h-28 max-w-xs" src={afa}></img>
            </div>
    </div>
  )
}

export default Teams