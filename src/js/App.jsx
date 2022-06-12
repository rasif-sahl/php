import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./Navigation/SideBar/SideBar.jsx";
import Navigation from "./Navigation/Navigation.jsx";
// Content
import Welcome from './Pages/Content/Welcome.jsx';
import Introduction from './Pages/Content/Introduction.jsx';
import CodingStyle from './Pages/Content/CodingStyle.jsx';
// New features
import Latest from './Pages/NewFeatures/Latest.jsx';

function App() {
  return (
    <div>
    <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<SideBar />} >
            <Route path="" element={<Welcome />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="codingStyle" element={<CodingStyle/>} />
          </Route>
          <Route path="/latest" element={<Latest />} />
        </Routes>
     </Router>
    </div>
    
  );
}

export default App;
