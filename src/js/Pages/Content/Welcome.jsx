import React from 'react';
// import Content from '../../ReusableComponents/Content.jsx';
import '../../../scss/pages/main.scss';

export default function Welcome() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                content will be displayed here.
            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                The submenu will be displayed here. (Introduction)
            </div>
        </div>
    </div>
}