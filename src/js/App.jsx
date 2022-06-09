import React from 'react';
import Navigation from "./Navigation/Navigation.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Pages/Content/Welcome.jsx';
import Introduction from './Pages/Content/Introduction.jsx';
import CodingStyle from './Pages/Content/CodingStyle.jsx';

function App() {
  return (
    <div>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/introduction' element={<Introduction />} />
        <Route path='/codingStyle' element={<CodingStyle/>} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
