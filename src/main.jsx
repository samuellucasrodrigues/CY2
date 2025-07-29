import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterProvider, { router } from '../router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
