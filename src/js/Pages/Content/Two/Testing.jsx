import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function Testing() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Testing" /></a>
                <br/>
                <a id="test_driven_development"><H2 h2="Test Driven Development" /></a>
                <br/>
                <a id="behavior_driven_development"><H2 h2="Behavior Driven Development" /></a>
                <br/>
                <a id="complementary_testing_tools"><H2 h2="Complementary Testing Tools" /></a>
                <br/>

                <Pagination previousLink="/security" previous="Security"  nextLink="/serversAndDeployment" next="Deployment"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#test_driven_development">Test Driven Development</a></li>
                    <li><a href="#behavior_driven_development">Behavior Driven Development</a></li>
                    <li><a href="#complementary_testing_tools">Complementary Testing Tools</a></li>
                </ul>
            </div>
        </div>
    </div>
}