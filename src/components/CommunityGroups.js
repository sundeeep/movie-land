import React from 'react'
import './styles/CommunityGroups.css'
import GroupsHeader from './GroupsHeader'
import GroupCard from './GroupCard'

function CommunityGroups() {
    return (
        <div className='CommunityGroups' id='CG'>
            <GroupsHeader />
            <div className="GroupsGrid">
                
                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg'
                    GroupName='Crime Drama Lovers'
                    GroupDesc='Behind every successful fortune, There is CRIME.' />
                
                <GroupCard src='https://i.pinimg.com/564x/00/a5/2a/00a52ac2a6db2ddfabc3c0c2f3dc3a96.jpg' 
                GroupName='Heart Broken Squad' 
                GroupDesc='You will find solace, If you follow and watch our Group suggestions' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

                <GroupCard src='https://i.pinimg.com/474x/2d/d5/df/2dd5df5f5c988c5e386b5f68d4aa066c.jpg' 
                GroupName='Crime Drama Lovers' 
                GroupDesc='God Father' />

            </div>
        </div>
    )
}

export default CommunityGroups