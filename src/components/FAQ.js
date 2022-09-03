import React from 'react'
import './styles/FAQ.css'
import FAQHeader from './FAQHeader'
import FAQGrid from './FAQGrid'



function FAQ(props) {
    return (
        <div className='FAQ' id="FAQ">
            <FAQHeader />
            <FAQGrid props/>
        
        </div>
    )
}

export default FAQ