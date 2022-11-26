import React, { useState } from 'react'
import "./Contact.css"
import { toast } from "react-toastify";
import { PatternFormat } from 'react-number-format';
// import { useForm } from 'react-hook-form';

export function Contact() {

    const current = new Date();
  const year = current.getFullYear();
  const month = current.getMonth();
  const fullTime = current.toLocaleTimeString()
  const fullDate = fullTime + " " + month + " " + year

  const [data, setData] = useState(
    { name: "", phone: "", email: "", date: fullDate, }
  )
  // const { register, handleSubmit, reset } = useForm();
  const cart = JSON.parse(localStorage.getItem("message") || "[]");

  // const onSubmit = (data) => {
  //   // const { name, email, phone } = data;
  //   localStorage.setItem("message", JSON.stringify([...cart, data]));
  //   toast.success("Your message is send !")
  //   reset()
  // }

  return (
    <div id='contact-main-container'>
      <div id='contact-main-container-inside'>
        <form id='contact-main-container-inside-form'
          onSubmit={(e) => {
            e.preventDefault()
            toast.success("Your message is send !")
            localStorage.setItem("message", JSON.stringify([...cart, data]));
            setData({ name: "", phone: "", email: "", })
          }}
        // onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Send Me Message</h1>
          <input required
            // {...register("name")}
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value })
            }}
            type="text" placeholder='Type your name...' />
          {/* <input required onChange={(e) => {
            setData({ ...data, phone: e.target.value })
          }} type="number" placeholder='Type your phone..' /> */}
          <PatternFormat
            // value={register.phone}
            // {...register("phone")}
            placeholder="Type your phone.."
            format="+99 (8##) ### ####"
            // maxLength={10}
            // allowemptyformatting="true"
            name="phone"
            onValueChange={(values) => {
              const { value } = values;
              setData({ ...data, phone: value });
            }}
          />
          <input required
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value })
            }}
            // {...register("email")}
            type="email" placeholder='Type your email...' />
          <button type='submit'>Submit</button>
        </form>
        <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1393.930092966462!2d71.59181278111802!3d41.00216047626535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4b57ae36d445%3A0xf63c7dde681140bc!2sUy!5e0!3m2!1suz!2s!4v1668710983642!5m2!1suz!2s" width="600" height="450" id='contact-iframe' loading="lazy" ></iframe>
      </div>
    </div >
  )
}
