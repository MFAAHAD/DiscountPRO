import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../provides/AuthProviders";
import { CiLogin } from "react-icons/ci";
import { Helmet } from "react-helmet";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                console.log("ERROR", error.message);
            });
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="text-lg hover:text-blue-300 transition duration-300">
                    <IoMdHome className="text-xl" /> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/brands" className="text-lg hover:text-blue-300 transition duration-300">
                    <FaShopify className="text-xl" /> Brands
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/my_profile" className="text-lg hover:text-blue-300 transition duration-300">
                        <CgProfile className="text-xl" /> My Profile
                    </NavLink>
                </li>
            )}
            <li>
                <NavLink to="/about_dev" className="text-lg hover:text-blue-300 transition duration-300">
                    About Developer
                </NavLink>
            </li>
        </>
    );

    const authMenu = (
        <ul className="menu menu-compact p-2 bg-gray-800 text-white rounded-box">
            {user ? (
                <>
                    <li>
                        <span className="flex items-center gap-2">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-8 h-8 rounded-full"
                                />
                            ) : (
                                <span className="text-white font-bold text-lg">
                                    {user.email ? user.email[0].toUpperCase() : "U"}
                                </span>
                            )}
                            {user.email}
                        </span>
                    </li>
                    <li>
                        <button onClick={handleSignOut} className="btn btn-outline text-lg">
                            Sign Out
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login" className="btn btn-outline text-lg">
                            <CiLogin className="text-xl" /> Login
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to="/register"
                            className="btn btn-outline text-lg flex items-center gap-2"
                        >
                            <img
                                className="w-5 h-5"
                                src="https://img.icons8.com/?size=80&id=bqav3t6eU9Yw&format=png"
                                alt="Register"
                            />{" "}
                            Register
                        </NavLink>
                    </li>
                </>
            )}
        </ul>
    );

    return (
        <div className="navbar bg-gradient-to-r from-[#000000] to-[#3533cd] text-white sticky top-0 z-50 shadow-lg">
            <Helmet>
                <title>DiscountPRO | Login</title>
            </Helmet>

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-gray-800 text-white rounded-box p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
                    <img className="w-10 h-10" src="https://i.ibb.co.com/q5Dmy10/rb-2150903941.png" alt="Logo" />
                    DiscountPRO
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost flex items-center gap-2">
                        <img
                            src="https://img.icons8.com/?size=80&id=bqav3t6eU9Yw&format=png"
                            alt="Menu Icon"
                            className="w-6 h-6"
                        />
                        <span>Menu</span>
                    </label>
                    <div
                        tabIndex={0}
                        className="menu dropdown-content mt-3 p-2 shadow bg-gray-800 text-white rounded-box w-52"
                    >
                        {authMenu}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
