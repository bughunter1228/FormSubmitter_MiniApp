// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
// import NotFound from './NotFound';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
        </Routes>
      </Router>
    );
}

export default App;
