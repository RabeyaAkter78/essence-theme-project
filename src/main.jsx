import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div  className='bg-slate-200'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
