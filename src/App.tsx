import React from 'react';
// import logo from './logo.svg';
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
