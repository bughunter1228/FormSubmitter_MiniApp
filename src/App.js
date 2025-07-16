// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your components
import LoginPage from './Pages/LoginPage';

function App() {
    return (
      <>
        <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
          </Routes>
        </Router>
      </>
    );
}

export default App;
