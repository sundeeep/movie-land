import React, { } from 'react'
import './styles/FAQGrid.css'
import FAQCard from './FAQCard';

import { useEffect } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, doc } from "firebase/firestore";


function FAQGrid() {

        const [FAQs, setFAQs] = useState([]);
        const faqsCollectionRef = collection(db, "FAQ");
        useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
        const getFAQs = async () => {
            const data = await getDocs(faqsCollectionRef);

            setFAQs(data.docs.map((doc) => ({ ...doc.data() })));

            console.log(FAQs);
        };

        getFAQs();
        }, []);

    return (
        <div className="FAQGrid">

            {FAQs.map((faq) => {
                return (
                <div className='FAQGrid'>
                    <FAQCard faq={faq.faqOne} ans={faq.ansOne} />
                    <FAQCard faq={faq.faqOne} ans={faq.ansOne} />
                    <FAQCard faq={faq.faqOne} ans={faq.ansOne} />
                    <FAQCard faq={faq.faqOne} ans={faq.ansOne} />
                        
                </div>
                );
            })}

        </div>
    );
}

export default FAQGrid