import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

   function sendConfirmation (){
      var get = document.getElementById('contact-btn');
      get = window.alert('You have Successfully submitted the form')
    }
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fqefdkw', 'template_r8utypp', form.current, {
        publicKey: '60KdI3TveYtJufTIs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <div className='contact'>
        <h1>Get in touch</h1>
        <form  ref={form} onSubmit={sendEmail}  className="custom-form" >
      <div className="form-row">
        <input type="text" placeholder="Full Name" name='user_name' />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" name='user_email'/>
      </div>
      <div className="form-row">
        <input type="text" placeholder="Subject" name= 'message'/>
      </div>
      <button type='submit'  id='contact-btn' onClick={sendConfirmation}>Submit</button>
    </form>
   
        </div>
  )
}

export default Contact