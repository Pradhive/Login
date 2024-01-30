import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
        transition={Bounce}
        autoClose={3000}
        hideProgressBar
        closeOnClick
        theme='colored'
        position="top-right"
        toastClassName="rounded-lg"
      />
  </React.StrictMode>
);
