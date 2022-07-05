import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function DocumentingYourCode() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Documenting your Code" /></a>
                <br/>
                <a id="PHPDoc"><H2 h2="PHPDoc" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#PHPDoc">PHPDoc</a></li>
                </ul>
            </div>
        </div>
    </div>
}