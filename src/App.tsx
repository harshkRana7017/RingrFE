import LandingPage from 'LandingPage';
import Layout from 'Layout';
import LoginPage from 'AuthenticationPages/LoginPage';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import store from 'store';
import ForgotPasswordPage from 'AuthenticationPages/ForgotPasswordPage';
import SignupPage from 'AuthenticationPages/SignUpPage';
import DashboardPage from 'AuthenticationPages/DashboardPage';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

export default App;
