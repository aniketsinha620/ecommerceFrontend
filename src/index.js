import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {AuthContextProvider} from "./components/context/AuthContext";

ReactDOM.render(
  <AuthContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthContextProvider>
  ,
  document.getElementById('root')
);
