import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserTestimonials = () => (
    <section className="user-testimonials my-8 bg-gray-100 py-6">
        <h2 className="text-center text-2xl font-bold mb-6">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {[
                { id: 1, name: "Rohan Rayhan", feedback: "This app saved me so much money!", avatar: "https://i.ibb.co.com/TYpmQHJ/0163a8ab-c780-4837-aa4f-c7932dc89dea.webp" },
                { id: 2, name: "Rakibur", feedback: "Absolutely love the coupons!", avatar: "https://i.ibb.co.com/4f7xZNq/360-F-716546846-9uzo-Ty-Gi-SHq3qb-RPWRbi-GVy2-XJ3tk-Pjf.jpg" },
                { id: 3, name: "Yasir Ahmed", feedback: "Finding discounts has never been easier.", avatar: "https://i.ibb.co.com/h10NL1S/1690387295919g-800x800.webp" },
            ].map((user) => (
                <div
                    key={user.id}
                    className="bg-white shadow-lg p-4 rounded-md w-72 text-center"
                >
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-16 w-16 mx-auto rounded-full mb-4"
                    />
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-600 mt-2">{user.feedback}</p>
                </div>
            ))}
        </div>
    </section>
);

const SaleCountdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const saleDate = new Date("2024-12-01T00:00:00");
        const timer = setInterval(() => {
            const now = new Date();
            const difference = saleDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="sale-countdown my-8 bg-blue-100 py-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Upcoming Sale 🔥🔥🔥</h2>
            <div className="flex justify-center gap-4 text-2xl">
                <div>
                    <span className="font-semibold">{timeLeft.days}</span> Days
                </div>
                <div>
                    <span className="font-semibold">{timeLeft.hours}</span> Hours
                </div>
                <div>
                    <span className="font-semibold">{timeLeft.minutes}</span> Minutes
                </div>
                <div>
                    <span className="font-semibold">{timeLeft.seconds}</span> Seconds
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/fakeData.json")
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error("Error fetching JSON data:", error));
    }, []);

    return (
        <div className="home">
            <Helmet>
                <title>DiscountPRO | Home</title>
            </Helmet>
            <section className="banner">
                <div className="flex flex-wrap md:flex-nowrap overflow-hidden">
                    <img
                        src="https://i.ibb.co.com/q98rqZb/Image-8-Mv-TDjx6-G.webp"
                        alt="Slider 1"
                        className="lg:w-full w-1/3 md:w-1/3 object-cover h-40 md:h-72 lg:h-96"
                    />
                    <img
                        src="https://i.ibb.co.com/7XhFR2z/Image-10-Mv-TDjx6-G.webp"
                        alt="Slider 2"
                        className="lg:w-full w-1/3 md:w-1/3 object-cover h-40 md:h-72 lg:h-96"
                    />
                    <img
                        src="https://i.ibb.co.com/TTBB0pp/Image-11-Mv-TDjx6-G.webp"
                        alt="Slider 3"
                        className="lg:w-full w-1/3 md:w-1/3 object-cover h-40 md:h-72 lg:h-96"
                    />
                </div>
            </section>

            <section className="top-brands my-8 ">
                <h2 className="text-center text-2xl font-bold">Top Brands</h2>
                <Marquee pauseOnHover={true} className="mt-4 bg-gray-200 py-2 ">
                    {brands.map((brand) => (
                        <img
                            key={brand._id}
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="mx-8 h-16 object-contain cursor-pointer"
                            onClick={() => navigate(`/brand/${brand._id}`)}
                        />
                    ))}
                </Marquee>
            </section>



            <SaleCountdown />

            {/* Brands on Sale */}
            <section className="brands-on-sale my-8">
                <h2 className="text-center text-2xl font-bold">Brands on Sale</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {brands
                        .filter((brand) => brand.isSaleOn)
                        .map((brand) => (
                            <div
                                key={brand._id}
                                className="card border p-4 rounded-lg shadow-md"
                            >
                                <img
                                    src={brand.brand_logo}
                                    alt={brand.brand_name}
                                    className="h-20 mx-auto"
                                />
                                <h3 className="text-center text-xl font-semibold">
                                    {brand.brand_name}
                                </h3>
                                <p className="text-center text-gray-600">{brand.category}</p>
                                <p className="text-center mt-2">
                                    Total Coupons: {brand.coupons.length}
                                </p>
                            </div>
                        ))}
                </div>
            </section>



            
                
            {/* user Sections */}
            <UserTestimonials />
        
           
        </div>
    );
};

export default Home;
