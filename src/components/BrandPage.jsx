import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "../route/PrivateRoute";
import { Helmet } from "react-helmet";
// import fakeData from "../../public/fakeData.json"

const BrandPage = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        // const response = await fetch("/public/fakeData.json");
        const response = await fetch("/fakeData.json");
        const data = await response.json();
        const selectedBrand = data.find((item) => item._id === id);
        setBrand(selectedBrand);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };

    fetchBrand();
  }, []);

  if (!brand) {
    return <div>Loading...</div>;
  }

  return (
    <PrivateRoute>
      <div className="brand-page p-6 ">
        <Helmet>
          <title>Discount Pro | Brand Details</title>
        </Helmet>
        <ToastContainer /> 
        <div className="brand-details text-center mb-6">
          <img
            src={brand.brand_logo}
            alt={`${brand.brand_name} Logo`}
            className="mx-auto w-24 h-24 rounded-full"
          />
          <h1 className="text-3xl font-bold mt-4">{brand.brand_name}</h1>
          <p className="text-lg text-gray-600 mt-2">
            Rating: ⭐ {brand.rating.toFixed(1)}
          </p> 
          <p className="text-gray-700 mt-2">{brand.description}</p>
        </div>

        <div className="coupons-grid flex items-center justify-center gap-10">
          {brand.coupons.map((coupon) => (
            <div
              key={coupon.coupon_code}
              className="coupon-card border rounded-lg shadow p-4 bg-white "
            >
              <h2 className="text-xl font-semibold">{coupon.coupon_type}</h2>
              <p className="text-gray-600 mt-1">{coupon.description}</p>
              <p className="text-gray-500 mt-1">Expiry: {coupon.expiry_date}</p>
              <p className="text-gray-500 mt-1">Condition: {coupon.condition}</p>
              <div className="mt-4 flex justify-between items-center">
                <CopyToClipboard
                  text={coupon.coupon_code}
                  onCopy={() => toast.success("Coupon code copied!")}
                >
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Copy Code
                  </button>
                </CopyToClipboard>
                <button
                  onClick={() => window.open(brand.shop_Link, "_blank")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Use Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default BrandPage;
