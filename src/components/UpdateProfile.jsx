import React, { useContext, useState } from "react";
import { AuthContext } from "../provides/AuthProviders";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const navigate = useNavigate();

    const handleUpdate = async () => {
        try {
            await updateProfile(user, { displayName: name, photoURL });
            alert("Profile updated successfully!");
            navigate("/my_profile");
        } catch (error) {
            alert("Error updating profile: " + error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Helmet>
                <title>Discount Pro | Profile Update</title>
            </Helmet>
            <div className="card bg-base-100 shadow-lg p-6 w-80">
                <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered mb-4"
                />
                <input
                    type="text"
                    placeholder="Photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    className="input input-bordered mb-4"
                />
                <button onClick={handleUpdate} className="btn btn-primary">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default UpdateProfile;


