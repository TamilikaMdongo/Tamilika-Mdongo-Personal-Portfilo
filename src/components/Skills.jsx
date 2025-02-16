import React from 'react'
import express from '../assets/icons8-express-js-50.png'
import flutter from '../assets/Flutter.png'


const Skills = () => {

    const react = "https://icon.icepanel.io/Technology/svg/React.svg"
    const node = "https://icon.icepanel.io/Technology/svg/Node.js.svg"
    const mongo ='https://icon.icepanel.io/Technology/svg/MongoDB.svg'
    const firebase ="https://icon.icepanel.io/Technology/svg/Firebase.svg"


  return (
    <div className='skills'>

        <div className="skill-title">
        <h1>My Skills</h1>
        </div>

        <div className="skills-tile">

            <div className="react">
            <img src={react} height={50}/>
                <h3>React</h3>
              
                <p>A JavaScript library for building fast, interactive,<br></br> and reusable user interfaces, primarily for web applications.</p>
            </div>

            <div className="react">
            <img src={node} height={50}/>
                <h3>NodeJS</h3>
            <p>A runtime environment that allows JavaScript to run on the server,enabling scalable backend development.</p>
            </div>

            <div className="react">
            <img src={express} height={50}/>
            <h3>Express</h3>
            <p>A lightweight framework for Node.js that simplifies building APIs and web applications with minimal setup.</p>
            </div>
           
            <div className="react">
            <img src={mongo} height={50}/>
            <h3>MongoDB</h3>
            <p>A NoSQL database that stores data in flexible JSON-like documents, making it ideal for scalable applications.</p>
            </div>

            <div className="react">
            <img src={flutter} height={50}/>
            <h3>Flutter</h3>
            <p> A UI toolkit by Google for building cross-platform mobile, web, and desktop apps with a single codebase.</p>
            </div>

            <div className="react"> 
            <img src={firebase} height={50}/>
            <h3>Firebase</h3>
            <p>A backend-as-a-service  offering authentication, real-time databases, hosting, and cloud functions for app development.</p>
            </div>

        </div>
        
    </div>
  )
}

export default Skills