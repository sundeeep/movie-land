import React from 'react'
import './styles/GroupCard.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Button} from "@material-ui/core"


function GroupCard({src, GroupName, GroupDesc}) {
    return (
        <div className='GroupCard'>
            
            <img src = {src}
                alt=""
                className="GroupThumbnail" />
            
            <div className="GroupDetails">
                <div className="GroupCardInfo">
                    <h3 className="CardTitle">{GroupName}</h3>
                    <p className="CardDescription">{GroupDesc}</p>
                </div>

                <div className="GroupCTA">    
                    <div>
                        <PeopleAltIcon className='CountIcon' />
                        <h4>500</h4>
                    </div>
                    
                    <Button
                        variant='outlined'
                        className='LogInBtn2'> <span>Join Us</span></Button>
                </div>

            </div>
            
            
        
        </div>
    ) 
}

export default GroupCard