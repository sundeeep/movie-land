import { updateDoc, doc, collection, onSnapshot, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import './styles/Updater.css'
import { db } from '../config/firebase'
// import { useForm } from "react-hook-form";

function FAQUpdater() {
  //React Staate Hook Starts...
    
    const [FAQs, setFAQs] = useState([]);
    const faqsCollectionRef = collection(db, "FAQ");
    useEffect(() => {
      //Create an ASYNCHRONOUS FUNCTION
        const getFAQs = async () => {
            onSnapshot(faqsCollectionRef, (snapshot) =>
            setFAQs(snapshot.docs.map((doc) => doc.data()))
            );
            // const data = await getDocs(faqsCollectionRef);
            // setFAQs(data.docs.map((doc) => ({
            //     ...doc.data()
            // })))
        };

        getFAQs();
    }, []);

    const [values, setValues] = useState({
        faqOne: FAQs.map(({ faqOne }) => faqOne),
        answerOne: FAQs.map(({ ansOne }) => ansOne),
        faqTwo: FAQs.map(({faqTwo}) => faqTwo),
        answerTwo: FAQs.map(({ansOne}) => ansOne),
        faqThree: FAQs.map(({faqThree}) => faqThree),
        answerThree: FAQs.map(({ansThree}) => ansThree),
        faqFour: FAQs.map(({faqFour}) => faqFour),
        answerFour: FAQs.map(({ansFour}) => ansFour),
        faqFive: FAQs.map(({faqFive}) => faqFive),
        answerFive: FAQs.map(({ansFive}) => ansFive)
    })



    const faqOneChange = (event) => {
        event.preventDefault();
        setValues((values) => ({
        ...values,
            faqOne: event.target.value === "" ? values.faqOne : event.target.value
        }));
    };

    const answerOneChange = (event) => {
        event.persist();
        setValues((values) => ({
        ...values,
        answerOne: event.target.value === "" ? FAQs.ansOne : event.target.value
        }));
    };

    const faqTwoChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          faqTwo: event.target.value === "" ? FAQs.faqTwo : event.target.value
        }));
    };

    const answerTwoChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          answerTwo:
            event.target.value === "" ? FAQs.ansTwo : event.target.value,
        }));
    };

    const faqThreeChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          faqThree:
            event.target.value === "" ? FAQs.faqThree : event.target.value,
        }));
    };

    const answerThreeChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          answerThree:
            event.target.value === "" ? FAQs.ansThree : event.target.value,
         }));
    };

    const faqFourChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            faqFour: event.target.value==="" ? FAQs.faqFour : event.target.value,
        }));
    };

    const answerFourChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          answerFour:
            event.target.value === "" ? FAQs.ansFour : event.target.value,
        }));
    };

    const faqFiveChange = (event) => {
         event.persist();
        setValues((values) => ({
          ...values,
          faqFive:
            event.target.value === "" ? FAQs.faqFive : event.target.value,
        }));
    };

    const answerFiveChange = (event) => {
        event.persist();
        setValues((values) => ({
          ...values,
          answerFive:
            event.target.value === "" ? FAQs.ansFive : event.target.value,
        }));
    };

    const updateFAQs = async (faqOne, answerOne, faqTwo, answerTwo, faqThree, answerThree, faqFour, answerFour, faqFive, answerFive) => {
        const faqDoc = doc(db, "FAQ", 'Ie3nVh1nSPkie38ziKPH');
        const newFAQ = {
            faqOne: faqOne,
            ansOne: answerOne,
            faqTwo: faqTwo,
            ansTwo: answerTwo,
            faqThree: faqThree,
            ansThree: answerThree,
            faqFour: faqFour,
            ansFour: answerFour,
            faqFive: faqFive,
            ansFive: answerFive
        };
        await updateDoc(faqDoc, newFAQ);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFAQs(
            values.faqOne,
            values.answerOne,
            values.faqTwo,
            values.answerTwo,
            values.faqThree,
            values.answerThree,
            values.faqFour,
            values.answerFour,
            values.faqFive,
            values.answerFive
        );

        
    };

    return (
        <div className="Updater">
                {FAQs.map((faq) => {
                    return (
                        <form className="Faq__UpdataForm" onSubmit={handleSubmit}>
                            <input
                            id="faq-one"
                            class="form-field"
                            type="text"
                            placeholder="Enter FAQ One..."
                            // defaultValue="Good books"
                            name="faqOne"
                            value={values.faqOne}
                            onChange={faqOneChange}
                            // required
                            />

                            <input
                            id="answer-one"
                            class="form-field"
                            type="text"
                            placeholder="Enter Answer One..."
                            name="answerOne"
                            // value={values.answerOne}    
                                onChange={answerOneChange}
                                required
                            />

                            <input
                            id="faq-two"
                            class="form-field"
                            type="text"
                            placeholder="Enter FAQ Two..."
                            name="faqTwo"
                            // defaultValue={faq.faqTwo}
                            // value={values.faqTwo}
                            required
                            onChange={faqTwoChange}
                            />

                            <input
                            id="answer-two"
                            class="form-field"
                            type="text"
                            placeholder="Enter Answer Two..."
                            name="answerTwo"
                            // defaultValue={faq.ansTwo}
                            // value={values.answerTwo}
                                onChange={answerTwoChange}
                                required
                            />

                            <input
                            id="faq-three"
                            class="form-field"
                            type="text"
                            placeholder="Enter FAQ Three..."
                            name="faqThree"
                            // defaultValue={faq.faqThree}
                            // value={values.faqThree}
                                onChange={faqThreeChange}
                                required
                            />

                            <input
                            id="answer-three"
                            class="form-field"
                            type="text"
                            placeholder="Enter Answer Three..."
                            name="answerThree"
                            // defaultValue={faq.ansThree}
                            // value={values.answerThree}
                                onChange={answerThreeChange}
                                required
                            />

                            <input
                            id="faq-four"
                            class="form-field"
                            type="text"
                            placeholder="Enter FAQ Four..."
                            name="faqFour"
                            // defaultValue={faq.faqFour}
                            // value={values.faqFour}
                                onChange={faqFourChange}
                                required
                            />

                            <input
                            id="answer-four"
                            class="form-field"
                            type="text"
                            placeholder="Enter Answer Four..."
                            name="answerFour"
                            // defaultValue={faq.ansFour}
                            // value={values.answerFour}
                                onChange={answerFourChange}
                                required
                            />

                            <input
                            id="faq-five"
                            class="form-field"
                            type="text"
                            placeholder="Enter FAQ Five..."
                            name="faqFive"
                            // defaultValue={faq.faqFive}
                            // value={values.faqFive}
                                onChange={faqFiveChange}
                                required
                            />

                            <input
                            id="answer-five"
                            class="form-field"
                            type="text"
                            placeholder="Enter Answer Five..."
                            name="answerFive"
                            // defaultValue={faq.ansFive}
                            // value={values.answerFive}
                                onChange={answerFiveChange}
                                required
                            />

                            <input class="update" type="submit" value="Update"  />
                        </form>

                        
                ) 
            })} 
        </div>
    );
}

export default FAQUpdater;
