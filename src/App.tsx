import LandingPage from 'LandingPage';
import Layout from 'Layouts/Layout';
import LoginPage from 'AuthenticationPages/LoginPage';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import store from 'store';
import ForgotPasswordPage from 'AuthenticationPages/ForgotPasswordPage';
import SignupPage from 'AuthenticationPages/SignUpPage';
import DashboardPage from 'NavBarComponents/DashboardHomePage';
import DashboardLayout from 'Layouts/DashboardLayout';
import CallHistoryPage from 'NavBarComponents/CallHistoryPage';
import ScheduledCallsPage from 'NavBarComponents/ScheduledCallsPage';

const App: React.FC = () => {
  const client_id =
    '754188762868-ak6bqkjap4jkldoof6oqu5doe2u090t0.apps.googleusercontent.com';
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={client_id}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignupPage />} />
              <Route path='forgot-password' element={<ForgotPasswordPage />} />
              <Route path='*' element={<LandingPage />} />
            </Route>
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route path='' element={<DashboardPage />} />
              <Route path='history' element={<CallHistoryPage />} />
              <Route path='schedules' element={<ScheduledCallsPage />} />
            </Route>
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App;
