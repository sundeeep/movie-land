import React, { } from 'react'
import './styles/FAQGrid.css'
import FAQCard from './FAQCard';

import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";


function FAQGrid() {

        const [FAQs, setFAQs] = useState([]);
        const faqsCollectionRef = collection(db, "FAQ");
        useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
            const getFAQs = async () => {
                onSnapshot(faqsCollectionRef, (snapshot) => setFAQs(snapshot.docs.map((doc) => doc.data())))
            };

        getFAQs();
        }, [faqsCollectionRef]);

    return (
        <div className="FAQGrid">

            {FAQs.map((faq) => {
                return (
                <div className="FAQGrid">
                    <FAQCard faq={faq.faqOne} ans={faq.ansOne} />
                    <FAQCard faq={faq.faqTwo} ans={faq.ansTwo} />
                    <FAQCard faq={faq.faqThree} ans={faq.ansThree} />
                    <FAQCard faq={faq.faqFour} ans={faq.ansFour} />
                    <FAQCard faq={faq.faqFive} ans={faq.ansFive} />
                </div>
                );
            })}

        </div>
    );
}

export default FAQGrid