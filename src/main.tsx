// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { initializeAnalytics } from "./analytics/analytics";

initializeAnalytics();
createRoot(document.getElementById('root')!).render(  <App />)
