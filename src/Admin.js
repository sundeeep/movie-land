import React from 'react'
import './Admin.css'
import FAQ from './components/FAQ'
import FAQUpdater from "./pages/FAQUpdater";
import OwnerBioUpdater from './pages/OwnerBioUpdater';
import HeadHeroUpdater from "./pages/HeadHeroUpdater"
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from 'react-router-dom';
import HeroBanner from './components/HeroBanner';
import Header from './components/Header';
import CommunityOwner from './components/CommunityOwner';
import Testimonials from './components/Testimonials';
import TestimonialUpdater from './pages/TestimonialUpdater';
import { Button, Avatar, IconButton } from "@material-ui/core";


export default function Admin() {


    return (
        <div className='Admin'>

            <div className="AdminHeader">
                <AdminPanelSettingsIcon className='AdminIcon'/>
                <h1>Admin Console</h1>
                <Link to="/home"><Button className='Publish'>Publish</Button></Link>
            </div>

            <div className="AdminBody">
                <div className='AdminForm'>
                    <HeadHeroUpdater/>
                </div>
                <div className='AdminPreview'>
                    <Header />
                    <HeroBanner />
                </div>
            </div>
            
            
            <div className="AdminBody">
                <div className='AdminForm'>
                    <OwnerBioUpdater />
                </div>
                <div className='AdminPreview'>
                    <CommunityOwner />
                </div>
            </div>

            
            <div className="AdminBody">
                <div className='AdminForm'>
                    <TestimonialUpdater />
                </div>
                <div className='AdminPreview'>
                    <Testimonials />
                </div>
            </div>

            
            <div className="AdminBody">
                <div className='AdminForm'>
                    <FAQUpdater />
                </div>
                <div className='AdminPreview'>
                    <FAQ />
                </div>
            </div>

        </div>
    )
}