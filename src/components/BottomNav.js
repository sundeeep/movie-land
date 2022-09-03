import React from 'react'
import './styles/BottomNav.css'

import { HashLink as Link } from "react-router-hash-link";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";


function BottomNav() {
        const [value, setValue] = React.useState("recents");

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

    return (
            <BottomNavigation
            value={value}
            className="BottomNavigation"
            onChange={handleChange}
            >
                <Link to="#CG" smooth>
                    <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                    />
                </Link>

                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                    onClick
                />
                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon />}
                />
            </BottomNavigation>
    );
}

export default BottomNav