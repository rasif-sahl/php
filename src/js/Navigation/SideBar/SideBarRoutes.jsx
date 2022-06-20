import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SideBarRoutes() 
{
    return <div>
        <ul>
            <div className="sideBar-list">
                <li>
                    <NavLink to="/">Welcome</NavLink>
                </li>
                <li>
                    <NavLink to="/introduction">Introduction</NavLink>
                </li>
                <li>
                    <NavLink to="/codingStyle">Coding Style</NavLink>
                </li>
                <li>
                    <NavLink to="/programmingParadigms">Programming Paradigms</NavLink>
                </li>
                <li>
                    <NavLink to="/dependencyManagement">Dependency Management</NavLink>
                </li>
                <li>
                    <NavLink to="/codingPractices">Coding Practices</NavLink>
                </li>

                {/* this part is added for testing purposes */}
                <li>
                    <NavLink to="/test">Test</NavLink>
                </li>
            </div>
        </ul>
    </div>
}