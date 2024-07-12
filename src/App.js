import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

const PrivateRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('UserData');
  return loggedIn ? children : <Navigate to='/login' />;
}

const App = () => {
  // const isLoggedIn = localStorage.getItem('userData');

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Navigate to='/login' />} />

        {/* <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />

        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        
        <Route path="/" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

