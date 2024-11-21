// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provides/AuthProviders";
// import { Helmet } from "react-helmet";

// const Login = () => {
//     const navigate = useNavigate();

//     const { signInUser, signInWithGoogle } = useContext(AuthContext);
//     const handleLogIn = e => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;

//         // console.log(email, password);
//         signInUser(email, password)
//             .then(result => {
//                 console.log(result);
//                 e.target.reset();
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.log("ERROR", error.message);
//             })
//     }

//     const handleGoogleSignIn = () => {
//         signInWithGoogle()
//             .then(result => {
//                 console.log(result.user);
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.log("ERROR", error.message);
//             })
//     }

//     return (

//         <div className="hero bg-base-200 min-h-screen">

//             <Helmet>
//                 <title>Discount Pro | Login</title>
//             </Helmet>

//             <div className="hero-content flex-col">
//                 <div className="text-center lg:text-left">
//                     <h1 className="text-3xl font-bold">Login now!</h1>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <form onSubmit={handleLogIn} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text">Password</span>
//                             </label>
//                             <input type="password" name="password" placeholder="password" className="input input-bordered" required />
//                             <label className="label">
//                                 <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                     </form>
//                     <p className="m-4"> Are your new user? Please <Link className="underline text-red-600" to="/register"> Register</Link></p>
//                     <p onClick={handleGoogleSignIn} className="btn btn-ghost bg-gray-300">Google</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;





import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provides/AuthProviders";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons for toggle

const Login = () => {
    const navigate = useNavigate();
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    // State to manage the visibility of the password
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result);
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log("ERROR", error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate('/');
            })
            .catch(error => {
                console.log("ERROR", error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Discount Pro | Login</title>
            </Helmet>

            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required
                                />
                                <span
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? (
                                        <FaEyeSlash size={20} />
                                    ) : (
                                        <FaEye size={20} />
                                    )}
                                </span>
                            </div>
                            <label className="label">
                                <Link to="/forget-password" href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="m-4">
                        Are you a new user? Please{" "}
                        <Link className="underline text-red-600" to="/register">
                            Register
                        </Link>
                    </p>
                    <p onClick={handleGoogleSignIn} className="btn btn-ghost bg-gray-300">
                        Google
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
