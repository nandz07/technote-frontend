import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <ScrollToTop /> */}
      {/* <AuthContextProvider> */}
        {/* <ToastContainer theme='dark' className='mt-20' position='top-right' autoClose={3000} closeOnClick pauseOnHover={false} /> */}
        <Routes>
          {/* <Route path='*' element={<Layouts />} /> */}
          <Route path='*' element={<App />} />
          {/* <Route path='/admin/*' element={<AdminLayouts />} />
          <Route path='/admin' element={<AdminLogin />} /> */}
        </Routes>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
