import {createBrowserRouter} from 'react-router-dom'
import CheckInLayout from '../../CheckInLayout'
import Home from '../../Home'
import FormLayout from '../../FormLayout'
import ReportLayout from '../../ReportLayout'
import LoginLayout from '../../LoginLayout'
import SingelClientLayout from '../SingelClientLayout'
import React from "react";
const Router = createBrowserRouter([
    { path: '/', element: <LoginLayout /> },
    { path: '/volunteerhome', element: <Home /> },
    { path: '/Check in', element: <CheckInLayout /> },
    {path: '/New Client', element:<FormLayout/>},
    {path: '/Update data', element:<ReportLayout/> },
    {path:'/singleClient', element:<SingelClientLayout /> }
])

export default Router