import { createRoot } from 'react-dom/client'
import React from 'react'
const rootElement = document.getElementById('root')
import './styles/tailwind.css'
import AppRoutes from './routes/AppRoutes'

if (!rootElement) throw new Error('root element not found')

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
