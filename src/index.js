import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store'; 
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Optional: Use the following to measure performance in your app.
// Pass a function to log results (e.g., reportWebVitals(console.log))
// or send data to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
