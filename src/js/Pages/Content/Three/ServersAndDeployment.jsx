import React from 'react';
import '../../../../scss/pages/main.scss';
import {H1, H2, H3, H4} from '../../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../../ReusableComponents/Pagination.jsx';

export default function ServersAndDeployment() {

    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <a><H1 h1="Servers and Deployment" /></a>
                <br/>
                <a id="PaaS"><H2 h2="Platform as a Service (PaaS)" /></a>
                <br/>
                <a id="virtual_dedicated_servers"><H2 h2="Virtual or Dedicated Servers" /></a>
                <br/>
                <a id="shared_servers"><H2 h2="Shared Servers" /></a>
                <br/>
                <a id="building_your_application"><H2 h2="Building Your Application" /></a>
                <br/>

                <Pagination previousLink="/testing" previous="Testing"  nextLink="/virtualization" next="Virtualization"/>

            </div>
        </div>
        <div className="right-content-wrapper">
            <div className="right-content-display">
                <ul>
                    <li><a href="#PaaS">Platform as a Service (PaaS)</a></li>
                    <li><a href="#virtual_dedicated_servers">Virtual or Dedicated Servers</a></li>
                    <li><a href="#shared_servers">Shared Servers</a></li>
                    <li><a href="#building_your_application">Building Your Application</a></li>
                </ul>
            </div>
        </div>
    </div>
}