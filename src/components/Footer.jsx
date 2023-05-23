import React from 'react'
import "./style.css"
import Github from '../assets/github.png'
import linkedIn from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <div className="foot">
                <div className="social-links">
                    <img src={Github} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={Instagram} alt="" />
                </div>
                <div className="footer-logo">
                <h1>Basketball Academy</h1>
            </div>
            </div>
        </div>
    )
}

export default Footer