import { updateDoc, doc } from "firebase/firestore";
import React, { useState } from "react";
import "./styles/Updater.css";
import { db } from "../config/firebase";

function OwnerBioUpdater() {


    const [values, setValues] = useState({
        AvatarUrl: "",
        Name: "",
        Bio: "",
    });

    const AvatarUrlChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            AvatarUrl: event.target.value,
        }));
    };

    const NameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            Name: event.target.value,
        }));
    };

    const BioChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            Bio: event.target.value,
        }));
    };


    const updateOwnerBio = async (AvatarUrl, Name, Bio) => {
        const OwnerDoc = doc(db, "CommunityOwner", 'o2hzK82oQmYC0Roi13mb');
        const newOwner = {
            OwnerImgLink: AvatarUrl,
            OwnerName: Name,
            OwnerBio: Bio,
        };
        await updateDoc(OwnerDoc, newOwner);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateOwnerBio(values.AvatarUrl, values.Name, values.Bio);
        // console.log(values.AvatarUrl, values.Name, values.Bio);
    }
    
    return (
        <div className="OwnerBioUpdater">
        <form className="Faq__UpdataForm" onSubmit={handleSubmit}>
            <input
            class="form-field"
            type="text"
            placeholder="Enter Owner Avatar Image Url..."
            name="AvatarUrl"
            value={values.AvatarUrl}
            onChange={AvatarUrlChange}
            required
            />

            <input
            class="form-field"
            type="text"
            placeholder="Enter Owner Name..."
            name="Name"
            value={values.Name}
            onChange={NameChange}
            required
            />

            <textarea
            class="form-field"
            type="text"
            placeholder="Enter Owner Bio..."
            name="OwnerBio"
            value={values.Bio}
            onChange={BioChange}
            required
                />
                
            <input type="submit" value="Update"/>
        </form>
        </div>
    ) 
}

export default OwnerBioUpdater;
