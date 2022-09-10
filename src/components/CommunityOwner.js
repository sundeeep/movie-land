import React from 'react'
import './styles/CommunityOwner.css'
import { IconButton, Avatar, Button} from "@material-ui/core"
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";


import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

function CommunityOwner() {

    const [values, setValues] = useState([]);
    const OwnerCollectionRef = collection(db, "CommunityOwner");
    useEffect(() => {
      //Create an ASYNCHRONOUS FUNCTION
        const getValues = async () => {
            onSnapshot(OwnerCollectionRef, (snapshot) =>
            setValues(snapshot.docs.map((doc) => doc.data()))
            );
        };

        getValues();
    }, [OwnerCollectionRef]);

    return (
        <>
            {values.map(({ OwnerImgLink, OwnerName, OwnerBio }) => {
                return (
                    <div className="CommunityOwner">

            <div className="OwnerHeader">
                <CopyrightIcon className="OwnerIcon" />
                <h1>Community Owner</h1>
                <Button>Log In</Button>
            </div>

            <div className="OwnerBody">
                <div className="OwnerVisual">
                    <IconButton>
                        <Avatar src={OwnerImgLink} alt=''
                            className="OwnerImage"
                        />
                    </IconButton>
                    <h1 className='OwnerName'>{OwnerName}</h1><br></br>
                    <div className="SocialMediaLinks">
                        <IconButton><InstagramIcon className='SocialMediaIcons Instagram'/></IconButton>
                        <IconButton><TwitterIcon   className='SocialMediaIcons Twitter'/></IconButton>
                        <IconButton><LinkedInIcon  className='SocialMediaIcons LinkedIn'/></IconButton>
                        <IconButton><YouTubeIcon   className='SocialMediaIcons YouTube'/></IconButton>

                    </div>
                </div>

                <div className='Bio'>
                    <p>{OwnerBio}</p>
                </div>
            </div>

            
        </div>
                )
            })}
        </>
    );
}

export default CommunityOwner