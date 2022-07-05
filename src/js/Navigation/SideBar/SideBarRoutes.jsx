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
                <li>
                    <NavLink to="/dependencyInjection">Dependency Injection</NavLink>
                </li>
                <li>
                    <NavLink to="/databases">Databases</NavLink>
                </li>
                <li>
                    <NavLink to="/templating">Templating</NavLink>
                </li>
                <li>
                    <NavLink to="/errorsAndExceptions">Errors and Exceptions</NavLink>
                </li>
                <li>
                    <NavLink to="/security">Security</NavLink>
                </li>
                <li>
                    <NavLink to="/testing">Testing</NavLink>
                </li>
                <li>
                    <NavLink to="/serversAndDeployment">Servers and Deployment</NavLink>
                </li>
                <li>
                    <NavLink to="/virtualization">Virtualization</NavLink>
                </li>
                <li>
                    <NavLink to="/caching">Caching</NavLink>
                </li>
                <li>
                    <NavLink to="/documentingYourCode">Documenting your Code</NavLink>
                </li>
                <li>
                    <NavLink to="/resources">Resources</NavLink>
                </li>
                <li>
                    <NavLink to="/community">Community</NavLink>
                </li>

                {/* this part is added for testing purposes */}
                <li>
                    <NavLink to="/test">Test</NavLink>
                </li>
            </div>
        </ul>
    </div>
}