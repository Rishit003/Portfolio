import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../styles/normalize.css'
import '../styles/style.css'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/footer.css'
import '../styles/utils.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
