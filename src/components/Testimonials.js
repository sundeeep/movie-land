import React from 'react'
import './styles/Testimonials.css'
import TestimonialCard from './TestimonialCard'
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Button } from "@material-ui/core";

import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Testimonials() {

    const [values, setValues] = useState([]);
        const testimonialsCollectionRef = collection(db, "Testimonials");
        useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
            const getTestimonials = async () => {
                onSnapshot(testimonialsCollectionRef, (snapshot) => setValues(snapshot.docs.map((doc) => doc.data())))
            };

        getTestimonials();
        }, [testimonialsCollectionRef]);

    return (
        <div className="Testimonials">
            <div className='TestimonialsHeader'>
                <FormatQuoteIcon className='TestimonialIcon'/>
                <h1>Testimonials</h1>
                <Button className='LogIn-Btn'>Log In</Button>
            </div>
            {values.map(({ oneAvtUrl, oneTestName, oneTestDesc, twoAvtUrl, twoTestDesc, twoTestName, threeAvtUrl, threeTestDesc, threeTestName}) => {
                return (
                    <div className='Glass'>
                        <TestimonialCard Avt={oneAvtUrl} TestName ={oneTestName} TestDesc = {oneTestDesc} />
                        <TestimonialCard Avt={twoAvtUrl} TestName ={twoTestName} TestDesc = {twoTestDesc} />
                        <TestimonialCard Avt={threeAvtUrl} TestName ={threeTestName} TestDesc = {threeTestDesc} />
                    </div>
                )
            })}
            
        </div>
    )
}

export default Testimonials