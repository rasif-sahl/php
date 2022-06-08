import React from 'react';
import Navigation from "./Navigation/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CodingStyle from './Pages/Main/Content/CodingStyle';
import Latest from './Pages/NewFeatures/Latest';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<CodingStyle />} />
        <Route path='/updates' element={<Latest/>} />
      </Routes>
    </Router>
  );
}

export default App;
