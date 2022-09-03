import React from 'react'
import './Admin.css'
import FAQ from './components/FAQ'

export default function Admin() {
    return (
        <div className='Admin'>

            <div className='AdminForm'></div>

            <div className='AdminPreview'>
                <FAQ />
            </div>
            
        </div>
    )
}