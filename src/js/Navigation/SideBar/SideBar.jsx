import React from 'react';
import '../../../scss/pages/sideBar.scss';
import SideBarRoutes from './SideBarRoutes.jsx';
import { Outlet } from 'react-router-dom';

export default function SideBar() 
{
    return (
        <div>
            <div className="sidebar">
                {/* <a href="/" className="brand-name">
                    PHP Tutorial
                </a> */}
                <div className="navigation-menu">
                    <SideBarRoutes />
                </div>
            </div>
            <Outlet />
        </div>
    );
}