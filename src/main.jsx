import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Checkout from './Components/Checkout.jsx'
import reducer, { initialState } from './reducer/reducer.jsx'
import { StateProvider } from './Components/StateProvider.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
    <App />
    </StateProvider>
  </React.StrictMode>,
)
