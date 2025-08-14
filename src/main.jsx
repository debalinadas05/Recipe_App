import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MenuPage from './ManuPage/ManuPage.jsx';
import CusinesPage from './CusinesPage/CusinesPage.jsx';
import AboutUsPage from './AboutUsPage/AboutUs.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MenuPage />
    <CusinesPage />
    <AboutUsPage />
  </StrictMode>,
)
