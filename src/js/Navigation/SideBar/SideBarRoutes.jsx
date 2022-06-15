import React from 'react';
import { Link } from 'react-router-dom';


export default function SideBarRoutes() 
{
    return <div>
        <ul>
            <div className="sideBar-list">
                <li>
                    <Link to="/">Welcome</Link>
                </li>
                <li>
                    <Link to="/introduction">Introduction</Link>
                </li>
                <li>
                    <Link to="/codingStyle">Coding Style</Link>
                </li>
                <li>
                    <Link to="/programmingParadigms">Programming Paradigms</Link>
                </li>
                <li>
                    <Link to="/dependencyManagement">Dependency Management</Link>
                </li>
                <li>
                    <Link to="/codingPractices">Coding Practices</Link>
                </li>
            </div>
        </ul>
    </div>
}