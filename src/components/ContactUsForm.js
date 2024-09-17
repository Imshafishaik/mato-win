import React, { useState } from 'react';
import "../assets/css/ContactUs.css";
import { send } from 'emailjs-com';

const ContactUsForm = () => {
    const [toSend,setToSend] = useState({
        from_name:"",
        to_name:"",
        message:""
      })
    
      const handleSubmit=(e)=>{
        e.preventDefault();
        send(
          'service_59t0jgf',
          'template_29kylzy',
          toSend,
          'FcqArb7LYnpBTuV3H'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // setToSend()
          })
          .catch((err) => {
            console.log('FAILED...', err);
            // setToSend()
          });
      }
    
      const handleChange=(e)=>{
        setToSend({
          ...toSend,[e.target.name]:e.target.value
        })
      }
  return (
        <div className="footer_main_blk" id="contact">
      <div className="footer_sub_blk">
        
          <h1>{"------------ Hello guys, Get in touch with Us! ------------"}</h1>
      </div>
      <div className="mail_sub_blk">
        <div className="footer_mail_blk">
          <span>
            Hello Guys, If you have any queries then please contact me or drop a email!
          </span>
          <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Please enter name..." name="from_name" value={toSend.from_name} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
            <input type="email" placeholder="Please enter email..." name="to_name" value={toSend.to_name} onChange={(e)=>handleChange(e)} />
          </div>
          <div>
            <textarea type="text" placeholder="Enter your query..." name="message" value={toSend.message} onChange={(e)=>handleChange(e)} />
          </div>
          <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUsForm
