import React, {useState} from 'react'
import './FaqRoute.css'

function FaqRoute() {

    //React Staate Hook Starts...

    const [values, setValues] = useState({
    faqOne: "",
    answerOne:"",

    faqTwo: "",
    answerTwo: "",

    faqThree: "",
    answerThree: "",

    faqFour: "",
    answerFour: "",

    faqFive: "",
    answerFive: "",
});

    const faqOneChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        faqOne : event.target.value,
    }));
};

    const answerOneChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        answerOne : event.target.value,
    }));
};

    const faqTwoChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        faqTwo : event.target.value,
    }));
};

    const answerTwoChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        answerTwo : event.target.value,
    }));
};

    const faqThreeChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        faqThree : event.target.value,
    }));
};

    const answerThreeChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        answerThree : event.target.value,
    }));
};

    const faqFourChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        faqFour : event.target.value,
    }));
};

    const answerFourChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        answerFour : event.target.value,
    }));
};

    const faqFiveChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        faqFive : event.target.value,
    }));
};

    const answerFiveChange = (event) => {
    event.persist();
    setValues((values) => ({
        ...values,
        answerFive : event.target.value,
    }));
};
    
    const handleSubmit = (e) => {
	e.preventDefault();
};
    
    return (

        <div className='Faq__Route'>
            <form className='Faq__UpdataForm' onSubmit={handleSubmit}>
                <input
                    id="faq-one"
                    class="form-field"
                    type="text"
                    placeholder="Enter FAQ One..."
                    name="faqOne"
                    value={values.faqOne}
                    onChange ={faqOneChange}
                />

                <input
                    id="answer-one"
                    class="form-field"
                    type="text"
                    placeholder="Enter Answer One..."
                    name="answerOne"
                    value={values.answerOne}
                    onChange={answerOneChange}
                />

                <input
                    id="faq-two"
                    class="form-field"
                    type="text"
                    placeholder="Enter FAQ Two..."
                    name="faqTwo"
                    value={values.faqTwo}
                    onChange={faqTwoChange}
                />

                <input
                    id="answer-two"
                    class="form-field"
                    type="text"
                    placeholder="Enter Answer Two..."
                    name="answerTwo"
                    value={values.answerTwo}
                    onChange={answerTwoChange}
                />

                <input
                    id="faq-three"
                    class="form-field"
                    type="text"
                    placeholder="Enter FAQ Three..."
                    name="faqThree"
                    value={values.faqThree}
                    onChange={faqThreeChange}
                />

                <input
                    id="answer-three"
                    class="form-field"
                    type="text"
                    placeholder="Enter Answer Three..."
                    name="answerThree"
                    value={values.answerThree}
                    onChange={answerThreeChange}
                />

                <input
                    id="faq-four"
                    class="form-field"
                    type="text"
                    placeholder="Enter FAQ Four..."
                    name="faqFour"
                    value={values.faqFour}
                    onChange={faqFourChange}
                />

                <input
                    id="answer-four"
                    class="form-field"
                    type="text"
                    placeholder="Enter Answer Four..."
                    name="answerFour"
                    value={values.answerFour}
                    onChange={answerFourChange}
                />

                <input
                    id="faq-five"
                    class="form-field"
                    type="text"
                    placeholder="Enter FAQ Five..."
                    name="faqFive"
                    value={values.faqFive}
                    onChange={faqFiveChange}
                />

                <input
                    id="answer-five"
                    class="form-field"
                    type="text"
                    placeholder="Enter Answer Five..."
                    name="answerFive"
                    value={values.answerFive}
                    onChange ={answerFiveChange}
                />

                <input
                    class='update__Button'
                    type="submit"
                    value="Update"
                />

                
            </form>

        </div>
    )
}

export default FaqRoute;