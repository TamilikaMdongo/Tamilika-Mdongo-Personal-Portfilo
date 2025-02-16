import React from 'react'


const Contact = () => {
  
  return (
    <div className='contact'>
        <h1>Get in touch</h1>
        <form className="custom-form" >
      <div className="form-row">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Subject" />
      </div>
    </form>
    <button type='submit' >Submit</button>
        </div>
  )
}

export default Contact