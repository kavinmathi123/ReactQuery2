import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
