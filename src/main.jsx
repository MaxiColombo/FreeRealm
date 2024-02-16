import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <img src="/public/article.svg" alt="IM1" />
    <img src="./article.svg" alt="IM2" />
  </React.StrictMode>,
)
