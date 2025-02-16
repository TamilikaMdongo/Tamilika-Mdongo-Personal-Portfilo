import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("movjkorz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className='contact'>
        <h1>Get in touch</h1>
        <form className="custom-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
      </div>
      <div className="form-row">
        <input type="text" placeholder="Subject" />
      </div>
    </form>
    <button type='submit' disabled={state.submitting}>Submit</button>
        </div>
  )
}

export default Contact