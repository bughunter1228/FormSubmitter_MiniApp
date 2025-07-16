// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import LoginPage from './Pages/LoginPage';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
        </Routes>
      </Router>
    );
}

export default App;
