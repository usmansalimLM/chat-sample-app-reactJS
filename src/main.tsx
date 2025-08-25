import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatApp from './App.tsx'; // Renamed App to ChatApp
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Make the ChatApp the default route */}
        <Route path="/" element={<ChatApp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
