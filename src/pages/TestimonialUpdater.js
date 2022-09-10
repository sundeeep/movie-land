import { updateDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import './styles/Updater.css'
import { db } from '../config/firebase'

function TestimonialUpdater() {
    const [values, setValues] = useState({

        AvatarOneUrl: "",
        TestimonialOneName: "",
        TestimonialOneDesc: "",

        AvatarTwoUrl: "",
        TestimonialTwoName: "",
        TestimonialTwoDesc: "",

        AvatarThreeUrl: "",
        TestimonialThreeName: "",
        TestimonialThreeDesc: "",

    });
    
    const AvatarOneUrlChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            AvatarOneUrl: event.target.value,
        }));
    };

    const TestimonialOneNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialOneName: event.target.value,
        }));
    };

    const TestimonialOneDescChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialOneDesc: event.target.value,
        }));
    };

    const AvatarTwoUrlChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            AvatarTwoUrl: event.target.value,
        }));
    };

    const TestimonialTwoNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialTwoName: event.target.value,
        }));
    };

    const TestimonialTwoDescChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialTwoDesc: event.target.value,
        }));
    };

    const AvatarThreeUrlChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            AvatarThreeUrl: event.target.value,
        }));
    };

    const TestimonialThreeNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialThreeName: event.target.value,
        }));
    };

    const TestimonialThreeDescChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            TestimonialThreeDesc: event.target.value,
        }));
    };

    const updateTestimonials = async (
        AvatarOneUrl,
        TestimonialOneName,
        TestimonialOneDesc,
        AvatarTwoUrl,
        TestimonialTwoName,
        TestimonialTwoDesc,
        AvatarThreeUrl,
        TestimonialThreeName,
        TestimonialThreeDesc
    ) => {
        const testimonialDoc = doc(db, "Testimonials", "X0yvlHNq6KBlnfmMurWR");
        const newTestimonial = {
            oneAvtUrl: AvatarOneUrl,
            oneTestName: TestimonialOneName,
            oneTestDesc: TestimonialOneDesc,
            twoAvtUrl: AvatarTwoUrl,
            twoTestName: TestimonialTwoName,
            twoTestDesc: TestimonialTwoDesc,
            threeAvtUrl: AvatarThreeUrl,
            threeTestName: TestimonialThreeName,
            threeTestDesc: TestimonialThreeDesc,
        };
        await updateDoc(testimonialDoc, newTestimonial);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTestimonials(
            values.AvatarOneUrl,
            values.TestimonialOneName,
            values.TestimonialOneDesc,
            values.AvatarTwoUrl,
            values.TestimonialTwoName,
            values.TestimonialTwoDesc,
            values.AvatarThreeUrl,
            values.TestimonialThreeName,
            values.TestimonialThreeDesc,);
    };

    return (
        <div className="TestimonialUpdater">
            <form className="Faq__UpdataForm" onSubmit={handleSubmit}>
            <input
                class="form-field"
                type="text"
                placeholder="Enter first Testimonial Image URL"
                value={values.AvatarOneUrl}
                onChange={AvatarOneUrlChange}
                required
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter first Testimonial Name.."
                value={values.TestimonialOneName}
                required
                onChange={TestimonialOneNameChange}
            />

            <textarea
                class="form-field"
                type="text"
                placeholder="Enter first Testimonial Description..."
                value={values.TestimonialOneDesc}
                required
                onChange={TestimonialOneDescChange}
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter second Testimonial Image URL"
                value={values.AvatarTwoUrl}
                required
                onChange={AvatarTwoUrlChange}
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter second Testimonial Name.."
                value={values.TestimonialTwoName}
                required
                onChange={TestimonialTwoNameChange}
            />

            <textarea
                id="answer-three"
                class="form-field"
                type="text"
                placeholder="Enter second Testimonial Description..."
                name="answerThree"
                value={values.TestimonialTwoDesc}
                required
                onChange={TestimonialTwoDescChange}
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter third Testimonial Image URL"
                value={values.AvatarThreeUrl}
                required
                onChange={AvatarThreeUrlChange}
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter third Testimonial Name.."
                value={values.TestimonialThreeName}
                required
                onChange={TestimonialThreeNameChange}
            />

            <textarea
                class="form-field"
                type="text"
                placeholder="Enter third Testimonial Description..."
                value={values.TestimonialThreeDesc}
                required
                onChange={TestimonialThreeDescChange}
            />

            <input class="update" type="submit" value="Update" />
            </form>
        </div>
    );
}

export default TestimonialUpdater;