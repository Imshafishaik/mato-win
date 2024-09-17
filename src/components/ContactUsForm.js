import React from 'react';
import "../assets/css/ContactUs.css";

const ContactUsForm = () => {
  return (
    <div className='mato_contact'>
    <div>
      <h1>Contact Us</h1>
        <form>
           <div >
            <input type='text' placeholder='Enter your name..' />
            </div>
            <div>
            <input type='email' placeholder='Enter your email..' />
            </div>
            <div>
            <textarea placeholder='Please type your message..' />
          </div>
          <button type='submit'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default ContactUsForm
