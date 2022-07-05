import React from 'react';
import {H1, H2, H3, H4} from '../../ReusableComponents/Headings.jsx';
import {Pagination} from '../../ReusableComponents/Pagination.jsx';
import {Code} from '../../ReusableComponents/Code.jsx';


export default function Introduction() {

    const webServer = `php -S localhost:8000`;
    const brewPhpInstall = `brew install php@8.1`;
    const brewChangePhpVersion = `brew unlink php
    brew link --overwrite php@8.0
    brew unlink php
    brew link --overwrite php@8.1`;
    return <div>
        <div className="content-wrapper">
            <div className="content-display">
                <H1 h1="Getting started" />
                <br/>

                {/* Latest Stable Version Section */}
                <a id="stable_version"><H2 h2="Using the current stable version" /></a>
                <p>
                    If you are getting started with php its better if you can use the current stable version.
                    PHP 8.1. PHP 8 adds many new features over older versions PHP 7.x and PHP 5.x. PHP is even more
                    quicker compared to older versions because the engine has been largely re-written.
                </p>
                <p>
                    PHP 8 is a major update of the language and has many new features and optimizations.
                </p>
                <p>
                    You should upgrade to latest version quickly. Upgrading is easy there are not many backwards compatibility breaks. 
                    To check the current PHP version you can run the following command.
                </p>
                <br/>

                {/* Built In Web Server */}
                <a id="web_server"><H2 h2="Built in web-server" /></a>
                <p>
                    With PHP 5.4 or newer you can use the built in web server in php. Without installing any full-fledged
                    webserver like MAMP or XAMPP.
                </p>
                <p>
                    If you won't to run the web-server you can run the following command in your terminal.
                </p>

                <Code code={webServer} />

                <p>
                    This web-server runs only one single thread process. 
                    <b>
                        ( Single threaded processes contain the execution of instructions in a single sequence. In other words, 
                        one command is processes at a time. )
                    </b>
                    So PHP application will stall if the application if a request is blocked.
                </p>

                <p>
                    URL request are served from the current working directory where PHP was started.
                    Otherwise the <b>-t</b> option is used to specify a document root. And also if the request doesn't request dose not specify a file, 
                    then either index.html or index.php in the directory will de served by default.
                </p>

                <p>
                    If it could not accomplish any of the following option then a 404 page will be displayed.
                </p>
                
                <br/>


                {/* Mac Os Setup */}
                <a id="mac_setup"><H2 h2="Mac setup" /></a>
                <p>
                    MacOs is pre-packaged with PHP but most of the time its a bit behind the latest stable PHP version.
                    There are multiple ways to install PHP in MACOS.
                </p>
                <H3 h3="Install PHP via Homebrew" />
                <p>
                    Homebrew is a package manager for MacOs which allows you to install PHP and other various extensions.
                    The Homebrew core repository provides “formulae” for PHP 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0 and 
                    PHP 8.1. Install the latest version with this command:
                </p>
                <Code code={brewPhpInstall} />

                <p>
                    You can also switch between Homebrew PHP versions by changing the PATH variable. Alternatively, you can
                    switch between PHP versions by linking and Unlinking the wanted versions.
                </p>

                <Code code={brewChangePhpVersion} />

                <p>You can learn more about this <a href="https://medium.com/@rasifsahl/how-to-install-php-on-a-mac-and-how-to-switch-between-php-versions-in-mac-ec6a96823ca7">by clicking this link.</a></p>

                <H3 h3="Install PHP via phpbrew" />
                <p>
                    <a href="https://github.com/phpbrew/phpbrew">phpbrew</a> is a tool for installing and managing multiple PHP versions.
                    This could be really useful when 02 different applications or project require different versions of PHP,
                    And if you are not using a virtual machines.

                </p>

                <H3 h3="All-in-One Installers" />
                <p>
                    All the solutions listed above mainly handles PHP by itself. And it won't supply things like Apache, Nginx or a SQL server.
                    All-in-one solutions like XAMPP and MAMP will install theses other bit of softwares for you and tie them for you.
                </p>
                <br/>

                {/* Windows Setup */}
                <a id="window_setup"><H2 h2="Windows setup" /></a>
                <p>
                    You can download the binary version of <a href="https://windows.php.net/download/">windows.php.net/download/</a>
                    After the extraction of the php it is recommended to add the path to the root of your php folder. Where the php.exe
                    is located.
                </p>
                <p>
                    For learning and local development you can use built in web-servers with php 5.4 and higher.
                    So then you don't have to worry about any configurations.
                </p>
                <p>
                    If you need the webserver and MySql together then you can use tools such as XAMPP, EasyPHP, OpenServer and WAMP will help
                    to get windows development environment up and running.
                </p>
                <p>
                    That said, these tools will be a little different from production so be careful of environment differences if you are working on Windows and deploying to Linux.
                </p>
                <p>
                    Generally running your application on different environment in development and production can lead to strange bugs popping up when you go live. 
                    If you are developing on Windows and deploying to anything non-Windows then you should consider using a Virtual Machine.
                </p>
                <br/>

                {/* Common Directory Structure */}
                <a id="directory_structure"><H2 h2="Common directory structure" /></a>
                <p>
                    A common question most new developers ask is "How can I manege my directory structure?"
                </p>
                <p>
                    For security reasons, configuration files should not be accessible by a site’s visitors;
                    therefore, public scripts are kept in a public directory and private configurations and data are kept outside of that directory.
                </p>
                <p>
                    For each team, CMS, or framework one works in, a standard directory structure is used by each of those entities. 
                    However, if one is starting a project alone, knowing which filesystem structure to use can be daunting.
                </p>
                <p>
                    So as an best practice DocumentRoot should be pointed to the public/ directory. PHPUnit test should be in the test/ directory and the
                    dependencies which are download from the composer should be in the vendor/ directory. For more information <a href="https://github.com/php-pds/skeleton">Standard PHP Package Skeleton</a>
                </p>
                <br/>
                <Pagination previousLink="/" previous="Welcome"  nextLink="/codingStyle" next="Coding Style"/>
            </div>
        </div>

        <div className="right-content-wrapper">
            <div className="right-content-display">
                {/* <div className="headding">Page Navigation</div> */}
                <ul>
                    <li><a href="#stable_version">Using the current stable version</a></li>
                    <li><a href="#web_server">Built in web-server</a></li>
                    <li><a href="#mac_setup">Mac setup</a></li>
                    <li><a href="#window_setup">Windows setup</a></li>
                    <li><a href="#directory_structure">Common directory structure</a></li>
                </ul>
            </div>
        </div> 
        
    </div>
}