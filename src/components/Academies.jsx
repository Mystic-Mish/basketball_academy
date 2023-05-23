import React from 'react'
import "./style.css"
import { plansData } from '../data/academiesData'
import white from '../assets/whiteTick.png'

const Academies = () => {
    return (
        <div className="academies">
            <div className="programs-header">
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
            <div className="academies-details">
                {plansData.map((plan, i) => (
                    <div className="academy" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={white} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Academies