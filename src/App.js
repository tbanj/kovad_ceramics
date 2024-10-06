import React, { lazy, Suspense } from 'react';
import FullPageSpinner from './components/loader/FullPageSpinner';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Routing = lazy(() => import('./route/index'));

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<FullPageSpinner />}>
            <Routing />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
};
export default App;
