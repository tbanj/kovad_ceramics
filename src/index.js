import React from 'react';
import { hydrateRoot, render, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './contextStore/StoreProvider';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './index.css';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

const rootElement = document.getElementById('root');
const rootData = createRoot(rootElement);
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.Fragment>
      <StoreProvider>
        <BrowserRouter>
          <App tab="home" />
        </BrowserRouter>
      </StoreProvider>
    </React.Fragment>
  );
} else {
  rootData.render(
    <React.Fragment>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </React.Fragment>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
// rootData.unmount();
