// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Deve essere vuoto o contenere solo reset minimi
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css'; // <--- Caricalo per ultimo
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
