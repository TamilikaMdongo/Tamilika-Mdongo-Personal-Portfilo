import  { useEffect, useState } from 'react'
import pic from '../assets/file.png'


const titles = ['Web Designer', 'Full Stack Web Developer', 'Mobile App Developer', 'Business Analyst']

const Hero = () => {


  const [currentName, setCurrentName] = useState(titles[0]);

 

  useEffect(() => {
     const interval = setInterval(() => {
      setCurrentName((prev) => {
        const availableTitles = titles.filter((title) => title !== prev);
        return availableTitles[Math.floor(Math.random() * availableTitles.length)];
      });
    }, 5000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  
  return (
    <div className='hero'>
        <div className="hero-text">
        <h2>{currentName}</h2>
        <h1>Tamilika Mdongo</h1>
        <p>I am a Full Stack Developer based in Johannesburg, South Africa</p>
        <button>My Work</button>
        </div>
       
        <div className="hero-image">
            <img src={pic}  />
        </div>
    </div>
  )
}

export default Hero