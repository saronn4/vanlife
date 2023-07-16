import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from "./reportWebVitals";
import BrowserRouter from 'react-router-dom/BrowserRouter'





ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <App/>
  </BrowserRouter>,
)

reportWebVitals();
