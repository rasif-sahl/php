import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function DependencyInjection() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Dependency Injection" /></a>
                <br/>
                <a id="basic_concept"><H2 h2="Basic Concept" /></a>
                <br/>
                <a id="complex_problem"><H2 h2="Complex Problem" /></a>
                <br/>
                <a id="containers"><H2 h2="Containers" /></a>
                <br/>
                <a id="further_reading"><H2 h2="Further Reading" /></a>
                <br/>

                <Pagination previousLink="/introduction" previous="Introduction"  nextLink="/" next="Welcome"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#basic_concept">Basic Concept</a></li>
                    <li><a href="#complex_problem">Complex Problem</a></li>
                    <li><a href="#containers">Containers</a></li>
                    <li><a href="#further_reading">Further Reading</a></li>
                </ul>
            </div>
        </div>
    </div>
}