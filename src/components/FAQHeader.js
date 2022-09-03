import React from 'react'
import './styles/FAQHeader.css'
import QuizIcon from '@mui/icons-material/Quiz';
import { Button } from '@material-ui/core';

function FAQHeader() {
    return (
        <div className='FAQHeader'>
            <QuizIcon className='FAQIcon'/>
            <h1><span>Frequently Asked Question</span><h1>FAQ</h1></h1>
            <Button
            className='LogInBtn2'>Log In</Button>
        </div>
    )
}

export default FAQHeader