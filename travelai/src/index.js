import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './i18n';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/pages/Home';
import ServicePage from './components/pages/ServicePage';
import ProductPage from './components/pages/ProductPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/service",
    element: <ServicePage />
  },

  {
    path: "/product",
    element: <ProductPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
