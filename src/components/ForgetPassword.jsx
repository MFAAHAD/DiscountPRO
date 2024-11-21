import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const emailFromLogin = urlParams.get('email');
        if (emailFromLogin) {
            setEmail(emailFromLogin);
        }
    }, [location]);

    const handleResetPassword = () => {

        if (!email) {
            toast.error('Please enter your email address before resetting the password.', {
                position: "top-center",
            });
            return;
        }


        const resetLink = `https://mail.google.com/mail/u/0/#inbox?compose=new&to=${email}`;
        window.open(resetLink, '_blank');

        signOut()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.log('Error signing out:', error);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-red-500 text-4xl">Forgot Password</h2>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={(e) => e.preventDefault()} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleResetPassword}
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;