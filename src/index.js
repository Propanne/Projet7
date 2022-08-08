// Import React base components
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import styles
import './index.css'
import './styles/cdn.scss'
// Import pages
import Login from './pages/Login'
import App from './pages/App'
import Survey from './pages/Survey'
// Import router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// Import JavaScript CDN
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> // BootStrap 5

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Survey />} />
        </Routes>
      </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
