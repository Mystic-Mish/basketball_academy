import React from 'react'
import "./style.css"
import basketball from '../assets/nobg3.png'
import bake from '../assets/nobg2.png'

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <div className="navbar">
                <h1>Basketball Academy</h1>
                <ul className='links'>
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why Us</li>
                    <li>Academies</li>
                </ul>
            </div>
            <div className="ad">
                <div></div>
                <span>The best Basketball Academy in Kenya</span>
            </div>
            <div className="text">
                <div><span className='stroke-text'>Grow </span><span>Your</span></div>
                <div><span>Talent with us.</span></div>
            </div>
            <div className="figures">
                <div><span>+50</span><span>Expert Coaches</span></div>
                <div><span>+1000</span><span>Members joined</span></div>
                <div><span>+10</span><span>Programs</span></div>
            </div>
            <div className="buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="header-right">
            <button className='btn'>Join Now</button>
            <img src={basketball} className="header-img" alt="A player going to dunk" />
            <img src={bake} className="header-img-two" alt="For styling purposes" />
        </div>
    </div>
  )
}

export default Header