import React , { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from "./Navigation/SideBar/SideBar.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Footer from "./Footer/Footer.jsx";
// Content
import Welcome from './Pages/Content/Welcome.jsx';
import Introduction from './Pages/Content/Introduction.jsx';
import CodingStyle from './Pages/Content/CodingStyle.jsx';
import LanguageHighlights from './Pages/Content/LanguageHighlights.jsx';
import DependencyManagement from './Pages/Content/DependencyManagement.jsx';
import CodingPractices from './Pages/Content/CodingPractices.jsx';

import DependencyInjection from './Pages/Content/Two/DependencyInjection.jsx';
import Databases from './Pages/Content/Two/Databases.jsx';
import Templating from './Pages/Content/Two/Templating.jsx';
import ErrorsAndExceptions from './Pages/Content/Two/ErrorsAndExceptions.jsx';
import Security from './Pages/Content/Two/Security.jsx';
import Testing from './Pages/Content/Two/Testing.jsx';

import ServersAndDeployment from './Pages/Content/Three/ServersAndDeployment.jsx';
import Virtualization from './Pages/Content/Three/Virtualization.jsx';
import Caching from './Pages/Content/Three/Caching.jsx';
import DocumentingYourCode from './Pages/Content/Three/DocumentingYourCode.jsx';
import Resources from './Pages/Content/Three/Resources.jsx';
import Community from './Pages/Content/Three/Community.jsx';

// New features
import Latest from './Pages/NewFeatures/Latest.jsx';

// Testing
import Test from './Pages/Content/CodingPractices.jsx';

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
            <Route path="languageHighlights" element={<LanguageHighlights />} />
            <Route path="dependencyManagement" element={<DependencyManagement />} />
            <Route path="codingPractices" element={<CodingPractices/>} />

            {/* Part-2 */}
            <Route path="dependencyInjection" element={<DependencyInjection/>} />
            <Route path="databases" element={<Databases/>} />
            <Route path="templating" element={<Templating/>} />
            <Route path="errorsAndExceptions" element={<ErrorsAndExceptions/>} />
            <Route path="security" element={<Security/>} />
            <Route path="testing" element={<Testing/>} />

            {/* Part-3 */}
            <Route path="serversAndDeployment" element={<ServersAndDeployment/>} />
            <Route path="virtualization" element={<Virtualization/>} />
            <Route path="Caching" element={<Caching/>} />
            <Route path="DocumentingYourCode" element={<DocumentingYourCode/>} />
            <Route path="resources" element={<Resources/>} />
            <Route path="community" element={<Community/>} />


            {/* Test section */}
            <Route path="test" element={<Test/>} />
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