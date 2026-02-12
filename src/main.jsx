import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router.jsx';
import { MatchesProvider } from './Context/Matches.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatchesProvider>
      <RouterProvider router={router} />
    </MatchesProvider>
  </StrictMode>,
)
