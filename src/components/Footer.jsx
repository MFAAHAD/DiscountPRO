import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-gray-300 py-12">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                    <div className="text-center mb-8">
                        <Link to="/" className="flex justify-center items-center gap-2 text-xl font-semibold text-white hover:text-gray-400">
                            <img
                                className="w-12 h-12 rounded-full shadow-md"
                                src="https://i.ibb.co.com/q5Dmy10/rb-2150903941.png"
                                alt="DiscountPRO"
                            />
                            DiscountPRO
                        </Link>
                        <p className="text-gray-400 mt-4">
                        Driving the future with groundbreaking technology and innovative solutions.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-around gap-10 text-center">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Product Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Order Tracking
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Shipping & Delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-100 transition-colors duration-200">
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 text-center border-t border-gray-700 pt-6">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} DiscountPRO. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
