import React from 'react'
import {Avatar, IconButton} from '@material-ui/core'
import './styles/FAQCard.css'

function FAQCard({faq, ans}){
    return (
        <div className="FAQCard">
            <div className="FAQQuestionCard">
            <IconButton className="IconButton">
                <Avatar className="Avatar" />
            </IconButton>

                <p className="FAQQuestion">{faq}</p>
            </div>

            <div className="FAQAnswerCard">
            <IconButton>
                <Avatar
                className="Avatar"
                src="https://avatars.githubusercontent.com/u/67505311?v=4"
                />
            </IconButton>

                <p className="FAQAnswer">{ans}</p>
            </div>
        </div>
    );
}

export default FAQCard