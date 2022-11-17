import React from 'react'
import "./Contact.css"
import { toast } from "react-toastify";

export function Contact() {
  return (
    <div id='contact-main-container'>
      <div id='contact-main-container-inside'>
        <form id='contact-main-container-inside-form'
          onSubmit={(e) => {
            toast.success("Your message is send !");
            e.preventDefault();
          }}
        >
          <h1>Send Me Message</h1>
          <input type="text" placeholder='Type your name...' />
          <input type="number" placeholder='Type your phone..' />
          <input type="email" placeholder='Type your email...' />
          <button type='submit'>Submit</button>
        </form>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1393.930092966462!2d71.59181278111802!3d41.00216047626535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b57ae36d445%3A0xf63c7dde681140bc!2sUy!5e0!3m2!1suz!2s!4v1668710983642!5m2!1suz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}
