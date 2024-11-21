import React, { useContext } from "react";
import { AuthContext } from "../provides/AuthProviders";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if no user is logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <Helmet>
        <title>Discount Pro | My Profile</title>
      </Helmet>

      <div
        className="w-full h-[250px] bg-cover bg-gray-300 bg-center flex justify-center items-center rounded-lg shadow-md"
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-60 p-6 rounded-md shadow-lg">
          Welcome, {user.displayName || "User"}!
        </h1>
      </div>
      <div className="flex flex-col items-center bg-white shadow-xl rounded-xl p-8 mt-[-70px] w-full max-w-md mx-4">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-40 h-40 rounded-full mb-6 border-4 border-gray-200 shadow-md"
        />
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          {user.displayName || "Name not set"}
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          {user.email || "Email not set"}
        </p>
        <button
          className="btn btn-primary text-lg py-2 px-6 rounded-full shadow-md hover:bg-blue-600"
          onClick={() => navigate("/update-profile")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
