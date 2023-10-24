import React,{useState} from 'react'
import JarvisVid from '../Videos/Jarvisv2.mp4'
import JarvisVid2 from '../Videos/jarvisv3.mp4'
import newGym from '../Videos/newGymAppv1.mp4'
import '../header.css'



const projects = [
    {
      title: 'FitHub',
      description: "FitHub is your all-in-one fitness platform for tracking your progress and finding the best exercises. It's a full-stack app with user authorization to keep your data secure. Share your fitness journey, log workouts, connect with a community, and discover new exercises. Stay motivated and achieve your fitness goals with FitHub.",
      videoSrc: newGym, // Define your video source
      link: '',
    },
 
  
    // Add more projects
  ];

  const videos = [JarvisVid2,JarvisVid];

const WorkingOn = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
const nextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length);
  };

  return (<div id="Prototypes" className='bg-gray-400'>
<h1 className="text-3xl font-bold text-center pt-4 pb-3 text-blue-800">Prototypes</h1>
    <div className="workingOnGrid  mt-4 pb-10 gap-4">

     
        <div className="video-carousel workingOncard">
            <div className='flexJarvis'>
      {videos.map((video, index) => (
        <video key={index}className=""  width="100%" controls="controls" style={{ display: index === currentVideoIndex ? 'block' : 'none' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
          
        </video>
      ))}
      <h1  width="100%" className="projectTitle text-center">Jarvis prototypes</h1>Our J.A.R.V.I.S prototype combines the marvel of augmented reality with conversational AI, creating an interactive experience that recognizes the world around it and answers your questions. Explore the future of technology with this captivating project.</div>
      <div className="carousel-buttons text-center">
        <button  className="jarvisBTN" onClick={prevVideo}>Version .1</button>
        <button className="jarvisBTN" onClick={nextVideo}>Version .2</button>
      </div>
        </div>

  {projects.map((project, index) => (
    <div key={index} className="d-flex justify-content-center align-items-center">
      <div className="workingOncard">
        <div className="align-items-center">
          <video
            className="embed-responsive-item rounded-lg"
            width="100%"
            src={project.videoSrc}
            controls="controls"
          ></video>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
          {project.title}
          </h5>
          <p   className="card-text ">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div></div>
  )
}

export default WorkingOn