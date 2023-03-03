import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element= { <App />} />
      </Routes>
      </BrowserRouter>
     
    </Provider>
  </React.StrictMode>
);

