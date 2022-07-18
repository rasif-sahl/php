import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function ErrorsAndExceptions() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Errors and Exceptions" /></a>
                <br/>
                <a id="errors"><H2 h2="Errors" /></a>
                <br/>
                <a id="Exceptions"><H3 h3="Exceptions" /></a>
                <br/>

                <Pagination previousLink="/templating" previous="Templating"  nextLink="/security" next="Security"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#errors">Errors</a></li>
                    <li><a href="#exceptions">Exceptions</a></li>
                </ul>
            </div>
        </div>
    </div>
}