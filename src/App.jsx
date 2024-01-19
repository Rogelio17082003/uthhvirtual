// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import './assets/styles/responsive.css';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';  
import PrivacyPolicy from './pages/Terminos';
import Cockies from './pages/Cockies';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout><HomePage /></Layout>}
        />
        <Route
          path="/Terminos-Condiciones"
          element={<Layout><PrivacyPolicy/></Layout>}
        />
        <Route
          path="/Politica-de-Cockies"
          element={<Layout><Cockies/></Layout>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </Router>
  );
}

export default App;
