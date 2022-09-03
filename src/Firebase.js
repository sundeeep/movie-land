import { useEffect } from "react";
import { useState } from "react";
import { db } from "./config/firebase";
import {
    collection, getDocs, doc
} from 'firebase/firestore'

import FaqOne from "./FaqOne";

export default function Firebase() {
    const [FAQs, setFAQs] = useState([]);
    const faqsCollectionRef = collection(db, "FAQ")
    useEffect(() => {
        //Create an ASYNCHRONOUS FUNCTION
        const getFAQs = async () => {
            const data = await getDocs(faqsCollectionRef);
            
            setFAQs(data.docs.map((doc) =>
            ({...doc.data()
            })))
            
            console.log(FAQs)
        };

        getFAQs();
    }, [])

    return <div className="Firebase">

   


        {FAQs.map((faq) => {
            return <div>
                <FaqOne que={faq.faqOne} ans={faq.ansOne}/>
                <h1>{ faq.faqOne}</h1>
            </div> 
        })}
    </div>
}

