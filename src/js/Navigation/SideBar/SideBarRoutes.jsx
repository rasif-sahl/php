import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SideBarRoutes() 
{
    return <div>
        <ul>
            <div className="sideBar-list">
                <li>
                    <NavLink 
                    // style={({ isActive }) => ({
                    //     color: isActive ? '#fff' : '#545e6f',
                    //     background: isActive ? '#7600dc' : '#f0f0f0',
                    //     })} 

                    // className={({ isActive }) => { isActive ? "isActive" : null  }} 

                    // activeClassName="isActive"
                    to="/">Welcome</NavLink>
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