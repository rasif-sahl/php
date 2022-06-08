// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import CodingStyle from '../Pages/Main/Content/CodingStyle';
// import Latest from '../Pages/NewFeatures/Latest';

// export default function Navigation() 
// {
//     return <div className="navigation">
        
//         <Router className="app-header">
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to={'/'} className="nav-link"> Home </Link></li>
//                         <li><Link to={'/updates'} className="nav-link">Latest Updates</Link></li>
//                     </ul>
//                 </nav>
//                 <hr />
//                 <Routes>
//                     <Route exact path='/' element={<CodingStyle />} />
//                     <Route path='/updates' element={<Latest/>} />
//                 </Routes>
//             </div>
//         </Router>

//     </div>
// }

import React from 'react';
import {  Link } from "react-router-dom";
import '../../scss/navigation.scss';

export default function Navigation() 
{
  return (
  <div className="navigation">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/updates">Updates</Link>
    </li>
  </div>
  );
}