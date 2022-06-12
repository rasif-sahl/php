import React from 'react';
import { Link } from "react-router-dom";
import '../../scss/navigation/navigation.scss';

export default function Navigation() 
{
    return <div>
        <nav className="navigation">
            <a href="/" className="brand-name">
                PHP
            </a>
            <div className="navigation-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="latest">Latest News</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
}