// Import React base components
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import styles
import './styles/cdn.css'
// Import pages
import Login from './pages/Login'
import HeadTags from './components/HeadTags.jsx'
import CreaAccount from './pages/CreaAccount'
import Posts from './pages/Posts'
import CreatePost from './pages/CreatePost'
// Import components
// Import router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// Import JavaScript CDN
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> // BootStrap 5
// Import helmet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
        <HeadTags/>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<CreaAccount />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
