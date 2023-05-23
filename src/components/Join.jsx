import React from 'react'
import "./style.css"

const Join = () => {
    return (
        <div className="join" id='join'>
            <div className="join-left">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span>LEVEL UP </span>
                </div>
                <div>
                    <span>YOUR TALENT </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="join-right">
                <form className="email">
                    <input type="email" name="user-email" id="" placeholder='Enter your email address' />
                    <button className='btn join-btn'>Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join