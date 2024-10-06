import React, { lazy, Suspense } from 'react';
import FullPageSpinner from './components/loader/FullPageSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
