import React from 'react'
import "./styles/TestimonialCard.css";
import { IconButton, Avatar } from "@material-ui/core";


function TestimonialCard({Avt, TestName, TestDesc}) {
    return (
        <div className='TestimonialCard'>
            <div className='TestimonialHeader'>
                <IconButton><Avatar src={Avt} /></IconButton>
                <h2 className='Name'>{TestName}</h2>
            </div>

            <div className='TestimonialBody'>
                <p className='TestimonialDesc'>
                    {TestDesc}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard