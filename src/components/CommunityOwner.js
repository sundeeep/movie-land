import React from 'react'
import './styles/CommunityOwner.css'
import {IconButton, Avatar} from "@material-ui/core"
function CommunityOwner() {
    return (
        <div className='CommunityOwner'>
            <IconButton>
                <Avatar className='CommOwnerPic' src="https://avatars.githubusercontent.com/u/67505311?v=4" />
            </IconButton>
            <h2 className="CommOwnerName">Sandeep K. Dasari</h2>
            <h3 className="CommOwnerBio">Bio</h3>
            <p className="CommOwnerBio">Sandeep is a very fantastic person in this world of the
                    computer science world!
            </p>
        </div>
    )
}

export default CommunityOwner