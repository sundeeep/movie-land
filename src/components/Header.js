import React from 'react'
import './styles/Header.css'

// import { HashLink as Link } from "react-router-hash-link";

//Material - UI -Icons
import {Button, Avatar, IconButton} from "@material-ui/core"
//import SettingsIcon from "@material-ui/icons/Settings"
//import MoreVertIcon from "@material-ui/icons/MoreVert"

import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Header() {

    const [values, setValues] = useState([]);
    const HeaderCollectionRef = collection(db, "HeroBanner");
    useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
        const getValues = async () => {
            onSnapshot(HeaderCollectionRef, (snapshot) => setValues(snapshot.docs.map((doc) => doc.data())))
        };

        getValues();
    }, [HeaderCollectionRef]);
    
        
    return (
        <div>
            {values.map(({CommunityLogo, CommunityName}) => {
                return (
                    <div className='Header'>
                        <div className='LeftHeader'>
                            <IconButton>
                                <Avatar src={CommunityLogo} className='CommLogo' />
                            </IconButton>
                        </div>

                        <h2 className='CommName'>{CommunityName}</h2>

                        <div className="RightHeader">
                            <Button
                                className='LogInBtn' >Log In</Button>
                        </div>
                            
                    </div>
            )
            })}
            
        </div>
    )
}

export default Header;
