import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Profile } from './pages/Profile.jsx'
import { Home } from './pages/Home.jsx'
import { Layout } from './components/Layout.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { ProfilesPages } from './pages/ProfilesPages.jsx'
import { ProfileSelect } from './pages/ProfileSelect.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'home',
        element: <Home/>,
      },
      {
        path: 'profiles',
        element: <ProfilesPages />,
        children: [
          {
            index: true,
            element: <ProfileSelect />,
          },
          {
            path: ':profileId',
            element: <Profile />,
          }
        ]
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>,
)
