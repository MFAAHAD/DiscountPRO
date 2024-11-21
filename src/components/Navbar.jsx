import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useContext, useState } from "react";
import { AuthContext } from "../provides/AuthProviders";
import { CiLogin } from "react-icons/ci";
import { Helmet } from "react-helmet";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/login"); 
                setIsMenuOpen(false); 
            })
            .catch((error) => {
                console.log("ERROR", error.message);
            });
    };

    const handleMenuClick = () => {
        setIsMenuOpen(false); 
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="text-lg" onClick={handleMenuClick}>
                    <IoMdHome className="text-xl" /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/brands" className="text-lg" onClick={handleMenuClick}>
                    <FaShopify className="text-xl" /> Brands
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/my_profile" className="text-lg" onClick={handleMenuClick}>
                        <CgProfile className="text-xl" /> My Profile
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about_dev" className="text-lg" onClick={handleMenuClick}>
                    About Dev
                </NavLink>
            </li>
            {/* User Email */}
            {user && (
                <li className="block lg:hidden">
                    <span className="text-lg">{user.email}</span>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-[#004aad] text-white sticky top-0 z-50">
            <Helmet>
                <title>Discount Pro | Login</title>
            </Helmet>

            <div className="navbar-start">
                
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    
                    {isMenuOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-blue-700 rounded-box z-[1] mt-3 w-screen p-4 shadow flex items-center justify-start"
                        >
                            {links}

                            {!user && (
                                <>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className="btn btn-sm btn-ghost text-lg w-full border-2 border-white rounded-lg mb-2 "
                                            onClick={handleMenuClick}
                                        >
                                            <CiLogin className="text-xl" />
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/register"
                                            className="btn btn-sm btn-ghost text-lg w-full flex items-center gap-2 border-2 border-white rounded-lg"
                                            onClick={handleMenuClick}
                                        >
                                            <img
                                                className="w-5 h-5 "
                                                src="https://img.icons8.com/?size=80&id=bqav3t6eU9Yw&format=png"
                                                alt="Register"
                                            />
                                            Register
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    )}
                </div>

                <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
                    <img
                        className="w-10 h-10"
                        src="https://i.ibb.co.com/q5Dmy10/rb-2150903941.png"
                        alt=""
                    />
                    DiscountPRO
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            
            <div className="navbar-end flex items-center gap-2">
                {user ? (
                    <>
                        
                        <div className="border-green-500 border-2 rounded-full flex items-center justify-center">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-10 h-10 rounded-full"
                                />
                            ) : (
                                <span className="text-white font-bold text-lg">
                                    {user.email ? user.email[0].toUpperCase() : "U"}
                                </span>
                            )}
                        </div>
                        
                        <a
                            href="#"
                            onClick={handleSignOut}
                            className="btn btn-sm lg:btn-md text-lg"
                        >
                            Sign Out
                        </a>
                    </>
                ) : (
                    <>
                        <div className="hidden md:flex">
                            <NavLink
                                to="/login"
                                className="btn btn-sm btn-ghost text-lg mx-2 border border-white rounded-lg"
                            >
                                <CiLogin className="text-xl" /> Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="btn btn-sm btn-ghost text-lg flex items-center gap-2 mx-2 border border-white rounded-lg"
                            >
                                <img
                                    className="w-5 h-5"
                                    src="https://img.icons8.com/?size=80&id=bqav3t6eU9Yw&format=png"
                                    alt="Register"
                                />
                                Register
                            </NavLink>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;