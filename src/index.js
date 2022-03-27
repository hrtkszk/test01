import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';

const fruits = ['Apple', 'Orange', 'Banana'];
export const FruitContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <FruitContext.Provider value={{ fruits }}>
      <App />
    </FruitContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// registerServiceWorker();