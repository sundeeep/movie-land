import React from 'react'
import './styles/GroupsHeader.css'
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton} from "@material-ui/core"

function GroupsHeader() {
    return (
        <div className='GroupsHeader'>
            
            <div className="LeftHeader">
                <GroupsIcon className='GroupsIcon'/>
                <h2>Groups</h2>
            </div>

            <div className="GroupSearch">
                <input type="text" className='input' placeholder='Explore Groups :)'/>
                
                    <IconButton><SearchIcon className='SearchIcon' /></IconButton>
            </div>

            <Button
            variant='outlined'
            className='LogInBtn2'>Log In</Button>
        
        </div>
    ) 
}

export default GroupsHeader