// import { BiError } from "react-icons/bi";


// const ErrorPage = () => {
//     return (
//         <div className="flex justify-center items-center min-h-screen">
//             <h2 className="text-8xl font-bold text-red-600 flex justify-center items-center gap-3"><BiError /> ERROR! 404</h2>
//         </div>
//     );
// };

// export default ErrorPage;


import { Helmet } from "react-helmet";
import { BiError } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    // Handle navigation to home
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <Helmet>
                <title>Discount Pro | Error Page</title>
            </Helmet>
            <h2 className="text-8xl font-bold text-red-600 flex justify-center items-center gap-3">
                <BiError /> ERROR! 404
            </h2>
            <button
                onClick={handleGoHome}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Go to Home
            </button>
        </div>
    );
};

export default ErrorPage;
