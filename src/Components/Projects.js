import React,{useState} from 'react'

import NightSkyVid from '../Videos/NightSky.mp4'
import DosStreamVid from '../Videos/dosStream.mp4'
import FreedomApp from '../Videos/FreedomApp.mp4'
import MunkyNFT from '../Videos/MunkyNFT.mp4'
import FT from '../Videos/F&T.mp4'
import GymChewVid from '../Videos/Gym.mp4'
import MMGGVid from '../Videos/MMGG.mp4'

import NikeVid from '../Videos/Nike.mp4'
import "../CSS/project.css"


const projects = [
    {
      title: 'MunkyNFT',
      description: 'Immerse yourself in the vivid and imaginative world of MunkyNFT as you explore a diverse range of art styles, themes, and techniques.',
      videoSrc: MunkyNFT, // Define your video source
      link: 'https://cryptosite-production.up.railway.app/',
    },
    {
      title: 'F and T block',
      description: 
      "Explore F and T Block, your financial planning companion. With F and T Block, you can effortlessly create and manage your financial plans while gaining valuable insights into your spending habits. It's the tool you need to make your financial journey smoother and more informed.",
      videoSrc: FT, // Define your video source
      link: 'https://financetracker-production.up.railway.app/',
    },
    {
        title: 'Kicks',
        description: '"Kicks" is a cutting-edge shoe retail app that specializes in offering premium footwear selections. With an extensive inventory, it provides users with exclusive access to the most sought-after and stylish shoes available in the market. Elevate your footwear game and stay ahead of the fashion curve with "Kicks."',
        videoSrc: NikeVid, // Define your video source
        link: '',
      },
      {
        title: 'NightSky',
        description: 'Introducing StellarView, an extraordinary website that allows users to embark on a mesmerizing journey through space and time. By simply entering the desired date, StellarView transports users to a virtual cosmic realm, providing a captivating glimpse of the universe as it appeared on that specific day.',
        videoSrc: NightSkyVid, // Define your video source
        link: 'https://spacesky-production.up.railway.app/',
      },
      {
        title: 'DosStream',
        description: "Experience the future of multi-streaming with our app. Explore two streams side by side and chat in real-time. A seamless, immersive way to engage with content and your community.",
        videoSrc: DosStreamVid, // Define your video source
        link: 'https://dos-streams-production.up.railway.app/',
      },
      {
        title: 'Freedon App',
        description: "Experience Freedom – the ultimate platform to share your life with the world. Embrace your creative freedom, make every moment count, and create an engaging visual story. Freedom, where individuality meets expression.",
        videoSrc: FreedomApp, // Define your video source
        link: 'https://binary-upload-boom-production.up.railway.app/',
      },
      {
        title: 'MMGG',
        description: "Simply enter the player's name, and PlayerInfo will provide you with an extensive profile, showcasing their gaming history, performance metrics, rankings, and more. Dive deep into their statistics, such as win rate, KDA (Kill/Death/Assist ratio), and other game-specific metrics, giving you a comprehensive understanding of their gameplay style and skill level.",
        videoSrc: MMGGVid, // Define your video source
        link: 'https://mmgg-production.up.railway.app/',
      },
      {
        title: 'Gym-n-Chew',
        description: 'Welcome to Gym-n-Chew, the premier social media app designed specifically for fitness enthusiasts who love to share their workout experiences and culinary creations. Gym-n-Chew provides a unique platform where you can showcase your fitness journey through captivating workout pictures and delicious food posts, all in one vibrant community.',
        videoSrc: GymChewVid, // Define your video source
        link: 'https://hushed-clover-production.up.railway.app/login',
      },
    // Add more projects
  ];


function Projects() {
      const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 6; // Number of items to show per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
   
<div id="Projects" className=" pt-6 d-flex justify-content-center projectBG align-items-center">
  
    <h1 className='projectHeader'>Recent Work</h1>
    <div className="row">
    <div className=" text-right mr-10">
      {currentPage > 1 && (
        <button className="btn btn-primary" onClick={previousPage}>Previous</button>
      )}
      {endIndex < projects.length && (
        <button className="btn btn-primary" onClick={nextPage}>Next Page</button>
      )}
    </div>
  </div>
<div className="grid  ">
  {currentProjects.map((project, index) => (
    <div key={index} className="d-flex justify-content-center cardContainer align-items-center">
      <div className="card">
        <div className="">
          <video
            className="embed-responsive-item rounded-lg"
            width="100%"
            src={project.videoSrc}
            controls="controls"
          ></video>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center ">
            <a href={project.link} className="projectTitle">
              {project.title}
            </a>
          </h5>
          <p className="card-text text-center">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

  <div className="row">
    <div className="col-12 text-center">
      {currentPage > 1 && (
        <button className="btn bg-blue-200 text-black p-1" onClick={previousPage}>Previous</button>
      )}
      {endIndex < projects.length && (
        <button className="btn " onClick={nextPage}>Next</button>
      )}
    </div>
  </div>
</div>



  )
}

export default Projects