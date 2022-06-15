import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./Navigation/SideBar/SideBar.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Footer from "./Footer/Footer.jsx";
// Content
import Welcome from './Pages/Content/Welcome.jsx';
import Introduction from './Pages/Content/Introduction.jsx';
import CodingStyle from './Pages/Content/CodingStyle.jsx';
import ProgrammingParadigms from './Pages/Content/ProgrammingParadigms.jsx';
import DependencyManagement from './Pages/Content/DependencyManagement.jsx';
import CodingPractices from './Pages/Content/CodingPractices.jsx';
// New features
import Latest from './Pages/NewFeatures/Latest.jsx';

function App() {
  return (
    <div>
      <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<SideBar />} >
            <Route path="" element={<Welcome />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="codingStyle" element={<CodingStyle/>} />

            <Route path="programmingParadigms" element={<ProgrammingParadigms />} />
            <Route path="dependencyManagement" element={<DependencyManagement />} />
            <Route path="codingPractices" element={<CodingPractices/>} />
          </Route>
          <Route path="/latest" element={<Latest />} />
        </Routes>
     </Router>
      </div>
      <div><Footer/></div>
     
    </div>
    
  );
}

export default App;
