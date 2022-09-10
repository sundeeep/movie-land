import React from 'react'
import './styles/HeroBanner.css'
import { Button } from "@material-ui/core";

import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function HeroBanner() {

    const [values, setValues] = useState([]);
    const HeroCollectionRef = collection(db, "HeroBanner");
    useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
        const getValues = async () => {
            onSnapshot(HeroCollectionRef, (snapshot) => setValues(snapshot.docs.map((doc) => doc.data())))
        };

        getValues();
    }, [HeroCollectionRef]);
    
    return (
        <div className="HeroBanner">

            {values.map(({ BannerImage, BannerDescription, Quote }) => {
                return (
                    <div>
                        <div className="HBCard">
                        <img
                            src={BannerImage}
                            alt=""
                            className="HeroImg"
                        />

                        <p className="HeroDesc">{BannerDescription}</p>

                        <Button className="CTAButton">GET STARTED</Button>
                        </div>

                        <h1 className="HighlightQuote">{Quote}</h1>
                    </div>
                )
            })}
            
        </div>
    );
}

export default HeroBanner