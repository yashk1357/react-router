import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Home/Contact.jsx'
import Login from './components/Home/Login.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<Error />} >
        <Route path='home' element={<Home />} />
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/login/:id' element={<Login />} />
      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
