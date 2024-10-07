import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

import { I18nextProvider } from 'react-i18next'
import i18n from './store/i18n.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
)