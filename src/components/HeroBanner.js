import React from 'react'
import './styles/HeroBanner.css'

function HeroBanner() {
    return (
        <div className='HeroBanner'>
            <div className="HBCard">
                <img
                src='https://pensil-social.s3.ap-south-1.amazonaws.com/storage/community-logos/105434de-cc1e-4e29-8242-6a94238ca514.webp'
                alt=''
                className='HeroImg'
            />

            <p className="HeroDesc">
                Hero Descriptiongggggg gggggg ggggggg gggggg ggggggggg gggggggg ggg ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
            </p>

            <button className="CTAButton">
                Explore...
            </button>
            </div>

            
            <h1 className="HighlightQuote">
                Good Books are Gold Mines
            </h1>
        </div>
    )
}

export default HeroBanner