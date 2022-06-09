import React, { useState } from 'react';
import '../../scss/navigation.scss';

export default function Navigation() 
{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                PHP Tutorial
            </a>
            <button className="hamburger" 
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={
                    isNavExpanded ? "expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <a href="/">Welcome</a>
                    </li>
                    <li>
                        <a href="/introduction">Introduction</a>
                    </li>
                    <li>
                        <a href="/codingStyle">Coding Style</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
}