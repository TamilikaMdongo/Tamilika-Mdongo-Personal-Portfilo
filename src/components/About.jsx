import React from 'react'
import pic from '../assets/file.png'

const About = () => {
    const coding = "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
  return (
    <div className='About'>
        <div className="about-image">
        <img src={coding}/>
        </div>
        <div className="about-text">
            <h1>About <br></br> Me</h1>
            <p>I'm Tamilika Mdongo, a software developer and business analyst passionate about <br></br>building innovative solutions. With a background in IT and business systems, <br></br>I specialize in full-stack development, app creation, and solving business <br></br> challenges through technology. I’m the founder of Purple Haze Technology,<br></br> where I work on delivering tailored tech solutions to help businesses thrive.<br></br>

Let's connect if you'd like to collaborate or learn more about my work!</p>
<button>Get in touch</button>
        </div>
        
    </div>
  )
}

export default About