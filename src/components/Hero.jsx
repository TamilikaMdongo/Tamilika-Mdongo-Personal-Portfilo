import React from 'react'
import pic from '../assets/file.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
        <h2>Full Stack Developer</h2>
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