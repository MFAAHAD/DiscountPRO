// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Root from './components/Root.jsx';
// import Home from './components/Home.jsx';
// import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';
// import ErrorPage from './components/ErrorPage.jsx';
// import AuthProviders from './provides/AuthProviders.jsx';
// import MyProfile from './components/MyProfile.jsx';
// import AboutDev from './components/AboutDev.jsx';
// import Brands from './components/Brands.jsx';
// import PrivateRoute from './route/PrivateRoute.jsx';
// import BrandPage from './components/BrandPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: "login",
//         element: <Login />
//       },
//       {
//         path: "register",
//         element: <Register />
//       },
//       {
//         path:"/my_profile",
//         element:<PrivateRoute><MyProfile/></PrivateRoute>
//       },
//       {
//         path:"/about_dev",
//         element:<AboutDev/>
//       },
//       {
//         path:"/brands",
//         element:<Brands/>
//       },
//       {
//         path:'/brand/:id',
//         element: <BrandPage></BrandPage>
//       }
//     ]
//   },
//   {
//     path: "*",
//     element: <ErrorPage />
//   },
// ]);


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProviders> <RouterProvider router={router} /></AuthProviders>
//   </StrictMode>,
// )



// 🆕🆕🆕🆕

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import AuthProviders from './provides/AuthProviders.jsx';
import MyProfile from './components/MyProfile.jsx';
import AboutDev from './components/AboutDev.jsx';
import Brands from './components/Brands.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import BrandPage from './components/BrandPage.jsx';
import UpdateProfile from './components/UpdateProfile';
import ForgetPassword from './components/ForgetPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "/my_profile",
        element: <PrivateRoute><MyProfile /></PrivateRoute>
      },
      {
        path: "/about_dev",
        element: <AboutDev />
      },
      {
        path: "/brands",
        element: <Brands />
      },
      {
        path: '/brand/:id',
        element: <BrandPage></BrandPage>
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile /></PrivateRoute>
      },
      {
        path:"/forget-password",
        element:<ForgetPassword/>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </StrictMode>,
)
