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
            </div>
        </ul>
    </div>
}