import { useState } from 'react'
import pic from './assets/pic.jpeg'

function Info() {
    return (
        <header className='header'>
            <img src={pic} alt="Picture of employee." />
            <div className="text-content">
                <h1 className='heading'>Jessica Singletary</h1>
                <h2 className='sub-heading'>Self-taught Frontend Developer</h2>
                <a href='#'>www.jessica-singletary.com</a>
            </div>
            <div className="btns">
                <button className='email-btn'><i className="fa-solid fa-envelope"></i> Email</button>
                <button className='linkedin-btn'><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>
        </header>
    )
}

export default Info