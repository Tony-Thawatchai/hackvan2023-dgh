import {createBrowserRouter} from 'react-router-dom'
import CheckInLayout from '../../CheckInLayout'
import CheckIn from '../../CheckIn'
import FormLayout from '../../FormLayout'
const Router = createBrowserRouter([
    { path: '/', element: <CheckIn /> },
    { path: '/Check in', element: <CheckInLayout /> },
    {path: '/New Client', element:<FormLayout/>}
])

export default Router