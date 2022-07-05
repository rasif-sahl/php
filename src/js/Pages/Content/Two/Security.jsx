import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Security() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Security" /></a>
                <br/>
                <a id="web_application_security"><H2 h2="Web Application Security" /></a>
                <br/>
                <a id="password_hashing"><H2 h2="Password Hashing" /></a>
                <br/>
                <a id="data_filtering"><H2 h2="Data Filtering" /></a>
                <br/>
                <a id="register_globals"><H2 h2="Register Globals" /></a>
                <br/>
                <a id="error_reporting"><H2 h2="Error Reporting" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#web_application_security">Web Application Security</a></li>
                    <li><a href="#password_hashing">Password Hashing</a></li>
                    <li><a href="#data_filtering">Data Filtering</a></li>
                    <li><a href="#register_globals">Register Globals</a></li>
                    <li><a href="#error_reporting">Error Reporting</a></li>
                </ul>
            </div>
        </div>
    </div>
}