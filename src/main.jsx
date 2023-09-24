import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './components/Login.jsx'
import { PostList } from './components/PostList.jsx'
import UserContextProvider from './contexts/user-context.jsx'
import { Profile } from './components/Profile.jsx'



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
      path: "login",
      element: <Login onLoginComplete/>,
    },
    {
      path: "profile",
      element: <Profile/>
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <RouterProvider router={router} />
    {/* <App/> */}
  </UserContextProvider>

)
