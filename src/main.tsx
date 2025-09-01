import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Users from './Users.tsx'
import './style.css' 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Users />
  </StrictMode>,
)
