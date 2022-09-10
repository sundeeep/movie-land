import { updateDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import "./styles/Updater.css";
import { db } from "../config/firebase";

function HeadHeroUpdater() {

    const [values, setValues] = useState({
        CommName  : "",
        CommLogoUrl  : "",
        CommHeroBanner  : "",
        CommBannerDesc  : "",
        CommQuote  : "",
    });

    const CommNameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            CommName: event.target.value,
        }));
    };

    const CommLogoUrlChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            CommLogoUrl: event.target.value,
        }));
    };

    const CommHeroBannerChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            CommHeroBanner: event.target.value,
        }));
    };

    const CommBannerDescChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            CommBannerDesc: event.target.value,
        }));
    };

    const CommQuoteChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            CommQuote: event.target.value,
        }));
    };


    const updateTestimonials = async (
        CommLogoUrl,
        CommName,
        CommHeroBanner,
        CommBannerDesc,
        CommQuote
    ) => {
        const testimonialDoc = doc(db, "HeroBanner", "OtsHxDupDeloSrSftQBg");
        const newTestimonial = {
            CommunityName : CommName,
            CommunityLogo : CommLogoUrl,
            BannerImage : CommHeroBanner,
            BannerDescription : CommBannerDesc,
            Quote : CommQuote,
        };
        await updateDoc(testimonialDoc, newTestimonial);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTestimonials(
            values.CommLogoUrl,
            values.CommName,
            values.CommHeroBanner,
            values.CommBannerDesc,
            values.CommQuote,
            );
    };

    return (
        <div className="HeroHeadUpdater">
            <form className="Faq__UpdataForm" onSubmit={handleSubmit}>
            <input
                class="form-field"
                type="text"
                placeholder="Enter Community Logo Image URL"
                value={values.CommLogoUrl}
                onChange={CommLogoUrlChange}
                required
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter Community Name.."
                value={values.CommName}
                required
                onChange={CommNameChange}
            />

            <input
                class="form-field"
                type="text"
                placeholder="Enter Hero Banner Image Url..."
                value={values.CommHeroBanner}
                required
                onChange={CommHeroBannerChange}
            />

            <textarea
                class="form-field"
                type="text"
                placeholder="Enter Hero Banner Description..."
                value={values.CommBannerDesc}
                required
                onChange={CommBannerDescChange}
            />

            <textarea
                class="form-field"
                type="text"
                placeholder="Enter Quote"
                value={values.CommQuote}
                required
                onChange={CommQuoteChange}
            />    

            <input class="update" type="submit" value="Update" />

            </form> 
        </div>  
    );
}


export default HeadHeroUpdater