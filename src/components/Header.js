import React from 'react'
import './styles/Header.css'

// import { HashLink as Link } from "react-router-hash-link";

//Material - UI -Icons
import {Button, Avatar, IconButton} from "@material-ui/core"
//import SettingsIcon from "@material-ui/icons/Settings"
//import MoreVertIcon from "@material-ui/icons/MoreVert"

function Header() {
    return (
        <div className='Header'>
            
            <div className='LeftHeader'>
                <IconButton>
                    <Avatar src="https://i.pinimg.com/736x/df/1e/1e/df1e1efb857c7e0608c09ab9d908bf1d.jpg"  className='CommLogo'/>
                </IconButton> 
            
                
            </div>

            <h2 className='CommName'>Movie </h2>

            <div className="RightHeader">
                <Button
                    variant='outlined'
                    className='LogInBtn' >Log In</Button>
            </div>
                
        </div>
    )
}

export default Header