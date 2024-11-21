// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa"; // To show star rating

// const Brands = () => {
//     const [brands, setBrands] = useState([]);
//     const [search, setSearch] = useState("");
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch("/fakeData.json")
//             .then((response) => response.json())
//             .then((data) => setBrands(data))
//             .catch((error) => console.error("Error fetching brands:", error));
//     }, []);

//     const handleSearchChange = (e) => {
//         setSearch(e.target.value);
//     };

//     const handleViewCouponsClick = (brandId, saleIsOn) => {

//         const isLoggedIn = true; 
//         // alert("Coupon");

//         if (isLoggedIn) {
//             navigate(`/brand/${brandId}`);

//         } else {
//             navigate("/login"); // Redirect to login if not logged in
//         }
//     };

//     return (
//         <div className="brands-page">
//             <h2 className="font-bold text-5xl text-center mb-6 bg-gradient-to-r from-rose-900 to-indigo-600 text-transparent bg-clip-text animate-pulse">
//                 Brands Details
//             </h2>

//             {/* Search Bar */}
//             <div className="mb-6 text-center">
//                 <input
//                     type="text"
//                     placeholder="Search brands..."
//                     value={search}
//                     onChange={handleSearchChange}
//                     className="border rounded px-4 py-2 w-1/2"
//                 />
//             </div>

//             {/* Cards for Brands */}
//             <div className="grid grid-cols-1 gap-6">
//                 {brands
//                     .filter((brand) =>
//                         brand.brand_name.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((brand) => (
//                         <div
//                             key={brand._id}
//                             className="card p-6 border rounded-lg shadow-md flex flex-col items-center"
//                         >

//                             {/* Conditional rendering using ternary operator */}
//                             {brand.isSaleOn ? (
//                                 <>
//                                     <p className="mt-4 text-red-500 text-xl animate-bounce">Sale is on🔥</p>
//                                 </>
//                             ) : ( " ")}
//                             <img
//                                 src={brand.brand_logo}
//                                 alt={brand.brand_name}
//                                 className="w-24 h-24 object-contain mb-4"
//                             />
//                             <div className="flex items-center mb-2">
//                                 <div className="text-xl font-semibold">{brand.brand_name}</div>
//                                 <div className="flex ml-2 text-yellow-500">
//                                     {[...Array(5)].map((_, index) => (
//                                         <FaStar
//                                             key={index}
//                                             className={`${index < brand.rating ? "text-yellow-500" : "text-gray-300"}`}
//                                         />
//                                     ))}
//                                 </div>
//                             </div>
//                             <p className="text-center mb-4">{brand.description}</p>
//                             {/* Conditional rendering using ternary operator */}
//                             {brand.isSaleOn ? (
//                                 <>
//                                     <Link > {/**to="/brands" */}
//                                         <button
//                                             onClick={() => handleViewCouponsClick(brand._id, brand.isSaleOn)}
//                                             className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-4"
//                                         >
//                                             View Coupons
//                                         </button>
//                                     </Link>
//                                 </>
//                             ) : (
//                                 <button
//                                     onClick={() => handleViewCouponsClick(brand._id, brand.isSaleOn)}
//                                     className="bg-gray-500 text-white px-6 py-2 rounded cursor-not-allowed mt-4"
//                                     disabled
//                                 >
//                                     View Coupons (Not Available)
//                                 </button>
//                             )}
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };

// export default Brands;




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // To show star rating
import { Helmet } from "react-helmet";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the data using fetch API
        fetch("/fakeData.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setBrands(data))
            .catch((error) => console.error("Error fetching brands:", error));
    }, []);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleViewCouponsClick = (brandId, saleIsOn) => {
        const isLoggedIn = true; // For simplicity, assume user is logged in

        if (isLoggedIn) {
            navigate(`/brand/${brandId}`);
        } else {
            navigate("/login"); // Redirect to login if not logged in
        }
    };

    return (
        <div className="brands-page">

            <Helmet>
                <title>Discount Pro | Brands</title> {/* This will set the page title */}
            </Helmet>

            <h2 className="font-bold text-5xl text-center mb-6 bg-gradient-to-r from-rose-900 to-indigo-600 text-transparent bg-clip-text animate-pulse">
                Brands Details
            </h2>

            {/* Search Bar */}
            <div className="mb-6 text-center">
                <input
                    type="text"
                    placeholder="Search brands..."
                    value={search}
                    onChange={handleSearchChange}
                    className="border rounded px-4 py-2 w-1/2"
                />
            </div>

            {/* Cards for Brands */}
            <div className="grid grid-cols-1 gap-6">
                {brands
                    .filter((brand) =>
                        brand.brand_name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((brand) => (
                        <div
                            key={brand._id}
                            className="card p-6 border rounded-lg shadow-md flex flex-col items-center"
                        >
                            {/* Conditional rendering for sale */}
                            {brand.isSaleOn && (
                                <p className="mt-4 text-red-500 text-xl animate-bounce">Sale is on🔥</p>
                            )}
                            <img
                                src={brand.brand_logo}
                                alt={brand.brand_name}
                                className="w-24 h-24 object-contain mb-4"
                            />
                            <div className="flex items-center mb-2">
                                <div className="text-xl font-semibold">{brand.brand_name}</div>
                                <div className="flex ml-2 text-yellow-500">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className={`${index < brand.rating ? "text-yellow-500" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-center mb-4">{brand.description}</p>
                            {brand.isSaleOn ? (
                                <button
                                    onClick={() => handleViewCouponsClick(brand._id, brand.isSaleOn)}
                                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-4"
                                >
                                    View Coupons
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleViewCouponsClick(brand._id, brand.isSaleOn)}
                                    className="bg-gray-500 text-white px-6 py-2 rounded cursor-not-allowed mt-4"
                                    disabled
                                >
                                    View Coupons (Not Available)
                                </button>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Brands;
