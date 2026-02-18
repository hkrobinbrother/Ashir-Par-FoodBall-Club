import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router.jsx';
import { MatchesProvider } from './Context/Matches.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatchesProvider>
      
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </MatchesProvider>
  </StrictMode>,
)
