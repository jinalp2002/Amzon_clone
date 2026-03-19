import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Screen/Home.jsx'
import GiftCards from './components/Screen/GiftCards.jsx'
import SignIn from './components/Screen/SignIn.jsx'
import AuthLayout from './AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "Home",
        element: <Home />
      }, {
        path: "GiftCard",
        element: <GiftCards />
      },
      //  {
      //   path: "Sign_In_Up",
      //   element: <SignIn />
      // }, 

    ]
  }, {

    path: "/auth",
    element: <AuthLayout />,
    errorElement: <h1>Auth Page Error</h1>,
    children: [
      { path: "signin", element: <SignIn /> }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
