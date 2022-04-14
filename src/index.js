import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';

const value = {'user':'test', 'isAuth':false};
export const AuthContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider value={ value }>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker();