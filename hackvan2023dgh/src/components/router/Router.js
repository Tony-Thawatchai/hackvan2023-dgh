import {createBrowserRouter} from 'react-router-dom'
import CheckInLayout from '../../CheckInLayout'
import Home from '../../Home'
import FormLayout from '../../FormLayout'
import ReportLayout from '../../ReportLayout'
const Router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/Check in', element: <CheckInLayout /> },
    {path: '/New Client', element:<FormLayout/>},
    {path: '/Update data', element:<ReportLayout/> },
])

export default Router