import React from 'react';
import '../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';

export default function DependencyManagement() {
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Dependency Management" /></a>
                <br/>
                <a id="Composer_packgist"><H2 h2="Composer and Packgist" /></a>
                <br/>
                <a id="PEAR"><H2 h2="PEAR" /></a>
                <br/>

                <Pagination previousLink="/" previous="Introduction"  nextLink="/codingStyle" next="Coding Style"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#Composer_packgist">Composer and Packgist</a></li>
                    <li><a href="#PEAR">PEAR</a></li>
                </ul>
            </div>
        </div>
    </div>
}