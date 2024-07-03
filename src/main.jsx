import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/context/auth.jsx"
import { WishlistProvider } from './hooks/useWhislist.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>  
    <BrowserRouter>
    <WishlistProvider>
        <App />
    </WishlistProvider>
    </BrowserRouter>
  </AuthProvider>
);
