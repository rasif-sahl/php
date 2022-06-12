import React from 'react';
// import Content from '../../ReusableComponents/Content.jsx';
import '../../../scss/pages/sideBar.scss';

export default function CodingStyle() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                content will be displayed here.
            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                The submenu will be displayed here. (CodingStyle)
            </div>
        </div>
    </div>
}