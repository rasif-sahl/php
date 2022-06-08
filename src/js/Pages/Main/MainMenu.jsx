
import React from 'react';
import subdomainLogic from '../logic/subdomainLogic';
import NavLink from '../ReusableComponents/NavLink';
import SettingsDelete from './SettingsDelete';
import Code from './Code';

import Introduction from './Content/Introduction';
import Welcome from './Content/Welcome';
import CodingStyle from './Content/CodingStyle';

export default function Settings({type}) {


    var Type = () => <Introduction />;
    switch (type) {
        case 'welcome':
            Type = () => <Welcome />;
            break;
        case 'codingStyle':
            Type = () => <CodingStyle />;
            break;
    }

    return <div className="posts-view settings-view">
        <div className="box box-left">
            <div className="middle-heading">Settings</div>
            <div className="settings-nav">

                <NavLink href={settingsPrefix} exact={1}>Introduction</NavLink>
                <div />
                <NavLink href={settingsPrefix + "/welcome"}>Welcome</NavLink>
                <NavLink href={settingsPrefix + "/codingStyle"}>Coding Style</NavLink>
            
            </div>
        </div>
        <div className="box box-right settings-right">
            <Type />
        </div>
    </div>

}
