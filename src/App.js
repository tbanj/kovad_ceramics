import React, { lazy, Suspense } from 'react';
import FullPageSpinner from './components/loader/FullPageSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NoMatch from './components/notfound/NotFound';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Routes = lazy(() => import('./route/index'));

const App = (props) => {
  return (
    <>
      <ToastContainer />
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<FullPageSpinner />}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
      </Router>
    </>
  );
};
export default App;
