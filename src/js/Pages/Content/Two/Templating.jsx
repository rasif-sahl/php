import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Templating() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Templating" /></a>
                <br/>
                <a id="benefits"><H2 h2="Benefits" /></a>
                <br/>
                <a id="plain_PHP_templates"><H2 h2="Plain PHP Templates" /></a>
                <br/>
                <a id="compiled_templates"><H2 h2="Compiled Templates" /></a>
                <br/>
                <a id="further_reading"><H2 h2="Further Reading" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#benefits">Benefits</a></li>
                    <li><a href="#plain_PHP_templates">Plain PHP Templates</a></li>
                    <li><a href="#compiled_templates">Compiled Templates</a></li>
                    <li><a href="#further_reading">Further Reading</a></li>
                </ul>
            </div>
        </div>
    </div>
}